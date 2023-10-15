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
        props.closeWindow();
    }

    return (
        <div className="window-create">
            <label htmlFor="title">Task Name:</label><br></br>
            <input type="text" id="title"
                onChange={updateTitle}></input>
            <br></br>

            <label htmlFor="desc">Description:</label><br></br>
            <textarea id="desc"
                onChange={updateDesc}></textarea>
            <br></br>

            <p>Select Priority:</p>
                <input type="radio" id="priority_a" name="priority" value={1}
                onChange={updatePriority}></input>
                <label htmlFor="html">A (Top priority)</label>
            <br></br>
                <input type="radio" id="priority_b" name="priority" value={2}
                onChange={updatePriority}></input>
                <label htmlFor="html">B (Medium priority)</label>
            <br></br>
                <input type="radio" id="priority_c" name="priority" value={3}
                onChange={updatePriority}></input>
                <label htmlFor="html">C (Low priority)</label>
            <br></br>            

            <button onClick={createTask}>Done</button>
        </div>
    );
}

export default Create;