const details_open = false

const DailyTask = props => {
    let priorityClass = "p" + props.priority;

    if (details_open) {
        return (
            <div className={priorityClass}>
                <h3>{props.title}</h3>
                <span>{props.desc}</span>
                <div>
                    <p>Did you make progress?</p>
                    <button>Yes</button>
                    <button>No</button>
                </div>
            </div>
        )
    } else {
        return (
            <div className={priorityClass}>
                <h3>{props.title}</h3>
            </div>
        )
    }
}

export default DailyTask;