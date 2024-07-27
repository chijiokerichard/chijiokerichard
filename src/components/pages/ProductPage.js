import React from 'react'
import { Image } from '../ui/Image'
import { Rating, watchImg } from '../../data'
import { useCurSmImg, useId } from '../ui/context/Context'
import Footer from '../ui/Footer'
import { Link } from 'react-router-dom'


function ProductPage({ add }) {
  const { getCartId } = useId()
  const { curImg, setCurImg } = useCurSmImg()


  const show = watchImg.filter(i => i.id === getCartId)


  function changeImg(img) {
    setCurImg(img)
    changeImgCartPage(img)
  }

  function changeImgCartPage(img){
    setCurImg(img)
  }
  return (
    <div className='md:h-[100vh] w-full '>

      <div className='mt-7 text-center w-[1000px] mx-auto'>

        {show.map(k => <div className='flex items-center justify-between my-auto w-full h-full'>
          <div className='flex gap-5 items-center justify-center w-[500px] p-2 h-[500px]'>
            <Image
              src={curImg ? curImg : k.img}
              className="h-[300px] w-[300px]"
            />
            <div>
              {k.likeImg.map(like => <div key={like} className={`flex flex-col items-center
               bg-slate-300  justify-center my-2 w-[60px] h-[60px] ${curImg === like ?
                  'border-2 border-black p-1 rounded-md' : ''}`} onClick={() => changeImg(like)}>
                <Image src={like}
                  className={`h-[40px] my-1  w-[40px] `}
                />
              </div>)}
            </div>
          </div>
          <div className='bg-white w-[500px] p-4 h-[500px] flex flex-col justify-center'>
            <div className='flex items-center justify-between '>
              <h1 className='text-2xl font-bold'>{k.name}</h1>
              <p className='bg-slate-400 w-[50px] h-[50px] text-4xl text-red-500 flex items-center justify-center rounded-full'>♥</p>
            </div>
            <p className='text-[17px] my-[2rem] text-left py-[3px] font-serif text-slate-500'>description Note that the development build is not optimized.
              To create a production build, use npm run build.</p>
            <h2 className='font-bold text-3xl text-left'>$ {k.price}</h2>
            <span className='my-4 text-3xl'>{Rating(k.rating, 'h-[1rem] w-[1rem] text-red-500')}</span>
            <div>
              <h1 className='text-left text-xl mt-[1rem] font-bold'>Color</h1>
              <div className=' flex items-center justify-between my-4 w-[100px] gap-1'>
                <span>1</span>
                <span>1</span>
                <span>1</span>
                <span>1</span>
              </div>
            </div>
            <div className='flex items-center w-[300px] mx-auto justify-between '>
              <Link to='/cart' className='border-1 font-serif text-2xl py-1 px-3 outline' onClick={changeImgCartPage}>Buy Now</Link>
              <button className=' font-serif text-2xl bg-black text-white py-2 px-3 outline'
                onClick={() => add({ name: k.name, id: k.id, img: k.img, price: k.price,hasCoupon:k.hasCoupon}, k.id,)}>Add To Cart</button>
            </div>
          </div>
        </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default ProductPage
