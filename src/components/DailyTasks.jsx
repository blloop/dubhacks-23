const details_open = false
const SECONDS_IN_DAY = 86400;

const DailyTask = props => {
    const date = Date.now();
    let priorityClass = "p" + props.priority;
    let deadline = Math.floor((props.deadline - date) / SECONDS_IN_DAY);

    console.log(deadline)
    console.log(date)

    if (deadline < 0) {
        return;
    }

    if (details_open) {
        return (
            <div>
            <div className={priorityClass}>
                <h3>{props.title}</h3>
                <span>{props.desc}</span>
                <label>Due in {deadline} days</label>
                <div>
                    <p>Did you make progress?</p>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
            <br></br>
            </div>
        )
    } else {
        return (
            <div>
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