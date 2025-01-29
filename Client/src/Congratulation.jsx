/* eslint-disable */
import React from 'react';
import { Link } from "react-router"

function Congratulation() {
    return (
    <>
        <div className='flex flex-col items-center justify-center h-[calc(100vh-5rem)]'>
            <h1 className='text-5xl font-bold text-navy mb-4'>Congratulation Of Finishing Our Mental Math Course</h1>
            <p className='text-gray text-xl'>Wait For Updates</p>
            <div className='flex items-center justify-center gap-5'>
                <Link to="/analyze"><div className=' mt-10 bg-navy py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'>Practice</div></Link>
                <Link to="/"><div className=' mt-10 bg-navy py-5 px-12 text-white rounded-2xl text-4xl shadow-[4px_4px_0_rgb(60,100,180)] transition-all duration-150 hover:bg-lightNavy cursor-pointer coin-button'>Main Menu</div></Link>
            </div>
        </div>
    </>
    );
}

export default Congratulation;