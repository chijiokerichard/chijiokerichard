import { Link} from "react-router-dom";
import { Rating, watchImg } from "../../data";
import { Image } from "../ui/Image";
import { useCurSmImg, useId } from "../ui/context/Context";
import Footer from "../ui/Footer";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";



export default function Products({add}){
    const {setGetCartId}  = useId()
    const {setCurImg} = useCurSmImg()


    
    
    return(
        <div className="md:h-[100vh] max-h-full">

        <div className="px-[10rem]">
            <h1>Products</h1>
            <div className="flex  flex-wrap gap-6 m-auto items-center justify-center">
                {watchImg.map(wat=>
                    <div key={wat.id} className="px-1 flex flex-col items-start justify-center gap-2 hover:bg-slate-200 ">
                        <Link to={'/pro'} onClick={()=>{
                            setGetCartId(wat.id)
                            setCurImg(wat.img)
                        }}>
                        <Image  key={wat.id}
                        className={`h-[170px] w-[250px] mt-5 rounded-md shadow-lg cursor-pointer`}
                        src={wat.img}
                        alt={wat.name}
                        />
                        </Link>
                        <div className="grid grid-cols-1 place-items-center mx-auto">
                            <span className="font-sans text-2xl">{wat.name}</span>
                            <div className="flex items-center justify-between px-3 gap-2 py-1 mx-auto w-full">
                            <span className="text-[20px] font-serif">${wat.price}</span>
                            <span className="t">{Rating(wat.rating)}</span>
                            <ShoppingCartIcon className=" py-1 w-[40px] h-[40px]
                            rounded-full px-1" onClick={()=>{
                                add({name:wat.name,id:wat.id,img:wat.img,price:wat.price,hasCoupon:wat.hasCoupon},wat.id)
                            }
                                }/>
                            </div>
                        </div>
                    </div>
                )}
            </div>
                        </div>
                        <Footer/>
        </div>
    )
}