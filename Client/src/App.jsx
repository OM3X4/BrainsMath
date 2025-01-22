/* eslint-disable */
import { useState } from 'react'
import { Routes , Route } from 'react-router'
import Home from './Home'
import Lesson from './Lesson'
import Practice from './Practice'


function App() {

  return (
    <>
      <div className='font-custom'>
        <nav className=' flex items-center justify-between px-32 flex-row h-20'>
            <div className=' flex items-center justify-between w-11/12'>
                <h1 className='text-4xl font-bold text-navy cursor-pointer'>BrainsMath</h1>
                <div className='flex items-center justify-center gap-5'>
                    <h5 className='cursor-pointer'>Get Started</h5>
                    <h5 className='cursor-pointer'>Practice</h5>
                </div>
            </div>
            <div className='cursor-pointer bg-navy text-xl ml-16 rounded-2xl px-4 py-2 text-white font-medium hover:bg-black transition-all'>Login</div>
        </nav>
        <Routes>
          <Route path='/' element={<Practice />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
