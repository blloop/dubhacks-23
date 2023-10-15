import { useState } from 'react';

const DailyTask = props => {
    const [details_open, setDetailsOpen] = useState(false);

    const date = Date.now();
    let priorityClass = "p" + props.priority;
    let deadline = Math.floor(props.deadline);
    
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
            <br></br>
            </div>
        )
    } else {
        return (
            <div onClick={toggleDetails}>
            <div className={"priority " + priorityClass}>
                <h3>{props.title}</h3>
                <label>Due in {deadline} days</label>
            </div>
            <br></br>
            </div>
        )
    }
}

export default DailyTask;