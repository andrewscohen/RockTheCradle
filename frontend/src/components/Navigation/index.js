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

    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login" className="hover:underline w-full">
                    Log in
                    </NavLink>
                <p>I</p>
                <NavLink to="/signup" className="hover:underline w-full">Sign up</NavLink>
                <button
                    onClick={(event) => logInDemo(event)}>Demo User</button>
            </>
        );
    }

    return (
        <nav className="fixed h-14 top-0 bg-red-300 grid grid-cols-10 w-screen">
            <div className="col-start-1 col-end-2">
                <NavLink exact to="/"><img src="https://rtcmediabucket.s3.amazonaws.com/assets/rtc-transparent.png" alt="logo" className="h-14" /></NavLink>
            </div>

            <div className="col-start-2 col-end-4">
                <NavLink to='#'>Clothing</NavLink>
                <NavLink to='#'>Accessories</NavLink>
                <NavLink to='#'>Gear</NavLink>
            </div>

            <div className='col-start-6'>
                {isLoaded && sessionLinks}
            </div>
        </nav>
    );
    //     <div>
    //         <nav className="sticky bg-grey-600 shadow-md h-20 z-50 w-full px-5 py-2 flex justify-between items-center cursor-pointer">
    //             <div className="flex">

    //                 <NavLink exact to="/" className="h-20 w-20 self-center items-center"><img src="https://rtcmediabucket.s3.amazonaws.com/assets/rtc-transparent.png" alt="logo" /></NavLink>
    //             </div>

    //             <div className="flex w-full m-auto px-20 items-center content-center">
    //                 <div className="flex justify-between w-full pl-6">
    //                     <NavLink to='#' className="hover:underline">Clothing</NavLink>
    //                     <NavLink to='#' className="hover:underline">Accessories</NavLink>
    //                     <NavLink to='#' className="hover:underline">Gear</NavLink>
    //                 </div>

    //             </div>
    //             <div className="flex justify-end items-end space-x-3 p-1">
    //                 {isLoaded && sessionLinks}
    //             </div>
    //         </nav>
    //     </div >
    // );c
}

export default Navigation;
