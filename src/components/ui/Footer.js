import { PlayCircleIcon } from "@heroicons/react/20/solid";

import { CiMail } from "react-icons/ci";
import { SLink } from "../../data";
import { Link,useHref } from "react-router-dom";

export default function Footer() {

  const path = useHref()
  return (
    <main className="bg-slate-800 z-10 mx-auto flex-wrap bottom-0  text-slate-400 w-full py-7 flex items-center justify-center">
      <div
        className={`md:grid md:grid-cols-4 grid-cols-2 place-items-center justify-items-center md:place-items-center md:w-full w-full max-xl:min-[760px]:px-1 px-[2rem] md:px-[10rem] `}
      >
        <div className="h-[200px] w-full">
          <h1
            className={`flex items-center pb-8 text-white  text-6xl justify-left gap-3`}
          >
            Apple <PlayCircleIcon className="text-red-400 w-4 h-4" />
          </h1>
          <div className="flex flex-col">
            <span>COPYRIGHT © 2024Apple</span>
            <span>ALL RIGHTs RESERVED</span>
          </div>
        </div>
        <div className="h-[200px] w-full">
          <h1
            className={`flex items-center pb-8 text-white  text-3xl justify-left gap-3`}
          >
            <span>About</span> Apple
          </h1>
          <div className="flex flex-col">
            <Link href="/about">About us</Link>
            <Link href="/workwithus">Work with us</Link>
            <Link href="/office">Offices</Link>
            <Link href="/office">Our policies</Link>
          </div>
        </div>

        <div className="h-[200px] w-full">
          <h1
            className={`flex items-center pb-8 text-white  text-3xl justify-left`}
          >
            <span>Shopguild</span>
          </h1>
          <div className="flex flex-col">
            <Link to="/about">Payments</Link>
            <Link to="/workwithus">Returns</Link>
            <Link to="/office">Gifts Card</Link>
            <Link to="/office">Guest Purchase</Link>
            <Link to="/office">Terms & Conditions</Link>
          </div>
        </div>

        <div className="h-[200px] w-full">
          <h1
            className={`flex items-center pb-8 text-white  text-3xl justify-left`}
          >
            <span>Newsletter</span>
          </h1>
          <div className="flex flex-col">
            <Link href="/about" className="my-1">SUBSCRIBE TO OUR NEWSLETTER</Link>
            <div className="md:w-full relative">
              <input
                type="text"
                className="outline-none border-none rounded-md w-full  text-slate-100 py-1 px-2 bg-slate-500"
                name=""
                id=""
              />
              <CiMail className="text-white absolute text-3xl top-[3%] right-2 cursor-pointer" />
            </div>
            <div className="flex items-center justify-start gap-2 my-3">
              {SLink.map(sLink=>
              <div key={sLink.path}>
              <Link to={sLink.path}  className={`w-[30px] h-[30px] 
                flex items-center justify-center rounded-full border-2 
              border-slate-500 p-1 ${path === sLink.path || sLink.path.startsWith('/f')?'bg-white text-slate-500 border-none':''}`}>
                {sLink.value}
              </Link>
              </div>
              )}
              
            </div>
            <div className="flex items-center gap-2"></div>
          </div>
        </div>
      </div>
    </main>
  );
}
