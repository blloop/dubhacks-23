import React, { ChangeEvent } from "react";
import { useState } from 'react';

const title = ""

/*
deadline:num
desc:text
duration:num
name:text
priority:num
 */

const Create = props => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateDesc(evt) {
        setDesc(evt.target.value);
        console.log(evt)
    }

    return (
        <div>
            <label htmlFor="title">Task Name:</label><br></br>
            <input type="text" id="title" value={title}
                onChange={updateTitle}></input>
            <br></br>

            <label htmlFor="deadline">Due Date:</label><br></br>
            <input type="date" id="deadline"></input>
            <br></br>

            <label htmlFor="desc">Description:</label><br></br>
            <textarea id="desc"
                onChange={updateDesc}></textarea>
            <br></br>

            <label htmlFor="estimate">Time Estimate (Minutes):</label><br></br>
            <input type="number" id="estimate"></input>
            <br></br>
            <br></br>

            <button>Done</button>
        </div>
    )
}

export default Create;