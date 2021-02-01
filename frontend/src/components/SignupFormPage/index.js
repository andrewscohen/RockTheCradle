import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

const SignupFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const logInDemo = (event) => {
        event.preventDefault();
        dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
        history.push('/')
    }



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

    //     return (
    //         <div className="container flex justify-center items-center h-screen mx-auto">
    // <form onSubmit={onSubmit} className="w-1/5 p-4 bg-gray-700 text-base rounded-lg">
    //     <ul>
    //         {errors.map((error, idx) => <li key={idx}>{error}</li>)}
    //     </ul>
    //     <div className="p-3">
    // <label>
    //     Email
    //         <input
    //         type="text"
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         className="outline-none py-2 pr-4 block w-full"
    //         required
    //     />
    // </label>
    //                 </div>
    // <label>
    //     Username
    //         <input
    //         type="text"
    //         value={username}
    //         onChange={(event) => setUsername(event.target.value)}
    //         className="outline-none py-2 pr-4 block w-full"
    //         required
    //     />
    // </label>
    //                 <div className="p-3">
    // <label>
    //     Password
    //         <input
    //         type="password"
    //         value={password}
    //         onChange={(event) => setPassword(event.target.value)}
    //         className="outline-none py-2 pr-4 block w-full"
    //         required
    //     />
    // </label>
    //                 </div>
    // //                 <div className="p-3">
    // <label>
    //     Confirm Password
    //         <input
    //         type="password"
    //         value={confirmPassword}
    //         onChange={(event) => setConfirmPassword(event.target.value)}
    //         className="outline-none py-2 pr-4 block w-full"
    //         required
    //     />
    // </label>
    //                 </div>
    //                 <div className="p-3 pt-4 flex justify-center items-center" ></div>
    //                 <button type="submit" className="w-full bg-gray-300 hover:bg-pink-700 text-black font-bold py-2 px-4 mb-6 rounded">Sign Up</button>
    //                 <button onClick={(event) => logInDemo(event)}>Demo User</button>
    //             </form>
    //         </div>
    //     );
    // }



    return (
        <>
            <section className="w-full bg-white h-50">

                <div className="z-1 py-24 mx-auto max-w-7xl flex">

                    <div className="flex flex-col lg:flex-row">
                        <div className="relative w-full bg-cover overflow-hidden lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">

                            <div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                                <div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                                    <div className="relative">
                                        <p className="mb-2 font-medium text-gray-700 uppercase"></p>
                                        <h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">Features to help you work smarter</h2>
                                    </div>
                                    {/* <p className="text-2xl text-gray-700">We've created a simple formula to follow in order to gain more out of your business and your application.</p> */}
                                    <a href="#_" className="inline-block px-8 py-5 text-xl font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Get Started Today</a>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-white lg:w-6/12 xl:w-5/12">

                            <div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                                <h4 className="w-full text-3xl font-bold">Signup</h4>
                                <p className="text-lg text-gray-500">or, if you have an account you can <a href="#_" class="text-blue-600 underline">sign in</a></p>


                                <form onSubmit={onSubmit}>
                                    <div className="relative w-full mt-10 space-y-8">
                                        <div className="relative">
                                            <ul>
                                                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                                            </ul>
                                            <label className="font-medium text-gray-900">Username</label>
                                            <input
                                                type="text"
                                                value={username}
                                                onChange={(event) => setUsername(event.target.value)}
                                                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Enter Your Username"
                                                required />
                                        </div>
                                        <div className="relative">
                                            <label className="font-medium text-gray-900">Email</label>
                                            <input type="text"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50"
                                                placeholder="Enter Your Email Address"
                                                required />
                                        </div>
                                        <div className="relative">
                                            <label className="font-medium text-gray-900">Password</label>
                                            <input type="password"
                                                value={password}
                                                onChange={(event) => setPassword(event.target.value)} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password" />
                                        </div>
                                        <div className="relative">
                                            <label className="font-medium text-gray-900">Confirm Password</label>
                                            <input type="password"
                                                value={confirmPassword}
                                                onChange={(event) => setConfirmPassword(event.target.value)} className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-200 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50" placeholder="Password" />
                                        </div>
                                        <div className="relative">
                                            <button type="submit" className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-blue-600 rounded-lg hover:bg-blue-700 ease">Create Account</button>
                                            <button
                                                onClick={(event) => logInDemo(event)}
                                                className="inline-block w-full px-5 py-4 mt-3 text-lg font-bold text-center text-gray-900 transition duration-200 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 ease">Demo User</button>
                                            {/* <button className=""
                                                onClick={(event) => logInDemo(event)}>Demo User</button> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default SignupFormPage;
