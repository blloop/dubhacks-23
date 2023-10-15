import { useState } from 'react';

const MS_FACTOR = 1000;
const TODAY = Date.now() / MS_FACTOR;
const SECONDS_IN_DAY = 86400;

const EditTask = props => {

    let priorityClass = "p" + props.priority;
    
    let days_left = Math.floor((props.deadline - TODAY) / SECONDS_IN_DAY);
    let readable_date = new Date(props.deadline * MS_FACTOR).toISOString().split('T')[0];

    let deadline_txt = "Due in " + days_left + " days";

    if (days_left < 1) {
        deadline_txt = "Due TODAY";
    }

    return (
        <div onClick={() => props.setEditing(!props.editing)} className={"priority " + priorityClass}>
            <h3>{props.title}</h3>
            <label>{deadline_txt}</label>
        </div>
    );
}

export default EditTask;