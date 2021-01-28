import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <NavLink to="/login">
                    Log in
                </NavLink>
                <p>I</p>
                <NavLink to="/signup">Sign up</NavLink>
            </>
        );
    }
    return (
        <div>
            <nav className="sticky bg-grey-600 shadow-md h-32 z-50 w-full px-5 py-2 flex justify-between items-center cursor-pointer">
                <div className="flex">
                    <NavLink exact to="/" className="h-20 w-20 self-center items-center"><img src="https://rtcmediabucket.s3.amazonaws.com/assets/rtc-transparent.png" alt="logo" /></NavLink>
                </div>
                <div className="flex w-full">
                    <div className="flex justify-between w-full pl-6">
                        <NavLink to='#' className="hover:underline">Clothing</NavLink>
                        <NavLink to='#' className="hover:underline">Accessories</NavLink>
                        <NavLink to='#' className="hover:underline">Gear</NavLink>
                    </div>
                    <div className="flex justify-end items-end space-x-3 p-1 hover:underline w-full">
                        {isLoaded && sessionLinks}
                    </div>
                </div>
            </nav>
        </div >
    );
}

export default Navigation;
