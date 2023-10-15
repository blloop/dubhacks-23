import heart_fill from '../img/heart_fill.svg';
const DemoNotif = props => {

    return (
        <div className='notification'>
            <img src={heart_fill}/>
            <p>Your friend <b>Bill</b> liked your task.<br></br>
            Great Job!</p>
        </div>
    )
}

export default DemoNotif;