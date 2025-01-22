/* eslint-disable */
import { useState } from 'react'
import { Routes , Route } from 'react-router'
import Home from './Home'


function App() {

  return (
    <>
      <div className='font-custom'>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </>
  )
}

export default App
