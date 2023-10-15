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
            </div>
        </div>
    )

}

export default FeedTask;