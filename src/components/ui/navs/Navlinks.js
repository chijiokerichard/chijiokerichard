import { useHref, Link } from "react-router-dom"
import { nav } from "../../../data"
import { useCart } from "../context/Context"


export default function Navlink() {
    const {cart} = useCart()
    const cartLength = cart.length
    const pathName = useHref()
    return (
        nav.map(p => <div key={p.value}>
            <Link className={`${pathName === p.path && pathName
                !== '/cart' ? ' border-4 border-slate-400 w-[100px]  text-slate-black border-t-0 border-l-0 border-r-0' : `text-slate-500 `}`}
                to={p.path}>
                {p.Icon ? <div className="relative">
                    {cartLength?
                    <div className="absolute  h-[20px] font-light text-[13px] w-[20px] p-2 bg-red-500 text-center rounded-full 
                     flex items-center justify-center text-white top-0 right-0 ">{cartLength}</div>
                    :''
                }
                    {p.Icon}
                </div>
                    : p.value}
            </Link>
        </div>
        )
    )
}