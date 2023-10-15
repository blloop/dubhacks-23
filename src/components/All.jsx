import { useState } from 'react';
import Navbar from "./Navbar";
import DemoNotif from './DemoNotif';
import Create from './Create';
import Edit from './Edit';
import EditTasks from './EditTasks';

const All = props => {
    const [creating, setCreating] = useState(false);
    const [editing, setEditing] = useState(false);
    const [openID, setOpenID] = useState(-1);

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

    const openEdit = (id) => {
        setEditing(true);
        setOpenID(id);
    }

    let list = [];
    for (let i = 0; i < localTaskList.length; i++) {
        let task = localTaskList[i];
        list.push(
            <EditTasks
                key={i}
                id={i}
                title={task.name}
                desc={task.desc}
                priority={task.priority}
                deadline={task.deadline}
                estimate={task.duration}
                saveEdits={props.editTask}
                editing={editing}
                setEditing={() => openEdit(i)}
                closeEdit={() => setEditing(false)}
            />
        )
    }

    if (creating) {
        return (
            <>
                <DemoNotif></DemoNotif>
                <div className='dark-header'>
                    <h1>Hello {props.userName}!</h1>
                    <p>You have {props.taskList.length} tasks today {":)"}</p>
                </div>
                <button className="add-task"
                    onClick={() => setCreating(!creating)}>ADD TASK</button>
                <div className='disable-div'>
                </div>
                <div 
                    className='disable-div'
                    onClick={() => setCreating(!creating)}>
                </div>
                <Create 
                    toggleCreate={toggleCreate}
                    addTask={props.addTask}
                />
                {list}
                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    } else if (editing) {
        return (
            <>
                <DemoNotif></DemoNotif>
                <div className='dark-header'>
                    <h1>Hello {props.userName}!</h1>
                    <p>You have {props.taskList.length} tasks today {":)"}</p>
                </div>
                <button className="add-task"
                    onClick={() => setCreating(!creating)}>ADD TASK</button>
                <div className='disable-div'>
                </div>
                <div 
                    className='disable-div'
                    onClick={() => setEditing(!editing)}>
                </div>
                <Edit
                    closeEdit={() => setEditing(false)}
                    addTask={props.addTask}
                />
                {list}
                <Navbar
                    idx={props.pageIndex}
                    setIndex={props.setIndex}
                />
            </>
        )
    } else {
        return (
            <>
                <DemoNotif></DemoNotif>
                <div className='dark-header'>
                    <h1>Hello {props.userName}!</h1>
                    <p>You have {props.taskList.length} tasks today {":)"}</p>
                </div>
                <button className="add-task"
                    onClick={toggleCreate}>ADD TASK</button>
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