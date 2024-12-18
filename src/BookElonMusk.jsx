import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function ElonMusk() {
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
                    <div>
                        <h1 className='text-stone-800 absolute top-[130px] right-[300px] text-[70px] underline'><b>Elon Musk</b></h1>
                        <h1 className='text-stone-800 absolute top-[210px] right-[370px] text-[50px]'><b>R$ 54,99</b></h1>
                        <p className='text-2xl text-stone-800 absolute right-[400px]'>No description</p>
                        <button onClick={() => {alert("Buy!")}} className='bg-transparent absolute top-[530px] right-[300px] rounded-full w-[335px] text-white border-2 border-stone-800 transition duration-700 ease-in-out'><img src="src/imgs/buyIcon.png" className='relative left-[150px]'/></button>
                    </div>
                    <img src="src/imgs/elonmuskBook.jpg" className='absolute left-[350px] w-[300px] h-[410px] animate-bounce hover:blur-[6px] transiton duration-300 ease-in rounded shadow-2xl'/>
                </div>
            </section>
        </>
    )
}

export default ElonMusk
