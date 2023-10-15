import React, { ChangeEvent } from "react";
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
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [priority, setPriority] = useState(2);
    const [deadline, setDeadline] = useState(-1);
    const [estimate, setEstimate] = useState(-1);

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateDesc(evt) {
        setDesc(evt.target.value);
    }

    function updateDeadline(evt) {
        setDeadline(evt.target.valueAsNumber / MS_FACTOR);
    }
    
    function updateEstimate(evt) {
        setEstimate(evt.target.value);
    }

    function updatePriority(evt) {
        if (evt.target.checked) {
            setPriority(evt.target.value);
            console.log(evt.target.value)
        }
    }

    function createTask() {
        let task = {name: title, desc: desc, priority: priority, duration: estimate, deadline: deadline}
        props.addTask(task);
        props.toggleCreate();
    }

    return (
        <div className="window-create">
            <p 
                className='window-close'
                onClick={props.toggleCreate}>X</p>
            <label htmlFor="title">Task Name:</label>
            <textarea
                type="text"
                id="title" 
                rows="1" columns="50"
                className="non-resizable"
                onChange={updateTitle}/>
            <label htmlFor="date">Due Date</label>
            <input
                type="date"
                id="date" 
                onChange={updateDeadline}/>
            <label htmlFor="desc">Description:</label>
            <textarea
                id="desc"
                rows="4"
                onChange={updateDesc}/>
            <label htmlFor="estimate">Time Estimate</label>
            <div className='estimate-box non-resizable'>
                <textarea 
                    id="estimate" 
                    rows="1" columns="3"
                    onChange={updateEstimate}/>
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

            <button onClick={createTask}>Done</button>
        </div>
    );
}

export default Create;