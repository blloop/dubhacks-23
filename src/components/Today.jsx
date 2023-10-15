import DailyTasks from './DailyTasks';
import Navbar from './Navbar';
import Create from './Create';

const num_tasks = 20;

const Today = props => {
    let list = [];
    for (let i = 0; i < props.taskList.length; i++) {
        let task = props.taskList[i];
        list.push(
            <DailyTasks
                title={task.title}
                desc={task.desc}
                priority={20}/>
        )
    }

    return (
        <>
            <div className='dark-header'>
                <h1>Hello!</h1>
                <p>You have {num_tasks} tasks today :0</p>
            </div>
            
            <Create></Create>

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