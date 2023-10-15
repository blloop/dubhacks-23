import heart from '../img/heart.svg';
import heart_fill from '../img/heart_fill.svg';
import comment from '../img/comment.svg';

const FeedTask = props => {
    return (
        <div className='feed-task'>
            <p className='feed-text'>
                <b>{props.user + ' '}</b>
                 just completed their task
                <b>{' ' + props.name}</b>
            </p>
            <div className='feed-info'>
                <p>{
                    props.date < 2 ? 
                        (props.date === 0 ? 'TODAY' : 'YESTERDAY') : 
                        `${props.date} DAYS AGO`
                }</p>
                <div className='feed-buttons'>
                    <button>
                        <img 
                            src={props.liked ? heart_fill : heart}
                            alt='Like Button'/>
                    </button>
                    <button>
                        <img 
                            src={comment}
                            alt='Comment Button'/>
                    </button>
                </div>
            </div>
        </div>
    )

}

export default FeedTask;