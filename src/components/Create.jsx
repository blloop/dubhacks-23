import React, { ChangeEvent } from "react";
import { useState } from 'react';

const title = ""

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
    const [priority, setPriority] = useState(-1);
    const [deadline, setDeadline] = useState(-1);
    const [estimate, setEstimate] = useState(-1);

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateDesc(evt) {
        setDesc(evt.target.value);
    }

    function updateDeadline(evt) {
        setDeadline(evt.target.valueAsNumber);
        console.log(evt.target.valueAsNumber)
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
        console.log(task);
        props.toggleCreate();
    }

    return (
        <div className="window-create">
            <p 
                className='window-close'
                onClick={props.toggleCreate}>X</p>
            <label htmlFor="title">Task Name:</label>
            <textarea type="text" id="title"
                onChange={updateTitle}/>
            <label htmlFor="date">Due Date</label>
            <input type="date" id="date"/>
            <label htmlFor="desc">Description:</label>
            <textarea id="desc"
                onChange={updateDesc}/>
            <label htmlFor="estimate">Time Estimate</label>
            <div className='estimate-box'>
                <textarea id="estimate" rows="2"
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