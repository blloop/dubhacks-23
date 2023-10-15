import { useState } from 'react';

const SECONDS_IN_DAY = 86400;

const DailyTask = props => {
    const [details_open, setDetailsOpen] = useState(false);

    const date = Date.now();
    let priorityClass = "p" + props.priority;
    let deadline = props.deadline; //Math.floor((props.deadline - date) / SECONDS_IN_DAY);

    console.log(deadline)
    console.log(date)

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
                    <label>Due in {deadline} days</label>
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