import { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const onSubmit = (event) => {
        event.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };

    return (
        <div className="container flex justify-center items-center h-screen mx-auto">
            <form onSubmit={onSubmit} className="w-1/5 p-4 bg-gray-700 text-base rounded-lg">
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="p-3">
                    <label>
                        Email
        <input
                            type="text"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="outline-none py-2 pr-4 block w-full"
                            required
                        />
                    </label>
                </div>
                <label>
                    Username
        <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        className="outline-none py-2 pr-4 block w-full"
                        required
                    />
                </label>
                <div className="p-3">
                    <label>
                        Password
        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            className="outline-none py-2 pr-4 block w-full"
                            required
                        />
                    </label>
                </div>
                <div className="p-3">
                    <label>
                        Confirm Password
        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            className="outline-none py-2 pr-4 block w-full"
                            required
                        />
                    </label>
                </div>
                <div className="p-3 pt-4 flex justify-center items-center" ></div>
                <button type="submit" className="w-full bg-gray-300 hover:bg-pink-700 text-black font-bold py-2 px-4 mb-6 rounded">Sign Up</button>
            </form>
        </div>
    );
}

export default SignupFormPage;
