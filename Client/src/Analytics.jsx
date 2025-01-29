/* eslint-disable */
import React , {useEffect , useState} from 'react';
// import { Cache } from './assets/Collary';
import { Link } from 'react-router';

import LineChart from './LineChart';






function Analytics() {


    const [stored , setStored] = useState([])

    useEffect(() => {
        let data = localStorage.getItem("collectedData")
        if(data)
        {
            setStored(JSON.parse(data));
        }
    } , [])


    let data = stored.sort((a, b) => new Date(a.date) - new Date(b.date));

    let addition = data.filter(item => item.question.type == 0);
    let subtraction = data.filter(item => item.question.type == 1);
    let onetwo = data.filter(item => item.question.type == 2);
    let twoMultp = data.filter(item => item.question.type == 3);
    let twothree = data.filter(item => item.question.type == 4);
    let threeMultp = data.filter(item => item.question.type == 5);
    let twosquare = data.filter(item => item.question.type == 6);
    let threesquare = data.filter(item => item.question.type == 7);
    let perfectroot = data.filter(item => item.question.type == 8);
    let nonperfectroot = data.filter(item => item.question.type == 9);





    return (
    <>
        <div className='flex items-center justify-center flex-col bg-slate-100'>
            <h1 className='mx-auto my-10 text-navy text-8xl font-Mono '>Your Statics</h1>
            <div className='flex items-center justify-center flex-col bg-white w-[70vw] px-20 rounded-3xl py-5 my-5'>
                <h1 className='text-lightNavy text-3xl font-bold'>All Math</h1>
                {
                    data.length ? <LineChart data={data}/> : <h1 className=''>No Available Data</h1>
                }
                <Link to={"/train?type=10"}>
                    <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                        Train On This
                    </div>
                </Link>
            </div>
            <div className='flex items-center justify-center flex-wrap mx-auto max-w-[70vw] gap-5'>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>Addition</h1>
                    {
                        addition.length ? <LineChart data={addition}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=0"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>Subtraction</h1>
                    {
                        subtraction.length ? <LineChart data={subtraction}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=1"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>1 * 2 Mulplication</h1>
                    {
                        onetwo.length ? <LineChart data={onetwo}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=2"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>2 Digit Mulplication</h1>
                    {
                        twoMultp.length ? <LineChart data={twoMultp}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=3"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>2 * 3 Mulplication</h1>
                    {
                        twothree.length ? <LineChart data={twothree}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=4"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>3 Digits Mulplication</h1>
                    {
                        threeMultp.length ? <LineChart data={threeMultp}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=5"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>2 Digit Squaring</h1>
                    {
                        twosquare.length ? <LineChart data={twosquare}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=6"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>3 Digits Squaring</h1>
                    {
                        threesquare.length ? <LineChart data={threesquare}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=7"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>Perfect Rooting</h1>
                    {
                        perfectroot.length ? <LineChart data={perfectroot}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=8"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
                <div className='flex items-center justify-center flex-col bg-white w-[33vw] px-10 rounded-3xl py-5'>
                    <h1 className='text-lightNavy text-2xl font-bold'>Non-perfect Root</h1>
                    {
                        nonperfectroot.length ? <LineChart data={nonperfectroot}/> : <h1 className=''>No Available Data</h1>
                    }
                    <Link to={"/train?type=9"}>
                        <div className='text-center mt-10 bg-green py-2 px-5 text-white rounded-2xl text-xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button ' onClick={e => handleClick(1 , 1 , true)}>
                            Train On This
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </>
    );
}

export default Analytics;