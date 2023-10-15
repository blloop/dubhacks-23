import DailyTasks from './DailyTasks';
import Navbar from './Navbar';
import DemoNotif from './DemoNotif';

const Today = props => {
    let localTaskList = [...props.taskList];

    function comparePriority(a, b) {
        if (a.priority < b.priority) {
            return -1;
        }
        if (a.priority > b.priority) {
            return 1;
        }
        return 0;
    }

    localTaskList.sort( comparePriority );

    let list = [];
    for (let i = 0; i < localTaskList.length; i++) {
        let task = localTaskList[i];
        list.push(
            <DailyTasks
                key={i}
                title={task.name}
                desc={task.desc}
                priority={task.priority}
                deadline={task.deadline}/>
        )
    }

    return (
        <>
            <DemoNotif></DemoNotif>
            <div className='dark-header'>
                <h1>Hello {props.userName}!</h1>
                <p>You have {localTaskList.length} tasks today {":)"}</p>
            </div>
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