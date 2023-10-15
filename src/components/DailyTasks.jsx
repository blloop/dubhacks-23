import { useState } from 'react';

const TODAY = (Date.now() / 1000);
const SECONDS_IN_DAY = 86400;

const DailyTask = props => {
    const [details_open, setDetailsOpen] = useState(false);
    const [task_sucess, setTaskSucess] = useState(-1)

    let priorityClass = "p" + props.priority;
    let deadline = Math.floor((props.deadline - TODAY) / SECONDS_IN_DAY);

    let deadline_txt = "Due in " + deadline + " days";
    if (deadline < 1) {
        deadline_txt =  "Due TODAY";
    }

    function toggleDetails() {
        setDetailsOpen(!details_open);
    }

    function finishTask(sucess_code) {
        setTaskSucess(sucess_code);
        setDetailsOpen(false);
    }

    if (task_sucess === 1) {
        return (
            <div className={"disabled-task completed " + priorityClass}>
                <h3>{props.title}</h3>
            </div>
        )
    } else if (task_sucess === 0) {
        return (
            <div className={"disabled-task failed " + priorityClass}>
                <h3>{props.title}</h3>
            </div>
        )
    } else if (details_open) {
        return (
            <div className={"clicked " + priorityClass}>
                <div onClick={toggleDetails}>
                    <h3>{props.title}</h3>
                    <label>{deadline_txt}</label>
                    <p>{props.desc}</p>
                </div>
                <div>
                    <p className='bold'>Did you finish this for today?</p>
                    <button className="button-black" onClick={() => finishTask(1)}>Yes</button>
                    <button className="button-black" onClick={() => finishTask (0)}>No</button>
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div onClick={toggleDetails} className={"priority " + priorityClass}>
                    <h3>{props.title}</h3>
                    <label>{deadline_txt}</label>
                </div>
            </>
        );
    }
}

export default DailyTask;