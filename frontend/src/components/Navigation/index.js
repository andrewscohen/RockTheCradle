import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';

import * as sessionActions from '../../store/session';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    let sessionLinks;

    const userLogout = (event) => {
        event.preventDefault()
        dispatch(sessionActions.logout());
        history.push('/');
    }
    const logInDemo = (event) => {
        event.preventDefault();
        dispatch(sessionActions.login({ credential: 'Demo-lition', password: 'password' }))
        history.push('/')
    }

    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <div className="flex justify-around w-full pr-20 mt-7">
                    <NavLink to="/login" className="transition duration-100 font-body text-l hover:underline hover:text-gray-500 ease">
                        Log in
                    </NavLink>
                    <p>I</p>
                    <NavLink to="/signup" className="transition duration-100 font-body text-l hover:underline hover:text-gray-500 ease">Sign up</NavLink>
                </div>
            </>
        );
    }
    return (
        <nav className="fixed grid w-screen h-20 grid-cols-10 bg-white shadow-md opacity-100 z-99">
            <div className="fixed grid w-screen h-20 grid-cols-10 shadow-md opacity-100 z-99">
                <div className="col-start-1 col-end-2">
                    <NavLink exact to="/"><img src="https://rtcmediabucket.s3.amazonaws.com/assets/rtc-transparent.png" alt="logo" className="h-20 ml-20 transition duration-100 hover:shadow ease" /></NavLink>
                </div>

                <div className="col-start-2 col-end-4">
                    <div className="flex justify-around ml-2 mt-7 ">
                        <NavLink to='/orders/1' className="duration-100 font-body text-ltransition hover:underline hover:text-gray-500 ease">My Cart</NavLink>
                        <NavLink to='#' className="duration-100 font-body text-ltransition hover:underline hover:text-gray-500 ease">Accessories</NavLink>
                        <NavLink to='#' className="transition duration-100 font-body text-l hover:underline hover:text-gray-500 ease">Gear</NavLink>
                    </div>
                </div>
                <div className='col-start-9 col-end-11 pl-14 '>
                    <div id="authButtons">
                        {isLoaded && sessionLinks}
                    </div>
                </div>
            </div>
        </nav >
    );











    // return (
    //     <>
    //         < ul className='nav-bar' >
    //             <div>
    //                 <label className='appName'>WedCamp</label>
    //                 <i className="fad fa-campground"></i>
    //             </div>
    //             <div className='link-parent'>
    //                 <NavLink className='explore' to='/explore'>Explore</NavLink>
    //                 {!sessionUser &&
    //                     <NavLink className='login' to="/login">Log In</NavLink>}
    //                 {!sessionUser &&
    //                     <NavLink className='signup' to="/signup">Sign Up</NavLink>}
    //                 <NavLink className='home' exact to="/">Home</NavLink>
    //                 {sessionUser &&
    //                     <div onClick={userLogout} className='logout' to='/'>Log Out</div>}
    //             </div>
    //         </ul >
    //     </>
    // );

    //     <div>
    // <nav className="sticky z-50 flex items-center justify-between w-full h-20 px-5 py-2 shadow-md cursor-pointer bg-grey-600">
    //             <div className="flex">

    //                 <NavLink exact to="/" className="items-center self-center w-20 h-20"><img src="https://rtcmediabucket.s3.amazonaws.com/assets/rtc-transparent.png" alt="logo" /></NavLink>
    //             </div>

    //             <div className="flex items-center content-center w-full px-20 m-auto">
    //                 <div className="flex justify-between w-full pl-6">
    //                     <NavLink to='#' className="hover:underline">Clothing</NavLink>
    //                     <NavLink to='#' className="hover:underline">Accessories</NavLink>
    //                     <NavLink to='#' className="hover:underline">Gear</NavLink>
    //                 </div>

    //             </div>
    //             <div className="flex items-end justify-end p-1 space-x-3">
    //                 {isLoaded && sessionLinks}
    //             </div>
    //         </nav>
    //     </div >
    // );c
}

export default Navigation;
