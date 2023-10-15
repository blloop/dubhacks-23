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

    const date = Date.now();
    let priorityClass = "p" + props.priority;
    
    console.log(deadline)
    console.log(date)

    function toggleDetails() {
        setDetailsOpen(!details_open);
    }

    function finishTask() {
        setDetailsOpen(false);
    }

    function updateTitle(evt) {
        setTitle(evt.target.value);
    }

    function updateDeadline(evt) {
        let days = (evt.target.valueAsNumber - TODAY) / SECONDS_IN_DAY;
        setDeadline(days + 1.3);
        console.log(days + 1.3);
    }

    if (details_open) {
        return (
            <div className={"clicked-priority " + priorityClass}>
                <div onClick={toggleDetails}>
                    <label htmlFor="title">Task Name:</label><br></br>
                    <textarea type="text" id="title" className="non-resizable"

                        onChange={updateTitle}>{props.title}</textarea>
                    <label>Due in {deadline} days</label>
                    <label htmlFor="date">Due Date</label>
                    <input type="date" id="date" 
                        onChange={updateDeadline}/>
                    <p>{props.desc}</p>
                </div>
                <div>
                    <p><b>Did you finish this for today?</b></p>
                    <button className="button-black" onClick={finishTask}>Yes</button>
                    <button className="button-black" onClick={finishTask}>No</button>
                </div>
            </div>
        );
    } else {
        return (
            <div onClick={toggleDetails} className={"priority " + priorityClass}>
                <h3>{props.title}</h3>
                <label>Due in {deadline} days</label>
            </div>
        );
    }
}

export default DailyTask;