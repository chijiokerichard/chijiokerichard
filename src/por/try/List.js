import React from 'react'
import { useDispatchData, useMyTask } from './Context'
import { FaDeleteLeft } from 'react-icons/fa6'
import { BiEdit } from 'react-icons/bi'

function List() {
    const data = useMyTask()
    const dispath = useDispatchData()
    function handleEdit(e){
        dispath({
            type:'Edit',
            value:e.target.value
        })
    }
    return (
        <ul className={`flex-column items-center w-[500px] rounded-md  mt-2 p-2 ${data.length > 0?'border-2': ''} justify-center mx-auto`}>
            {data.map((t) => <div key={t.id} className='flex h-[50px] border-2 rounded-md px-1 w-full my-2 border-black items-center'>
                <li className='text-black w-full h-[20px]'>{t.value}</li>
                <button className='flex items-center' onClick={() => {
                    dispath({ 
                        type: 'Remove',
                        id: t.id
                    })
                }} >
                    <FaDeleteLeft className='text-red-500 w-[40px] h-[100px]' />
                </button>
                <button className='' onClick={handleEdit}>
                    <BiEdit className='text-green-500 w-[40px] h-[100px]' />
                </button>
            </div>

            )}
        </ul>
    )
}

export default List
