import { useState } from 'react';

const TODAY = (Date.now() / 1000);
const SECONDS_IN_DAY = 86400;

const DailyTask = props => {
    const [details_open, setDetailsOpen] = useState(false);

    let priorityClass = "p" + props.priority;
    let deadline = Math.floor((props.deadline - TODAY) / SECONDS_IN_DAY);

    let deadline_txt = "Due in " + deadline + " days";
    if (deadline < 1) {
        deadline_txt =  "Due TODAY";
    }

    function toggleDetails() {
        setDetailsOpen(!details_open);
    }

    function finishTask() {
        setDetailsOpen(false);
    }

    if (details_open) {
        return (
            <div className={"clicked-priority " + priorityClass}>
                <div onClick={toggleDetails}>
                    <h3>{props.title}</h3>
                    <label>{deadline_txt}</label>
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
                <label>{deadline_txt}</label>
            </div>
        );
    }
}

export default DailyTask;