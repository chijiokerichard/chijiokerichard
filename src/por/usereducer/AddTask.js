import React, { useState } from 'react'
import { useTaskDispatch } from './method'
import Button from '../context/Button'

function AddTask() {
    const dispatch  = useTaskDispatch();
    const [text, setText] = useState('');
    let nextId =3;
    return (
        <div>
            <input
                type="text"
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button onClick={()=>{
                setText('')
                dispatch({
                    type:'added',
                    text:text,
                    id:nextId++
                })
            }}>

                AddTask
            </Button>
        </div>
    )
}

export default AddTask
