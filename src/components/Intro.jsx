import logo from '../img/logo.png';

const Intro = props => {
    return (
        <>
            <div 
                className='dark-bg page-intro'
                onClick={() => props.setIndex(-1)}>
                <div>
                    <h1>TaskFeed</h1>
                    <img 
                        className='title-logo'
                        src={logo}/>
                </div>
                <h2 className='intro-click'>
                    Click to get started!
                </h2>
            </div>
        </>
    )
}

export default Intro;