import DailyTasks from './DailyTasks';
import Navbar from './Navbar';

const Today = props => {
    let list = [];
    for (let i = 0; i < props.taskList.length; i++) {
        let task = props.taskList[i];
        list.push(
            <DailyTasks
                title={task.name}
                desc={task.desc}
                priority={task.priority}
                deadline={task.deadline}/>
        )
    }

    return (
        <>
            <div className='dark-header'>
                <h1>Hello {props.userName}!</h1>
                <p>You have {props.taskList.length} tasks today {":)"}</p>
            </div>

            {list}

            <Navbar
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
            <br></br><br></br><br></br>
        </>

    )
}

/**
 * for all tasks in dailylist
 *   create component 
 */

export default Today;