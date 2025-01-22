/* eslint-disable */
import React , { useState , useEffect} from 'react';
import { Data } from './assets/Collary';

function Practice() {

    const [lesson , setLesson] = useState(Data["2"]);
    const [currentContent , setCurrentContent] = useState(0);
    const [isWrongAnswer , setIsWrongAnswer] = useState(false);
    const [progress , setProgress] = useState(0);
    

    function handleClick(choice , answer){
        if(answer == choice){
            if(lesson.content.length > currentContent){
                setCurrentContent(c => c + 1)
                setProgress(c => c + ((1/lesson.content.length) * 100))
            }else{
                //transition
            }
        }else if(currentContent < lesson.content.length - 1){
            const temp = lesson.content[currentContent];

            // Create a new array without mutating the original state
            const updatedContent = [
                ...lesson.content.slice(0, currentContent), // Everything before currentContent
                ...lesson.content.slice(currentContent + 1), // Everything after currentContent
                temp // Push the temp element to the end
            ];
    
            setLesson(prev => ({
                type: "practice",
                content: updatedContent
            }));

            setIsWrongAnswer(true)
            setTimeout(() => {
                setIsWrongAnswer(false)
            } , 1500)

        }else{
            //transition
        }
    }
    
    useEffect(() => {
        console.log(lesson)
    })


    return (
    <>
        <div className='flex items-center justify-center h-[calc(80vh-5rem)]'>
            <div class="w-6/12 bg-slate-400 rounded-full h-4 dark:bg-gray-700 absolute top-20">
                <div class="bg-green h-4 rounded-full transition-all" style={{width: `${progress}%`}}></div>
            </div>
            <div>
                {/* numbers */}
                <div className=' text-8xl mb-10 font-bold text-navy text-center'>
                    {lesson.content[currentContent].question}
                </div>
                {/* choice */}
                <div className='flex items-center justify-center flex-wrap gap-5'>
                    {
                        lesson.content[currentContent].choices?
                        lesson.content[currentContent].choices.map((choice) => {
                            return(
                                <div className='text-center mt-10 bg-green py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'
                                onClick={e => handleClick(choice , lesson.content[currentContent].answer)}>
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
        </div>
        {isWrongAnswer?
        <div class="animate-slideDown absolute right-10 top-10 w-1/4 mx-auto flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
            <svg class="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span class="font-medium">Wrong Answer!</span>
            </div>
        </div>: ""}
    </>
    );
}

export default Practice;