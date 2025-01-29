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
import Congratulation from './Congratulation'
import { Helmet } from "react-helmet"



function App() {



  const navigate = useNavigate();


  function handleStart()
  {
    let storage = localStorage.getItem("progress");
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
      <Helmet>
        <meta name="google-site-verification" content="FOpOxcY4cdYAblOfATnThANqE6F9SeY1NSiaV2yNxkI" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-7CCREKK12C"></script>

        <meta charset="UTF-8" />
        <meta name="description" content="BrainsMath is a free platform designed to teach and practice mental math. Learn powerful tricks to quickly solve complex math problems and boost your calculation speed with engaging exercises." />
        <meta name="author" content="BrainsMath Team" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="mental math, math tricks, free math learning, math practice, learn math fast, speed math, brain training, math exercises" />

        <meta property="og:title" content="BrainsMath - Learn Mental Math Faster and Smarter" />
        <meta property="og:description" content="Master mental math with BrainsMath. Learn quick calculation tricks and practice solving problems efficiently. Free for everyone!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.brainsmath.com" />
        <meta property="og:image" content="https://www.brainsmath.com/images/og-image.jpg" />
        <meta property="og:image:alt" content="BrainsMath Logo or Math-related Image" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BrainsMath - Learn Mental Math" />
        <meta name="twitter:description" content="Get faster at math with BrainsMath. Free lessons and practice for improving mental math skills!" />
        <meta name="twitter:image" content="https://www.brainsmath.com/images/twitter-image.jpg" />
        <meta name="twitter:image:alt" content="BrainsMath Logo or Math-related Image" />
      </Helmet>
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
          <Route path='/cong' element={<Congratulation/>} />
        </Routes>
      </div>
    </>
  )
}

export default App
