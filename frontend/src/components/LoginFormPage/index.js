import React, { useState } from 'react';
import { Redirect, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import './LoginForm.css';

function LoginFormPage() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))
            .catch((res) => {
                if (res.data && res.data.errors) setErrors(res.data.errors);
            });
    }

    return (
        <div className="container flex justify-center items-center h-screen mx-auto">
            <form onSubmit={handleSubmit} className="w-1/5 p-4 bg-gray-700 text-base rounded-lg">
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="p-3">
                    <label className="text-lg">
                        Username or Email
            <input
                            type="text"
                            value={credential}
                            onChange={(e) => setCredential(e.target.value)}
                            className="outline-none py-2 pr-4 block w-full"
                            required
                        />
                    </label>
                </div>
                <div className="p-3">
                    <label>
                        Password
            <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none py-2 pr-4 block w-full"
                            required
                        />
                    </label>
                </div>
                <div className="p-3 pt-4 flex justify-center items-center">
                    <button type="submit" className="w-full bg-gray-300 hover:bg-pink-700 text-black font-bold py-2 px-4 mb-6 rounded">Sign In</button>
                </div>
                <div className="text-xs">
                    <Link to="/signup">DON'T HAVE AN ACCOUNT? JOIN NOW</Link>
                </div>
            </form>
        </div>
    );
}

export default LoginFormPage;
