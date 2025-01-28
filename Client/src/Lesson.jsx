/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Data } from "./assets/Collary"
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router';


const renderTextWithBold = (text) => {
    // Split the text by newline first to create paragraphs
    const paragraphs = text.split('\n');

    // Process each paragraph
    return paragraphs.map((paragraph, paragraphIndex) => {
      // Split each paragraph by ** for bold, * for italic, and _ for underline
      const parts = paragraph.split(/(\*\*.*?\*\*|\*.*?\*|_.*?_\_)/g);

      // Process each part of the paragraph
      const formattedParagraph = parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          // Bold formatting
          return <strong key={`${paragraphIndex}-${index}`}>{part.slice(2, -2)}</strong>;
        } else if (part.startsWith('*') && part.endsWith('*')) {
          // Italic formatting
          return <em key={`${paragraphIndex}-${index}`}>{part.slice(1, -1)}</em>;
        } else if (part.startsWith('_') && part.endsWith('_')) {
          // Underline formatting
          return <u key={`${paragraphIndex}-${index}`}>{part.slice(1, -1)}</u>;
        } else {
          // Regular text
          return part;
        }
      });

      // Join the parts and return the formatted paragraph wrapped in a <p> tag
      return <p key={paragraphIndex}>{formattedParagraph}</p>;
    });
};


function Lesson() {

    const errorSound = new Audio("../src/assets/Error.mp3")
    const correctSound = new Audio("../src/assets/Correct.mp3")
    const correctSound2 = new Audio("../src/assets/Correct2.mp3")


    const [lesson, setLesson] = useState(Data[0]);
    const [currentContent, setCurrentContent] = useState(0);
    const [isWrongAnswer, setIsWrongAnswer] = useState(false);
    const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
    const [isCorrectAnswer, setIsCorrectAnswer] = useState(false)



    const location = useLocation();
    const navigate = useNavigate();
    const [search] = useSearchParams();



    useEffect(() => {
        setCurrentLessonIndex(parseInt(search.get("index")))
        setLesson(Data[parseInt(search.get("index"))])
        const i = location.state;
        if (i) {
            setLesson(Data[location.state.index]);
        }
    }, [])


    function handleClick(answer, result, next) {
        if (answer == result) {
            correctSound.play();
            if (currentContent < lesson.content.length - 1) {
                if (next) {
                    setCurrentContent(c => c + 1);
                } else {
                    setIsCorrectAnswer(true);
                    setTimeout(() => {
                        setCurrentContent(c => c + 1);
                        setIsCorrectAnswer(false)
                    }, 200)
                }
            } else {
                if (Data.length > currentLessonIndex + 1) {
                    correctSound2.play();
                    if (Data[currentLessonIndex + 1].type == "lesson") {
                        navigate("/lessonfinisher", { state: { link: `/lesson?index=${currentLessonIndex + 1}` } })
                    } else {
                        navigate("/lessonfinisher", { state: { link: `/practice?index=${currentLessonIndex + 1}` } })
                    }
                    let LastProgress = parseInt(localStorage.getItem("progress"));
                    localStorage.setItem("progress", LastProgress + 1 || 0)
                }
            }
        } else {
            errorSound.play();
            setIsWrongAnswer(true)
            setTimeout(() => {
                setIsWrongAnswer(false)
            }, 1000)
        }
    }


    return (
        <>
            {lesson ? <div className='flex items-center justify-center h-[calc(80vh-5rem)]'>
                <div>
                    {/* numbers */}
                    <div className=' text-8xl mb-10 font-bold text-navy text-center'>
                        {lesson.content[currentContent].numbers}
                    </div>
                    {/* main text */}
                    <div className={`max-w-[80%] mx-auto text-wrap text-center text-gray ${lesson.content[currentContent].numbers.length ? "text-2xl" : "text-5xl"}  `}>
                        {renderTextWithBold(lesson.content[currentContent].text)}
                    </div>
                    {/* choice */}
                    <div className='flex items-center justify-center flex-wrap gap-5'>
                        {
                            lesson.content[currentContent].answer ?
                                lesson.content[currentContent].answer.choices.map((choice, i) => {
                                    return (
                                        <div key={i} className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'
                                            onClick={e => handleClick(choice, lesson.content[currentContent].answer.answer)}>
                                            {choice}
                                        </div>
                                    )
                                })
                                :
                                <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1, 1, true)}>
                                    Next
                                </div>
                        }
                    </div>
                </div>
                {/* Draft */}
                {lesson.content[currentContent].draft ?
                    <div className='border-2 border-black p-5 rounded-2xl flex justify-center items-center flex-col absolute right-10'>
                        <h1 className='text-2xl text-navy'>Draft</h1>
                        {lesson.content[currentContent].draft}
                    </div>
                    : ""}
            </div> : ""}
            {isWrongAnswer ?
                <div className="animate-slideDown absolute right-10 top-10 w-1/4 mx-auto flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Wrong Answer!</span> Try Again
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

export default Lesson;