import { useState } from 'react';

const Register = props => {
    const [username, setUser] = useState("");

    function updateUsername(evt) {
        setUser(evt.target.value);
    }

    function openApp() {
        props.setIndex(0);
        props.setUserName(username);
    }

    return (
        <div className='dark-bg page-register'>
            <h1>Let's Get Stuff Done.</h1>
            <h3>Sign up to get started</h3>

            <span>Username</span><br></br>
            <input type="text" onChange={updateUsername}></input>
            <br></br>
            <br></br>

            <span>Password</span><br></br>
            <input type="password"></input>
            <br></br>
            <br></br>

            <b>Must contain:</b><br></br>
            <span>- 9 characters<br></br>
            - 1 number<br></br>
            - 1 capital letter</span>
            <br></br>
            <br></br>

            <button onClick={openApp}>Sign Up</button>
        </div>
    )
}

export default Register;