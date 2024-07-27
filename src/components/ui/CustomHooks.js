import {  useState } from "react";
import { watchImg } from "../../data";

export function useSlider() {
    const [start, setStart] = useState(0)
    const [end, setEnd] = useState(3)
    let state = watchImg.slice(start,end)
    const copiedImg = watchImg.map(w => w)
    // console.log(start,end)

    function nextImg() {
        if(end === copiedImg.length){
            setEnd(3)
            setStart(0)
        }
        setStart(prev=>prev+=1)
        setEnd(prev=>prev+=1)
        console.log(state.indexOf(state.length-1))
        // else{
        // }
        // console.log(start)
    }
    function prevPage() {
        setStart(copiedImg.length-1)
        setEnd(prev=>prev-=1)
        if(start === 10){
            setStart(10)
            setEnd(7)
        }
    }

        return [state,nextImg,prevPage]
}

