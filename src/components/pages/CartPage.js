import { FiDelete } from 'react-icons/fi'
import { useCart,useCurSmImg, useIcrement, useId } from '../ui/context/Context'
import { Image } from '../ui/Image'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Footer from '../ui/Footer'

function CartPage() {
  const { cart, setCart } = useCart()
  const [msg, setMsg] = useState('')
  const [btn, setBtn] = useState(true)
  const [coupon, setCoupon] = useState('')
  const [subtotal, setSubTotal] = useState('')
  const { setIncre } = useIcrement()
  const { setGetCartId } = useId()
  const { setCurImg } = useCurSmImg()
  const isSome = cart.some(p=>p.hasCoupon)


  function removeItem(id) {
    setCart(cart.filter(p => p.id !== id))
  }

  const total = cart.map(p => p.price * p.qty).reduce((a, c) => a + c, 0)
  function calculateCoupon() {
    if (coupon === 'CHIJIOKECBC') {
      setMsg('congratulation🥰')
      setTimeout(() => {
        setMsg('')
        setSubTotal(prev => parseFloat(prev - 100))
        setBtn(false)
      }, 2000)
      setCoupon('')
    } else {
      setMsg('incorrect coupon code')
      setTimeout(() => {
        setMsg('')
      }, 2000)
      setCoupon('')

    }
  }
  const prod = <table className='w-[70vw] h-[10vh] my-[3rem]'>
    <thead className='my-[4rem]'>
      <tr className=' '>
        <th className='text-left pb-[3rem]'>PRODUCT NAME</th>
        <th className='text-left pb-[3rem]'>UNIT PRICE</th>
        <th className='text-left pb-[3rem]'>QUANTITY</th>
        <th className='text-left pb-[3rem]'>TOTAL</th>
      </tr>
    </thead>
    <tbody>
      {cart.map(pro =>
        <tr className='' key={pro.id}>
          <td className=''>
            <div className='flex  items-center  gap-2'>
              <Link to='/pro' onClick={() => {
                setGetCartId(pro.id)
                setCurImg(pro.img)
              }}>
                <Image
                  src={pro.img}
                  className='w-[50px] h-[50px] rounded-md'
                />
              </Link>
              <span>{pro.name}</span>
            </div>
          </td>
          <td className='text-left  pl-4'>${pro.price}</td>
          <td className='text-left    pl-0 flex items-center justify-center mt-[2rem]' >
            <MinusIcon width={30} height={20} className='font-bolder cursor-pointer border-2 border-black' onClick={() => setIncre(
              pro.qty === 1 ? 1 : pro.qty -= 1
            )}
            /> <span className='font-bolder border-2 text-center flex items-center justify-center border-black w-[23px] h-[20px]'>
              {pro.qty}
            </span>
            <PlusIcon width={30} height={20}
              className='font-bolder border-2 border-black cursor-pointer' onClick={() => setIncre(pro.qty += 1)} />
          </td>
          <td className='text-left    pl-3 '>${parseFloat(pro.price * pro.qty).toFixed(1)}</td>
          <td><FiDelete height={20} color='red' cursor={'pointer'} onClick={() => removeItem(pro.id)} width={20} /></td>
        </tr>
      )}
    </tbody>
  </table>



  return (
    <div className='md:h-[100vh] bg-white w-full'>
      <h1>Cart Page</h1>
      <div className=' px-[10rem]'>

        {cart.length ? prod : <h1 className='text-center text-3xl mt-4'>No item found in your cart</h1>}
        {cart.length ? <div className='flex items-center justify-between gap-4 '>

          {isSome &&
            <div className='w-[300px]'>
              <span className='bg-black block -500 w-full text-white px-2 py-1 text-center'>UPDATE Total</span>
              <div className='border border-gray-300 p-2 h-[150px] flex gap-3 flex-col px-[1rem]'>
                <h1 className='font-semibold text-2xl'>COUPON CODE</h1>
                <div>
                  <span className='text-center text-green-400 font-serif font-medium'>{msg}</span>
                  <input type="text" onChange={(e) => setCoupon(e.target.value)} value={coupon} className='w-full py-[4px] outline-none border border-gray-300 placeholder:pl-2' placeholder='Enter coupon code' />
                  {btn && <button className='font-semibold w-[70%] border-2 border-red-500 my-3' onClick={calculateCoupon}>Apply coupon</button>}
                </div>
              </div>
            </div>
          }
          <div>
            <div className='h-[auto] p-2  px-[1rem] w-[300px]'>
              <button className='border border-red-500 text-black w-full  px-2 py-1'>UPDATE Cart</button>
              <div className='border border-gray-300 p-2  flex gap-3 flex-col '>
                <h1 className='font-semibold text-[15px]'>Calculate Shipping</h1>
                <div>
                  <h1 className='font-medium'>country</h1>
                  <input type="text" className='w-full py-[4px] outline-none border border-gray-300 placeholder:pl-2' placeholder='Enter coupon code' />
                </div>
                <div>
                  <h1 className='font-medium'>state / providence</h1>
                  <input type="text" className='w-full py-[4px] outline-none border border-gray-300 placeholder:pl-2' placeholder='Enter coupon code' />
                </div>
                <div>
                  <h1 className='font-medium'>Zip Code / providence</h1>
                  <input type="text" className='w-full py-[4px] outline-none border border-gray-300 placeholder:pl-2' placeholder='Enter coupon code' />
                </div>
              </div>
            </div>
          </div>
          <div className='w-[300px]'>
            <button className='bg-red-500 w-full text-white px-2 py-1'>PROCEED TO CHECKOUT</button>
            <div className='border border-gray-300 p-2 h-[150px] flex gap-3 flex-col px-[1rem]'>
              <h1 className='font-semibold text-xl text-center font-serif'>Cart Total</h1>
              <div className='flex items-center justify-between underline'>
                <h1 className='font-medium text-2xl'>carts subtotal </h1> <span className='font-bold text-xl'>${Math.round(parseFloat(subtotal + total).toFixed(2))}</span>

              </div>
            </div>
          </div>

        </div>
          : <div className='h-[100vh]'></div>}
      </div>
      <Footer />
    </div>
  )
}

export default CartPage
