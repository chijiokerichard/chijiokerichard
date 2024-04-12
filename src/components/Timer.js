import { useEffect, useState } from 'react'




export function Seconds(){
  const [sec,setSec] =useState(0)
  const s = sec%60;
  let m= Math.floor(sec/60);
 
  
  useEffect(()=>{
    const go = setInterval(()=>{
      setSec(pre=>{
        if(pre <120){
         return  pre+1
        }else{
          return 0
        }
      })
    },1000)
    return ()=> clearInterval(go)
  },[])
  return `${m} : ${s}`
}

export function Sec(){
  const [sec,setSec] =useState(0)
  const s = sec%60;
 
  
  useEffect(()=>{
    const go = setInterval(()=>{
      setSec(pre=>pre+1)
    },1000)
    return ()=> clearInterval(go)
  },[])
  return s
  
}

const m = new Date().getMinutes()/60
export  function Minute(){
  const [min,setMin] =useState(m)


  
  useEffect(()=>{
    const go = setInterval(()=>{
      setMin(pre=>{
        if(pre<120){
          return pre+1
        }else{
          return 0
        }
      })
    },1000)
    return ()=> clearInterval(go)
  },[])
  return min
  
}




