import React, { useEffect, useState } from 'react'
import { Link, } from 'react-router-dom';
import { Image } from '../ui/Image';
import watch from '../allimg/images-9.jpeg'
import Footer from '../ui/Footer'
import { feature, watchImg } from '../../data';
import { ArrowRightIcon, HeartIcon } from '@heroicons/react/24/outline';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';
import { useCurSmImg, useId } from '../ui/context/Context';
import { useSlider } from '../ui/CustomHooks';

function Home() {



  const [goImg, setGoImg] = useState([watchImg.map(p => p)[5]])
  
  const { setGetCartId } = useId()
  const { setCurImg } = useCurSmImg()

  
  
  const [slide,setSlide,prevPage] = useSlider()
  useEffect(()=>{
    const inter=setInterval(()=>{
      setSlide()
    },3000)
    return (()=>{
      clearInterval(inter,3000)
    })
  })
  
  function prevImage() {
  }

  return (
    <div className='md:h-[100%] md:w-[auto] '>
    
      <main className="md:flex md:flex-col min-h-screen bg-slate-100  w-full md:text-left md:h-[100vh] text-center flex-col md:items-center justify-between px-3 md:px-[13rem]">
        <div className="md:flex full  items-center justify-between my-auto">
          <div className="md:block mb-[4rem] gap-5">
            <h1 className="md:text-6xl text-4xl font-mono">EXPLORE OUR LATEST WRIST WATCH</h1>
            <p className={` md:text-2xl text-[20px] md:mb-7 my-4`}>Get your amazing wrist watch in affordable price and make your payment Later</p>
            <Link to='/product' className="bg-red-500 text-sky-200 md:py-4 md:px-6 px-3 py-2   rounded-md ">Shop Now</Link>
          </div>
          <Image className="md:w-[600px] md:h-[400px]  mx-auto w-[200px] h-[400px] rounded-full "
            src={watch}
            width={500}
            height={500}
            alt="watch"
          />
        </div>
      </main>

      <div className='flex  items-center  relative z-0 justify-center my-[3rem] md:w-[auto] mx-auto  px-[0.4rem]'>

        <ArrowRightIcon className='h-[250px] w-[70px] 
        absolute rotate-[180deg] left-0 
        md:left-[5%] cursor-pointer' onClick={setSlide} />
        <ArrowRightIcon className='h-[250px] w-[70px]  absolute right-[10%]  md:right-[5%] cursor-pointer' onClick={prevPage} />

        <div className='flex items-center  justify-center my-[3rem] w-[auto] mx-auto  px-[1rem] gap-[2rem]'>
          {slide.map(p =>
            <div className={`first-letter:bg-slate-100 p-[4px] w-[250px] h-[250px] flex items-center justify-center`} key={p.id}>
              <Link to='/pro' onClick={() => {
                setGetCartId(p.id)
                setCurImg(p.img)
              }}>
                <img src={p.img} alt={p.name} className={`w-[190px] h-[190px] ${slide[p] ===1?'bg-red-500':''}`} />
              </Link>
            </div>
          )}
        </div>
      </div>

      <section className='w-full py-1'>
        <h1 className='text-center text-4xl font-serif'>Featured Products</h1>
        <div className='w-[100px] border-b-3 h-[5px] bg-slate-500 mx-auto'></div>
        <div className='flex  items-center  z-0 justify-center my-[3rem] w-[auto] mx-auto  px-[1rem] gap-[4rem]'>
          <div className='flex items-center justify-center my-[3rem] w-[auto] mx-auto  px-[2rem] gap-[4rem]'>
            {feature.map(p => <div key={p.id}>

              <div className='bg-slate-100 p-4'>
                <img src={p.img} alt={p.name} className='w-[190px] h-[190px]' />
              </div>
              <div className='flex items-center justify-between w-full'>
                <div>
                  <p className='text-2xl font-medium'>{p.name}</p>
                  <p className='text-1xl'>${p.price}100</p>
                </div>
                <div className='flex items-center'>
                  <button><ShoppingCartIcon width={35}
                    className='bg-gray-200 p-[6px] rounded-full flex items-center justify-center'
                    hanging={35} /></button>
                  <HeartIcon width={35} hanging={35}
                    className='bg-gray-200 p-[6px] rounded-full flex items-center justify-center'

                    color='red' />
                </div>
              </div>
            </div>)}
          </div>
        </div>
      </section>

      <section className='w-full bg-slate-100 px-[10rem]'>
        <div className='flex items-center  md:w-[full]  justify-between my-[3rem] w-[auto] mx-auto '>
          <div>
          <div className='text-4xl mb-[3rem]'>Live your luxurious life by getting yourself a camera</div>
          <Link to="" className='bg-red-500 px-2 py-4 text-white rounded-md shadow-md text-2xl w-[200px] h-[100px] my-[3rem]'>Let's Talk Business</Link>
          </div>
          {goImg.map(p =>
            <div key={p.id} className=' p-[4px]  md:w-[100vh] h-[350px] flex items-center justify-between'>
              <img src={p.img} alt={p.name} className='w-[500px] h-[300px]' />
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home
