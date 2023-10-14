const title = "What im gonna do";
const desc = "Some more information";
const priority = 0
const details_open = false

const DailyTask = props => {
    return (
        <div class="dailytask">
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