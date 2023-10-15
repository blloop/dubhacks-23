import DailyTasks from './DailyTasks';
import Navbar from './Navbar';
import Create from './Create';

const Today = props => {
    let list = [];
    for (let i = 0; i < props.taskList.length; i++) {
        let task = props.taskList[i];
        list.push(
            <DailyTasks
                title={task.name}
                desc={task.desc}
                priority={task.priority}/>
        )
    }

    return (
        <>
            <div className='dark-header'>
                <h1>Hello {props.userName}!</h1>
                <p>You have {props.taskList.length} tasks today {":)"}</p>
            </div>
            
            <Create 
                addTask={props.addTask}></Create>

            {list}

            <Navbar
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
        </>
        
    )
}

/**
 * for all tasks in dailylist
 *   create component 
 */

export default Today;