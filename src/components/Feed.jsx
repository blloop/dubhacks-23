import Navbar from "./Navbar";
import FeedTask from './FeedTask';

const Feed = props => {
    let list = [];
    for (let i = 0; i < props.taskList.length; i++) {
        let task = props.taskList[i];
        list.push(
            <DailyTasks
                name={''}
                user={''}
                icon={''}
                liked={''}/>
        )
    }

    return (
        <>
            <div className='dark-bg'></div>
            <div className='page-feed'>
                <h1> Feed </h1>
            </div>
            <Navbar
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
        </>
    )
}

export default Feed;