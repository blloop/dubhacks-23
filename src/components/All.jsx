import { useState } from 'react';
import Navbar from "./Navbar";
import Create from './Create';
import DailyTasks from './DailyTasks';

const All = props => {
    const [creating, setCreating] = useState(false);

    function toggleCreate() {
        setCreating(!creating)
    }

    let localTaskList = [...props.taskList];

    function comparePriority(a, b) {
        if (a.priority < b.priority) {
            return -1;
        }
        if (a.priority > b.priority) {
            return 1;
        }
        return 0;
    }

    localTaskList.sort( comparePriority );

    let list = [];
    for (let i = 0; i < localTaskList.length; i++) {
        let task = localTaskList[i];
        list.push(
            <DailyTasks
                title={task.name}
                desc={task.desc}
                priority={task.priority}
                deadline={task.deadline}/>
        )
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
                {list}
                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    }
}

export default All;