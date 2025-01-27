/* eslint-disable */
import { Data } from "./assets/Collary";
import { AiFillGithub } from "react-icons/ai"; 
import { AiFillYoutube } from "react-icons/ai"; 
import { BsFacebook } from "react-icons/bs"; 
import { FaXTwitter } from "react-icons/fa6";
import { FaChartPie } from "react-icons/fa"; 
import { FaLightbulb } from "react-icons/fa"; 
import { MdOutlineCenterFocusStrong } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

import React , {useState , useEffect} from 'react';
import { Link , useNavigate } from "react-router";


function Home() {


    const navigate = useNavigate();

    function handleStart()
    {
        let storage = localStorage.getItem("progress");
        console.log("omar")
        if(storage)
        {
            let lesson = Data[parseInt(storage)];
            if(lesson.type == "practice"){
                navigate(`/practice?index=${storage}`);
            }else{
                navigate(`/lesson?index=${storage}`);
            }
        }else{
            navigate(`lesson?index=0`)
        }
    }


    const [operation , setOperation] = useState(3);

    const WhatWillYouLearn = [
            ["Learn Quick Addition Tricks: Master simple techniques to add numbers faster by rounding and redistributing values.",
                "Boost Your Mental Addition Skills: Use mental math strategies to quickly solve addition problems without relying on a calculator."
                ,"Develop Speed in Adding Large Numbers: Practice tricks to add multi-digit numbers in seconds, improving both speed and accuracy."
            ],
            [
                "Simplify Subtraction with Smart Strategies: Discover methods to subtract numbers faster by rounding and simplifying.",
                "Quickly Solve Complex Subtraction Problems: Learn techniques that make subtracting large numbers quick and easy, even mentally.",
            ],
            [
                "Multiply Quickly with Simple Tricks: Learn to multiply numbers in your head using methods like the rainbow method and multiplication by 11.",
                "Speed Up Your Multiplication: Master multiplication shortcuts to handle large numbers and multi-digit calculations faster.",
                "Master Advanced Multiplication Techniques: From multiplying one-digit by two-digit numbers to three-digit multiplications, get comfortable with any problem."
            ],
            [
                "Understand and Apply Square Formulas: Learn how to quickly calculate squares of numbers, both simple and complex.",
                "Accelerate Your Calculation Speed: Use tricks to solve square problems rapidly, improving your efficiency in math.",
            ]
            ,
            [
                "Quickly Find Square Roots: Learn tricks to estimate and calculate square roots, including both perfect and non-perfect squares.",
                "Master the Square Root Trick: Discover how to approximate square roots in seconds using simple estimation techniques.",
                "Boost Your Confidence in Roots: Gain the ability to quickly and accurately solve square root problems without a calculator."
            ]
    ]

    useEffect(() => {
        AOS.init({
            duration: 400, // Animation duration in milliseconds
            once: true,     // Whether animation should happen only once
        });
    }, []);



    return (
    <>
        <section className=' flex items-center justify-center flex-col p' data-aos="fade-up">
            <div className=' flex items-center justify-center flex-col'>
                <h1 className='text-navy text-[9rem] text-wrap font-bold font-Mono'>Learn</h1>
                <h1 className='text-navy text-[9rem] text-wrap font-bold font-Mono'>Mental Math</h1>
            </div>
            <p className=' text-xl text-gray'>Speed, Accuracy, and Confidence in Every Calculation!</p>
            <div className=' mt-10 bg-navy py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button' onClick={handleStart}>Get Started</div>
        </section>
        <section className=" bg-[url('../public/GeometricLightNavy.png')] bg-navy pb-10 bg-contain brightness-90 mt-20 flex items-center justify-center flex-col pt-10">
            <h1 className="font-Mono text-6xl text-white font-medium">Why Mental Math?</h1>
            <div className=" flex items-center justify-around w-full mt-10">
                <div className="text-white text-3xl text-center flex items-center justify-center flex-col">
                    <MdOutlineCenterFocusStrong className="text-6xl mb-3"/>
                    <h1>Improve Focus</h1>
                </div>
                <div className="text-white text-3xl text-center flex items-center justify-center flex-col">
                    <FaLightbulb className="text-6xl mb-3"/>
                    <h1 className="text-wrap">Improve Problem Solving</h1>
                </div>
                <div className="text-white text-3xl text-center flex items-center justify-center flex-col">
                    <FaChartPie className="text-6xl max-w-8 text-wrap mb-3"/>
                    <h1 className=" max-w-[16rem] text-wrap">Improve Financial Management</h1>
                </div>
            </div>
        </section>
        <section className="pt-10 flex items-center justify-center flex-col">
            <h1 className="text-navy text-7xl font-bold ">What Will You Learn?</h1>
            <div className="flex items- justify-center mt-20">
                <div className="w-1/3  mr-20"><img src="../public/Brain3.png" alt="" className=""/></div>
                <div className="w-2/3">
                    <div className="flex items-center justify-around text-xl text-white bg-lightNavy mb-10 rounded-full py-5">
                        <h1 className={`${operation === 0 ? "bg-navy" : ""} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`} onClick={e => setOperation(0)}>Addition</h1>
                        <h1 className={`${operation === 1 ? "bg-navy" : ""} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`} onClick={e => setOperation(1)}>Subtraction</h1>
                        <h1 className={`${operation === 2 ? "bg-navy" : ""} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`} onClick={e => setOperation(2)}>Multiplication</h1>
                        <h1 className={`${operation === 3 ? "bg-navy" : ""} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`} onClick={e => setOperation(3)}>Squares</h1>
                        <h1 className={`${operation === 4 ? "bg-navy" : ""} rounded-full px-5 py-3 transition-all hover:bg-black cursor-pointer`} onClick={e => setOperation(4)}>Roots</h1>
                    </div>
                    <div className="bg-slate-100 p-5 rounded-3xl max-w-1/2">
                        {
                            WhatWillYouLearn[operation].map((item) => {
                                return(
                                    <div className="flex items-center justify-center my-3 font-medium text-wrap">{item}</div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
        <section className="flex items-center justify-between mx-20 mt-24">
            <div className="flex items-center justify-center flex-col">
                <h1 className="text-7xl text-center font-semibold text-navy">Practice Makes Perfect</h1>
                <p className="text-xl">We Have Tons Of Practice Inside</p>
            </div>
            <img src="../public/Arrows.png" alt="" className="w-2/3 "/>
        </section>
        <footer className="flex items-center justify-center bg-gray text-white h-16 text-xl gap-5">
            <BsFacebook className="cursor-pointer"/>
            <FaXTwitter className="cursor-pointer"/>
            <h1 className="text-3xl font-bold">BrainsMath</h1>
            <AiFillYoutube className="cursor-pointer"/>
            <AiFillGithub className="cursor-pointer"/>
        </footer>
    </>
    );
}

export default Home;