import React, { useState } from 'react'
import { useTaskDispatch } from './method';
import Button from '../context/Button';

function Task({ task }) {
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTaskDispatch()
    let taskContext;
    if (isEditing) {
        taskContext = (
            <>
                <input type='text' value={task.text}
                    onChange={(e) => {
                        dispatch({
                            type: 'changed',
                            task: {
                                ...task,
                                text: e.target.value
                            }
                        })
                    }}
                />
                <button onClick={() => setIsEditing(false)}>
                    Save
                </button>
            </>
        )
    } else {
        taskContext = (
            <>
                {task.text}
                <Button onClick={() => setIsEditing(true)}>
                    Edit
                </Button>
            </>
        )
    }
    return (
        <div>
            <input type="checkbox"
                checked={task.done}
                onChange={e => {
                    dispatch({
                        type: 'changed',
                        task: {
                            ...task,
                            done: e.target.checked
                        }
                    })
                }}
            />
            {taskContext}
            <Button onClick={() => {
                dispatch({
                    type: 'deleted',
                    id: task.id
                })
            }}>
                deleted
            </Button>
        </div>
    )
}

export default Task
