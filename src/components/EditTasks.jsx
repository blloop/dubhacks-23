import { useState } from 'react';

const MS_FACTOR = 1000;
const TODAY = Date.now() / MS_FACTOR;
const SECONDS_IN_DAY = 86400;

const EditTask = props => {
    const [details_open, setDetailsOpen] = useState(false);

    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.desc);
    const [priority, setPriority] = useState(props.priority);
    const [deadline, setDeadline] = useState(props.deadline);
    const [estimate, setEstimate] = useState(props.estimate);

    let priorityClass = "p" + props.priority;
    
    let days_left = Math.floor((props.deadline - TODAY) / SECONDS_IN_DAY);
    let readable_date = new Date(deadline * MS_FACTOR).toISOString().split('T')[0];

    let deadline_txt = "Due in " + days_left + " days";
    if (days_left < 1) {
        deadline_txt =  "Due TODAY";
    }

    function toggleDetails() {
        setDetailsOpen(!details_open);
    }

    function saveTask() {
        let task = {name: title, desc: desc, priority: priority, duration: estimate, deadline: deadline}
        props.saveEdits(props.id, task);
        console.log(task.id);
        setDetailsOpen(false);
    }

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateDeadline(evt) {
        setDeadline(evt.target.valueAsNumber / MS_FACTOR);
        console.log(deadline)
    }

    function updateDesc(evt) {
        setDesc(evt.target.value);
    }

    function updateEstimate(evt) {
        setEstimate(evt.target.value);
    }

    if (details_open) {
        return (
            <div className={"window-edit clicked-priority " + priorityClass}>
                <i><b onClick={toggleDetails}>Editing</b></i>
                <h3 onClick={toggleDetails}>{title}</h3>
                    <label htmlFor="title">Task Name:</label>
                    <textarea type="text" id="title" className="non-resizable"

                        onChange={updateTitle}>{props.title}</textarea>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" id="date" value={readable_date}
                        onChange={updateDeadline}/>
                    <label htmlFor="desc">Description:</label>
                    <textarea id="desc" rows="4"
                        onChange={updateDesc}>{props.desc}</textarea>
                    <label htmlFor="estimate">Time Estimate</label>
                    <div className='estimate-box non-resizable'>
                        <textarea id="estimate" rows="2" className="non-resizable"
                            onChange={updateEstimate}>{props.estimate}</textarea>
                        <label>minutes</label>
                    </div>
                <div>
                    <button className="button-black" onClick={saveTask}>Save Changes</button>
                </div>
            </div>
        );
    } else {
        return (
            <div onClick={toggleDetails} className={"priority " + priorityClass}>
                <h3>{props.title}</h3>
                <label>{deadline_txt}</label>
            </div>
        );
    }
}

export default EditTask;