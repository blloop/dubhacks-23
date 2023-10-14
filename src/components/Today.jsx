import DailyTasks from './DailyTasks';
import Navbar from './Navbar';

const num_tasks = 20;

const Today = props => {
    let list = [];
    for (let i = 0; i < num_tasks; i++) {
        list.push(
            <DailyTasks
                title="History Essay"
                desc="Very important"
                priority={20}/>
        )
    }

    return (
        <>
            <div class="today-header">
                <h1>Hello!</h1>
                <p>You have {num_tasks} tasks today :0</p>
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