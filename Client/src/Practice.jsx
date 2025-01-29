/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Data } from './assets/Collary';
import { useNavigate, useLocation, useSearchParams } from 'react-router';

const saveProgress = (collectedData) => {
    try {
        const existingData = JSON.parse(localStorage.getItem("collectedData") || "[]");
        const mergedData = [...existingData, ...collectedData];
        localStorage.setItem("collectedData", JSON.stringify(mergedData));
    } catch (error) {
        console.error("Failed to save progress:", error);
    }
};


function Practice() {

    const errorSound = new Audio("../src/assets/Error.mp3")
    const correctSound = new Audio("../src/assets/Correct.mp3")
    const correctSound2 = new Audio("../src/assets/Correct2.mp3")



    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(null)
    const [lesson, setLesson] = useState(null);
    const [currentContent, setCurrentContent] = useState(0);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [progress, setProgress] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)

    const [startTime, setStartTime] = useState(performance.now())
    const [collectedData, setCollectedData] = useState([])

    const navigate = useNavigate();
    const [search] = useSearchParams()

    //no touch
    useEffect(() => {
        setCurrentLessonIndex(parseInt(search.get("index")))
        setLesson(Data[parseInt(search.get("index"))])
    }, [search])


    // no touch
    useEffect(() => {
        setStartTime(performance.now())
    }, [currentContent])

    //no touch
    useEffect(() => {
        setLesson(Data[currentLessonIndex])
        setCurrentContent(0)
        setProgress(0)
    }, [currentLessonIndex])




    function handleClick(e ,choice, answer) {
        if (isButtonDisabled) return;
        setIsButtonDisabled(true);
        if (answer == choice) {
            correctSound.play()
            if (lesson.content.length - 1 > currentContent) {
                const endTime = performance.now()
                setCollectedData(prev => [...prev, { question: lesson.content[currentContent], takenTime: (endTime - startTime), date: new Date(Date.now()), type: lesson.content[currentContent], isRight: true }])
                setProgress(c => c + ((1 / lesson.content.length) * 100))
                setIsCorrectAnswer(true)
                setTimeout(() => {
                    setIsCorrectAnswer(false)
                    setCurrentContent(c => c + 1)
                    setIsButtonDisabled(false)
                }, 1000)
            } else {
                if (Data.length > currentLessonIndex + 1) {
                    saveProgress(collectedData);

                    if (Data[currentLessonIndex + 1].type == "practice") {
                        setCurrentLessonIndex(prev => prev + 1);
                        let LastProgress = parseInt(localStorage.getItem("progress"));
                        localStorage.setItem("progress", LastProgress + 1 || 0);
                    } else {
                        navigate(`/lesson?index=${currentLessonIndex + 1}`)
                        let LastProgress = parseInt(localStorage.getItem("progress"));
                        localStorage.setItem("progress", LastProgress + 1 || 0);
                    }
                }else{
                    navigate('/cong')
                }
            }
        } else if (currentContent < lesson.content.length - 1) {
            errorSound.play()
            const temp = lesson.content[currentContent];

            const endTime = performance.now()
            // Create a new array without mutating the original state
            const updatedContent = [
                ...lesson.content.slice(0, currentContent), // Everything before currentContent
                ...lesson.content.slice(currentContent + 1), // Everything after currentContent
                temp // Push the temp element to the end
            ];
            setCollectedData(prev => [...prev, { question: lesson.content[currentContent], takenTime: (endTime - startTime), date: new Date(Date.now()), type: lesson.content[currentContent], isRight: false }])



            setIsWrongAnswer(true)
            setTimeout(() => {
                setIsWrongAnswer(false)
                setLesson(prev => ({
                    type: "practice",
                    content: updatedContent
                }));
                setIsButtonDisabled(false)
            }, 500)

        } else {
            correctSound2.play()
            let endTime = performance.now();
            setCollectedData(prev => [...prev, { question: lesson.content[currentContent], takenTime: (endTime - startTime), date: new Date(Date.now()), type: lesson.content[currentContent], isRight: false }])
            if (Data.length > currentLessonIndex + 1) {
                if (Data[currentLessonIndex + 1].type == "practice") {
                    navigate("/lessonfinisher", { state: { link: `/practice?index=${currentLessonIndex + 1}` } })
                } else {
                    navigate("/lessonfinisher", { state: { link: `/lesson?index=${currentLessonIndex + 1}` } })
                }
            }
        }
    }



    return (
        <>
            {lesson ? <main className={`flex items-center justify-center h-[calc(80vh-5rem)]`}>
                <div className="w-6/12 bg-slate-400 rounded-full h-4 dark:bg-gray-700 absolute top-20">
                    <div className="bg-green h-4 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
                </div>
                <div>
                    {/* numbers */}
                    <div className=' text-8xl mb-10 font-bold text-navy text-center'>
                        {lesson.content[currentContent].question}
                    </div>
                    {/* choice */}
                    <ul className='flex items-center justify-center flex-wrap gap-5'>
                        {
                            lesson.content[currentContent].choices ?
                                lesson.content[currentContent].choices.map((choice, i) => {
                                    return (
                                        <li key={i} className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'
                                            onClick={e => handleClick(e , choice, lesson.content[currentContent].answer)}>
                                            {choice}
                                        </li>
                                    )
                                })
                                :
                                <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1, 1)}>
                                    Next
                                </div>
                        }
                    </ul>
                </div>
            </main>
                : ""}
            {isWrongAnswer ?
                <div className=" absolute bottom-10 w-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-5 p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">            <div className='flex items-center justify-center'>
                    <svg className="flex-shrink-0 inline w-7 h-7 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium text-2xl">Wrong Answer!</span>
                    </div>
                </div>
                    <div className='text-center  bg-red-800 py-2 px-3 text-white rounded-2xl text-sm shadow-[2px_2px_0_rgb(250,159,159)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1, 1)}>
                        Next
                    </div>
                </div> : ""}
            {isCorrectAnswer ?
                <div className=" absolute bottom-10 w-1/4 left-1/2 -translate-x-1/2 flex items-center justify-center flex-col gap-5 p-4 mb-4 text-sm text-green  border border-green rounded-lg" role="alert">
                    <div className='flex items-center justify-center'>
                        <svg className="flex-shrink-0 inline w-7 h-7 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span className="sr-only">Info</span>
                        <div>
                            <span className="font-medium text-2xl">Correct Answer!</span>
                        </div>
                    </div>
                </div> :
                ""}
        </>
    );
}

export default Practice;