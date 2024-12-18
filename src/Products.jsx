import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Products() {
    const [busca, setBusca] = useState('')

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
                    <input
                    onChange={(e) => {
                        setBusca(e.target.value)
                    }}
                    value={busca}
                    type="search"
                    className='absolute top-[27px] p-1.5 w-[300px] border-2 border-stone-800 focus:outline-none text-stone-800 rounded-full italic' placeholder='Book Name'/>
                    <h1 className='text-stone-800 absolute bottom-[450px] left-[250px] text-[40px]'><b>Books</b></h1>
                    <div className='absolute right-[283px] top-[270px] bg-stone-800 w-[1000px] h-[4px]'>
                        <div className='bg-stone-800 rounded absolute top-6 w-[225px] h-[300px]'>
                            <img src="src/imgs/elonmuskBook.jpg" className='w-[225px] h-[310px] blur-[6px] transiton duration-300 ease-in rounded shadow-2xl' />
                            <p className='absolute top-[160px] left-[60px] text-white text-[23px]'><b>Elon Musk</b></p>
                            <p className='absolute top-[190px] left-[73px] text-white text-[18px]'>R$ 54,99</p>
                            <a href="/bookelonmusk"><button className='bg-white text-stone-800 rounded absolute top-[220px] left-[40px] w-[150px] h-[40px] border-2 border-white hover:bg-transparent hover:text-white transition duration-700 ease'>See more</button></a>
                        </div>
                        {
                        (busca.toLowerCase().includes("elon") || busca.toLowerCase().includes("musk") || busca.toLowerCase().includes("elo") || busca.toLowerCase().includes("mus")) && (
                            <a className='absolute list-disc bottom-[180px] right-[430px] hover:underline text-stone-800' href='/bookelonmusk'>
                            <b>Elon Musk Book</b>
                            </a>
                    )}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products
