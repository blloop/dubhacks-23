import { useState } from 'react';
import Navbar from "./Navbar";
import Create from './Create';

const All = props => {
    const [creating, setCreating] = useState(false);

    function toggleCreate() {
        setCreating(!creating)
    }

    if (creating) {
        return (
            <>
                <div className='dark-header'>
                    <h1>Hello {props.userName}!</h1>
                    <p>You have {props.taskList.length} tasks today {":)"}</p>
                </div>
                <div className='page-all'>
                        <button className="add-task"
                            onClick={toggleCreate}>ADD TASK</button>
                        <div className='disable-div'>
                        </div>
                </div>
                <div 
                    className='disable-div'
                    onClick={toggleCreate}>
                </div>
                <Create 
                    toggleCreate={toggleCreate}
                    addTask={props.addTask}
                />
                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    } else {
        return (
            <>
                <div className='dark-header'>
                    <h1>Hello {props.userName}!</h1>
                    <p>You have {props.taskList.length} tasks today {":)"}</p>
                </div>
                <div className='page-all'>
                    <button className="add-task"
                        onClick={toggleCreate}>ADD TASK</button>
                </div>
                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    }
}

export default All;