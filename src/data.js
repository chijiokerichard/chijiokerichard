import { ShoppingCartIcon, StarIcon } from "@heroicons/react/20/solid";
import { FaFacebook } from "react-icons/fa6";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { PiLinkedinLogoBold } from "react-icons/pi";
import o1 from './components/allimg/img (6).jpg'
import t2 from './components/allimg/img (4).jpg'
import t3 from './components/allimg/images-3.jpeg'
import f4 from './components/allimg/images-12.jpeg'
import f5 from './components/allimg/img (9).jpg'
import e8 from './components/allimg/images-8.jpeg'
import s6 from './components/allimg/images-10.jpeg'
import s7 from './components/allimg/images-9.jpeg'
import f1 from './components/allimg/camera-img.png'
import f2 from './components/allimg/mobile-img.png'
import f3 from './components/allimg/computer-img.png'
import f4f from './components/allimg/laptop-img.png'
import { RiStarHalfSFill } from "react-icons/ri";





export const nav = [
    { path: '/', value: 'Home' },
    { path: '/about', value: 'About Us' },
    { path: '/product', value: 'Shop' },
    { path: '/contact', value: 'Contact Us' },
    { path: '/t&c', value: 'T/C' },
    {
        path: '/cart', value: "Cart",
        Icon: <ShoppingCartIcon className="w-[40px] h-[35px] flex items-center justify-center" />
    },
]

export const SLink = [
    { value: <FaFacebook />, path: '/facebook' },
    { value: <BsTwitter />, path: '/twitter' },
    { value: <BsYoutube />, path: '/youtube' },
    { value: <PiLinkedinLogoBold />, path: '/linkedin' },

]

export function Rating(arg,cls='') {
    const style = `${cls?cls :'h-3 w-3 text-red-500'}`
    const num = parseInt(arg.toString().split('.')[0])
    const half = arg.toString().split('.')
    if (half.length === 2) {
        return <div className="flex">
            {
                new Array(5).fill(<StarIcon className={style} />, 0, num)
            }
            <RiStarHalfSFill className={style} />
        </div>
    } else {
        return <div className="flex" key={Math.random() * 1000000}>
            {

                new Array(5).fill(<StarIcon className={style}/>, 0, num)
            }
        </div>

    }
}

export const watchImg = [
    { id: '1', rating: 5, name: 'Apple watch series 5', img: f5, hasCoupon:true,price: 350.70,isFeatured:false,likeImg:[t2,e8,f5],},
    { id: '2', rating: 3.5, name: 'Apple watch series 1', img: o1,hasCoupon:false, price: 200.4,isFeatured:false,likeImg:[o1,t3,s6],},
    { id: '3', rating: 4.5, name: 'Apple watch series 4', img: f4,hasCoupon:false, price: 400,isFeatured:false,likeImg:[t2,f4,f5],},
    { id: '4', rating: 5, name: 'Apple watch series 2', img: t2,hasCoupon:true, price: 1100.100,isFeatured:false,likeImg:[t2,f4,f5],},
    {id:'5',rating: 4.5,price: 2000,img:f3,name:'computer',isFeatured:true,hasCoupon:true,likeImg:[f4,f3,o1]},
    {id:'6',rating: 4,price: 200.4,img:f1,name:'camera',isFeatured:true,likeImg:[e8,s7,f1],hasCoupon:true,},
    { id: '7', rating: 3.5, name: 'Apple watch series 3', img: s6, price: 150,isFeatured:false,likeImg:[t3,f4,f5],hasCoupon:false,},
    { id: '8', rating: 4.5, name: 'Apple watch series 6', img: t3,hasCoupon:false, price: 100.90,isFeatured:false,likeImg:[s6,s7,f5],},
    {id:'9',rating: 5,price: 300.4,img:f2,name:'mobile',isFeatured:true,hasCoupon:true,likeImg:[f2,t2,f5]},
    {id:'10',rating: 3.5,price: 390,img:f4f,name:'laptop',isFeatured:true,hasCoupon:false,likeImg:[f4f,s6,t3]},
]

export const feature = watchImg.map(p => p).filter(p => p.isFeatured)


// export const nextImg =[
//     {id:1,img:o1,name:'watch 1'},
//     {id:2,img:t2,name:'watch 2'},
//     {id:3,img:t3,name:'watch 3'},
//     {id:4,img:f4,name:'watch 4'},
//     {id:5,img:f5,name:'watch 5'},
//     {id:6,img:s6,name:'watch 6'},
// ]


