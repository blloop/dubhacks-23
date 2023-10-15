const details_open = false

const DailyTask = props => {
    return (
        <div className="dailytask">
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
            <div>
                <p>Did you make progress?</p>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
    )
}

export default DailyTask;