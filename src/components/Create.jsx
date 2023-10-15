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
    const [isLongTerm, setLongTerm] = useState(false);

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [deadline, setDeadline] = useState(0);
    const [estimate, setEstimate] = useState(0);

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

    if (isLongTerm === false) {
        return (
        <div>
            <h2>One Time Task</h2>
            <button id="task_type"
                onClick={toggleType}>Change to long term goal</button>

            <label htmlFor="title">Task Name:</label><br></br>
            <input type="text" id="title"
                onChange={updateTitle}></input>
            <br></br>

            <label htmlFor="desc">Description:</label><br></br>
            <textarea id="desc"
                onChange={updateDesc}></textarea>
            <br></br>

            <p>Select Priority:</p>
            <input type="radio" id="priority_a" name="priority" value={1}></input>
            <label for="html">A (Top priority)</label>
            <br></br>
            <input type="radio" id="priority_b" name="priority" value={2}></input>
            <label for="html">B (Medium priority)</label>
            <br></br>
            <input type="radio" id="priority_c" name="priority" value={3}></input>
            <label for="html">C (Low priority)</label>
            <br></br>            

            <button>Done</button>
        </div>
         )
    } else {
        return (
            <div>
            <label htmlFor="title">Task Name:</label><br></br>
            <input type="text" id="title"
                onChange={updateTitle}></input>
            <br></br>

            <label htmlFor="deadline">Due Date:</label><br></br>
            <input type="date" id="deadline"
                onChange={updateDeadline}></input>
            <br></br>

            <label htmlFor="desc">Description:</label><br></br>
            <textarea id="desc"
                onChange={updateDesc}></textarea>
            <br></br>

            <label htmlFor="estimate">Time Estimate (Minutes):</label><br></br>
            <input type="number" id="estimate" onChange={updateEstimate}></input>
            <br></br>
            <br></br>

            <button>Done</button>
        </div>
        )
    }  
}

export default Create;