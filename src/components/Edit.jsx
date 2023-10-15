import React from "react";
import { useState } from 'react';

const MS_FACTOR = 1000;

/*
TASK structure
deadline:num
desc:text
duration:num
name:text
priority:num
 */

const Create = props => {
    const [title, setTitle] = useState(props.task.name);
    const [desc, setDesc] = useState(props.task.desc);
    const [priority, setPriority] = useState(props.task.priority);
    const [deadline, setDeadline] = useState(props.task.deadline);
    const [estimate, setEstimate] = useState(props.task.duration);

    let readable_date = new Date(props.task.deadline * MS_FACTOR).toISOString().split('T')[0];

    // function saveTask() {
    //     let task = {name: title, desc: desc, priority: priority, duration: estimate, deadline: deadline}
    //     console.log(task);
    //     props.saveEdits(props.id, task);

    //     days_left = Math.floor((deadline - TODAY) / SECONDS_IN_DAY);
    //     readable_date = new Date(deadline * MS_FACTOR).toISOString().split('T')[0];
    //     deadline_txt = "Due in " + days_left + " days";

    //     props.setEditing(false);
    // }

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateDeadline(evt) {
        setDeadline(evt.target.valueAsNumber / MS_FACTOR);
    }

    function updateDesc(evt) {
        setDesc(evt.target.value);
    }

    function updateEstimate(evt) {
        setEstimate(evt.target.value);
    }

    function editTask() {
        let task = {
            id: props.id,
            name: title,
            desc: desc, 
            priority: priority, 
            duration: estimate, 
            deadline: deadline
        }
        props.editTask(props.id, task);
        props.closeEdit();
    }

    return (
        <div className="window-create">
            <p 
                className='window-close'
                onClick={props.closeEdit}>X</p>
            <label htmlFor="title">Task Name:</label>
            <textarea
                type="text"
                id="title" 
                rows="1" columns="50"
                className="non-resizable"
                onChange={updateTitle}>{title}</textarea>
            <label htmlFor="date">Due Date</label>
            <input
                type="date"
                id="date" 
                value={readable_date}
                onChange={updateDeadline}/>
            <label htmlFor="desc">Description:</label>
            <textarea
                id="desc"
                rows="4"
                onChange={updateDesc}>{desc}</textarea>
            <label htmlFor="estimate">Time Estimate</label>
            <div className='estimate-box non-resizable'>
                <input
                    type="number"
                    id="estimate" 
                    onChange={updateEstimate} value={estimate}/>
                <label>minutes</label>
            </div>

            {/* <p>Select Priority:</p>
            <input type="radio" id="priority_a" name="priority" value={1}
            onChange={updatePriority}></input>
            <label htmlFor="html">A (Top priority)</label>
            <input type="radio" id="priority_b" name="priority" value={2}
            onChange={updatePriority}></input>
            <label htmlFor="html">B (Medium priority)</label>
            <input type="radio" id="priority_c" name="priority" value={3}
            onChange={updatePriority}></input>
            <label htmlFor="html">C (Low priority)</label> */}

            <button onClick={editTask}>Done</button>
        </div>
    );
}

export default Create;