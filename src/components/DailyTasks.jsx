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
            <div>
            <div className={priorityClass}>
                <h3 onClick={toggleDetails}>{props.title}</h3>
                <label>Due in {deadline} days</label>
                <p>{props.desc}</p>
                <div>
                    <p><b>Did you finish this for today?</b></p>
                    <button onClick={finishTask}>Yes</button>
                    <button onClick={finishTask}>No</button>
                </div>
            </div>
            <br></br>
            </div>
        )
    } else {
        return (
            <div onClick={toggleDetails}>
            <div className={priorityClass}>
                <h3>{props.title}</h3>
                <label>Due in {deadline} days</label>
            </div>
            <br></br>
            </div>
        )
    }
}

export default DailyTask;