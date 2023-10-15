import { useState } from 'react';

const TODAY = Date.now() / 1000;
const SECONDS_IN_DAY = 86400;

const DailyTask = props => {
    const [details_open, setDetailsOpen] = useState(false);

    const [title, setTitle] = useState(props.title);
    const [desc, setDesc] = useState(props.desc);
    const [priority, setPriority] = useState(props.priority);
    const [deadline, setDeadline] = useState(props.deadline);
    const [estimate, setEstimate] = useState(props.estimate);

    let priorityClass = "p" + props.priority;
    
    let days_left = Math.floor((props.deadline - TODAY) / SECONDS_IN_DAY);

    let readable_date = "2025-01-01";
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
        setDeadline(evt.target.valueAsNumber / 1000);
    }

    if (details_open) {
        return (
            <div className={"clicked-priority " + priorityClass}>
                <h3 onClick={toggleDetails}>Editing...</h3>
                    <label htmlFor="title">Task Name:</label><br></br>
                    <textarea type="text" id="title" className="non-resizable"

                        onChange={updateTitle}>{props.title}</textarea>
                    <br></br>
                    <label htmlFor="date">Due Date</label><br></br>
                    <input type="date" id="date" value={readable_date}
                        onChange={updateDeadline}/>
                    <p>{props.desc}</p>
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

export default DailyTask;