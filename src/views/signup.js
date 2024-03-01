import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/** Firebase authentication modules */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

//TODO: user authentication, maybe move to controllers/authentication.js
//TODO: add email signup functionality, add Google signup functionality
//TODO: add UI to change to login screen

export default function Signup() {
    //link redirection functionality
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    async function onSubmit(e) {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                //user is created & logged in
                const user = userCred.user;
                console.log("user created:", user);
                navigate('/login');
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="main">
            <div className="ui container">
                <h2>Signup</h2>
                <form className="ui form segment" onSubmit={onSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Email" required
                               value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" required
                               value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className="ui button green" type="submit"
                            disabled={!email || !password}>Sign Up
                    </button>
                    <button className="ui button grey">Sign up with Email</button>
                    <button className="ui button red">Sign up with Google</button>
                </form>
            </div>
        </div>
    );
}
