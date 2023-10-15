import Navbar from "./Navbar";
import FeedTask from './FeedTask';
import profile from '../img/profile.svg';
import DemoNotif from './DemoNotif';

const Feed = props => {
    console.log(props.feedList)
    let list = [];
    for (let i = 0; i < props.feedList.length; i++) {
        let task = props.feedList[i];
        list.push(
            <FeedTask
                key={i}
                name={task.name}
                user={task.user}
                date={task.date}
                liked={task.liked}/>
        )
    }
    if (list.length === 0) {
        list.push(
            <div className='empty-feed'>
                Add friends to see their achievements!
            </div>
        )
    }

    return (
        <>
            <DemoNotif></DemoNotif>
            <div className='dark-bg'></div>
            <div className='feed-header'>
                <button>+ Add Friends</button>
                <img 
                    src={profile}
                    alt='Profile Button'/>
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