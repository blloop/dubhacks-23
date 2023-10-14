const title = ""

const Create = props => {
    return (
        <div>
            <label htmlFor="title">Task Name:</label><br></br>
            <input type="text" id="title" value={title}
                onChange={updateTitle}></input>
            <br></br>

            <label htmlFor="deadline">Due Date:</label><br></br>
            <input type="date" id="deadline"></input>
            <br></br>

            <label htmlFor="desc">Description:</label><br></br>
            <textarea id="desc"></textarea>
            <br></br>

            <label htmlFor="estimate">Time Estimate (Minutes):</label><br></br>
            <input type="number" id="estimate"></input>
            <br></br>
            <br></br>

            <button>Done</button>
        </div>
    )
}

function updateTitle() {
    return;
}

export default Create;