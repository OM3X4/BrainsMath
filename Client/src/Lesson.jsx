/* eslint-disable */
import React , { useState , useEffect} from 'react';
import { Data } from "./assets/Collary"

function Lesson() {

    const [lesson , setLesson] = useState(Data["1"]);
    const [currentContent , setCurrentContent] = useState(0);
    const [isWrongAnswer , setIsWrongAnswer] = useState(false);



    // useEffect(() => {
    //     console.log(lesson)
    // })

    function handleClick(answer , result){
        if(answer == result){
            if(currentContent < lesson.content.length - 1){
                setCurrentContent(c => c + 1);
            }else{

            }
        }else{
            setIsWrongAnswer(true)
            setTimeout(() => {
                setIsWrongAnswer(false)
            } , 2000)
        }
    }


    return (
    <>
        <div className='flex items-center justify-center h-[calc(80vh-5rem)]'>
            <div>
                {/* numbers */}
                <div className=' text-8xl mb-10 font-bold text-navy text-center'>
                    {lesson.content[currentContent].numbers}
                </div>
                {/* main text */}
                <div className={`max-w-[80%] mx-auto text-wrap text-center text-gray ${lesson.content[currentContent].numbers.length ? "text-2xl" : "text-5xl"}  `}>
                    {lesson.content[currentContent].text}
                </div>
                {/* choice */}
                <div className='flex items-center justify-center flex-wrap gap-5'>
                    {
                        lesson.content[currentContent].answer?
                        lesson.content[currentContent].answer.choices.map((choice) => {
                            return(
                                <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'
                                onClick={e => handleClick(choice , lesson.content[currentContent].answer.answer)}>
                                    {choice}
                                </div>
                            )
                        })
                        :
                    <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1)}>
                        Next
                    </div>
                    }
                </div>
            </div>
            {/* Draft */}
            {lesson.content[currentContent].draft?
            <div className='border-2 border-black p-5 rounded-2xl flex justify-center items-center flex-col absolute right-10'>
                <h1 className='text-2xl text-navy'>Draft</h1>
                {lesson.content[currentContent].draft}
            </div>
            :""}
        </div>
        {isWrongAnswer?
        <div class="animate-slideDown absolute right-10 top-10 w-1/4 mx-auto flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Wrong Answer!</span> Try Again
            </div>
        </div>: ""}
    </>
    );
}

export default Lesson;