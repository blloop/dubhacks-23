const Register = props => {
    return (
        <div className='dark-bg page-register'>
            <h1>Let's Get Stuff Done</h1>
            <button onClick={() => props.setIndex(0)}>Next</button>
        </div>
    )
}

export default Register;