import { Link } from "react-router-dom"
import Navlink from "./Navlinks"


function Navs({len}){
    <div className={``}></div>
    return(
        <div className={` md:flex justify-between flex     fixed left-0 right-0 top-0  py-[0.5rem] z-30 px-1 bg-slate-100 mb-[2rem] items-center w-full}`}>
            <div>
                <Link to='/' className="text-4xl text-red-500 font-extrabold">Apple</Link>
                <p>Email</p>
            </div>
            <div className="md:flex hidden items-center justify-between  w-[450px] text-xl">
            <Navlink/>
            </div>
            <div className="text-2xl">
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </div>

        </div>
    )
}
export default Navs