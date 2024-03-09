import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

/** Firebase authentication modules */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
    //link redirection functionality
    const navigate = useNavigate();

    //form states (email&password)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    //error states (invalid authentication)
    const [error, setError] = useState('');

    async function onSignupSubmit(e) {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCred) => {
                //user is created & logged in
                const user = userCred.user;
                console.log("user created:", user);
                // navigate('/login');
                navigate('/');      //after successful registration, navigate to homepage
            })
            .catch((err) => {
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log("register error:", errorCode, errorMessage);

                setError(errorMessage.replace("Firebase: ",""));
            });
    }

    return (
        <div className="main">
            <div className="ui container">
                <h2>Register</h2>
                <form className="ui form segment" onSubmit={onSignupSubmit}>
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
                            disabled={!email || !password}>Register
                    </button>
                    <NavLink to="/">
                        <button className="ui right floated button">Skip</button>
                    </NavLink>
                </form>
                <div className="ui red header">
                    {error}
                </div>
            </div>
        </div>
    );
}
