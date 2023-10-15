import Navbar from "./Navbar";
import FeedTask from './FeedTask';

const Feed = props => {
    console.log(props.feedList)
    let list = [];
    for (let i = 0; i < props.feedList.length; i++) {
        let task = props.feedList[i];
        list.push(
            <FeedTask
                name={task.name}
                user={task.user}
                date={task.date}
                liked={task.liked}/>
        )
    }

    return (
        <>
            <div className='dark-bg'></div>
            <div className='feed-header'>
                <button>+ Add Friends</button>
                <img/>
            </div>
            {list}
        
            <Navbar
                idx={props.pageIndex}
                setIndex={props.setIndex}
            />
        </>
    )
}

export default Feed;