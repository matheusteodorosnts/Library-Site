import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    <section>
    <div className='w-full h-[100vh] flex col justify-center items-center'>
      <nav>
          <ul className='flex text-stone-800 absolute text-[18px] bottom-[675px] left-[1300px]'>
            <li><a href="/" className='hover:underline m-5'><b>Home</b></a></li>
            <li><a href="/products" className='hover:underline'><b>Products</b></a></li>
          </ul>
        </nav>
        <h1 className='font-serif absolute bottom-[300px] right-[900px] text-stone-800 text-[70px]'>The Best<br />Books Online</h1>
        <a href="/products"><button className='bg-stone-800 absolute top-[420px] right-[900px] p-[8px] w-[415px] text-white rounded border-2 border-stone-800 hover:text-stone-800 hover:bg-transparent transition duration-700 ease-in-out'
        >See more</button></a>
        <img src="src/imgs/bookImg.png" className='absolute left-[800px]' loading='eager'/>
        <p className='absolute text-stone-800 left-[15px] top-[700px] md:left-[5px] lg:left-[5px]'>&copy; 2024. All rights reserved</p>
    </div>
    </section>
    </>
  )
}

export default App