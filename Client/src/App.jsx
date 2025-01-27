/* eslint-disable */
import { useState , useEffect } from 'react'
import { Data } from './assets/Collary'
import { Routes , Route , Link } from 'react-router'
import Home from './Home'
import Lesson from './Lesson'
import Practice from './Practice'
import LessonFinisher from './LessonFinishere'
import Analytics from './Analytics'
import Train from './Train'
import TrainFinisher from './trainingFinisher'
import { useNavigate } from 'react-router'



function App() {



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




  return (
    <>
      <div className='font-custom'>
        <nav className=' flex items-center justify-between px-32 flex-row h-20'>
            <div className=' flex items-center justify-between w-11/12'>
                <Link to={"/"}><h1 className='text-4xl font-bold text-navy cursor-pointer'>BrainsMath</h1></Link>
                <div className='flex items-center justify-center gap-5'>
                    <h5 className='cursor-pointer' onClick={e => {handleStart();}}>Get Started</h5>
                    <Link to={"/analyze"}><h5 className='cursor-pointer'>Practice & Statics</h5></Link>
                </div>
            </div>
            <div className='cursor-pointer bg-navy text-xl ml-16 rounded-2xl px-4 py-2 text-white font-medium hover:bg-black transition-all'>Login</div>
        </nav>
        <Routes>
          <Route path='/train' element={<Train />}/>
          <Route path='/practice' element={<Practice />}/>
          <Route path='/lesson' element={<Lesson />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/lessonfinisher' element={<LessonFinisher />}/>
          <Route path='/trainingfinisher' element={<TrainFinisher />}/>
          <Route path='/analyze' element={<Analytics />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
