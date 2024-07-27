import { useEffect, useState } from "react"

function GameBoard() {
    let letter = [1,'C','A', 3,'B',2 ]
    const [value,setValue] = useState(randomNuMGen(6))
    const [show,setShow] = useState()
    const [cla,setCla] = useState('')
    useEffect(()=>{
        choose()
    })


    function randomNuMGen(id) {
        return letter[Math.floor(Math.random() * id)]
    }
    
    function choose(){
        switch(value){
            case 'A':
                setCla('bg-red-400')
                setShow('A')
                break
            case 'B':
                setCla('bg-orange-500')
                setShow('B')
                break
            case 'c':
                setCla('bg-purple-500')
                setShow('C')
                break
            case 1:
                setCla('bg-blue-500')
                setShow(1)
                break
            case 2:
                setCla('bg-violet-500')
                setShow(2)
                break
            case 3:
                setCla('bg-white')
                setShow(3)
                break
            default:
                return ''
        }

    }

   
    const btn = letter.map((p, index) => <button  key={index}
    className={`${show  === value ? cla : ''} rounded-md text-4xl h-[120px] w-[120px]`}>{p}</button>
    )
    return (
        <div className='bg-slate-600'>
            <h1 className='text-3xl text-center'>GameBoard {value}</h1>
            <h1 className='text-3xl text-center'>find the box containing {letter[randomNuMGen()]}</h1>

            <div className='h-[100vh] flex items-center flex-col justify-center'>
                <div className='grid grid-cols-3  bg-purple-400 mx-auto w-[400px] gap-0 rounded-md place-items-center h-[300px]'>
                    {btn}
                </div>
            </div>
        </div>
    )
}

export default GameBoard
