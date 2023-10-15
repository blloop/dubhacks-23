import heart from '../img/heart.svg';
import heart_fill from '../img/heart_fill.svg';
import comment from '../img/comment.svg';
import { useState } from 'react';

const FeedTask = props => {
    const [liked, setLike] = useState(props.liked);

    function toggleLike() {
        setLike(!liked);
    }

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
                    <button onClick={() => toggleLike(props.date)}>
                        <img 
                            src={liked ? heart_fill : heart}
                            alt='Like Button'
                            />
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