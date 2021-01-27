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
            <nav className="fixed bg-grey-600 shadow-md h-32 z-50 w-full px-5 py-2 flex justify-between items-center cursor-pointer">
                <NavLink exact to="/" className="hover:underline">Home</NavLink>
                <NavLink to='#' className="hover:underline">Clothing</NavLink>
                <NavLink to='#' className="hover:underline">Accessories</NavLink>
                <NavLink to='#' className="hover:underline">Gear</NavLink>
                <div className="flex items-end space-x-3 p-1 hover:underline">
                    {isLoaded && sessionLinks}
                </div>
            </nav>
        </div >
    );
}

export default Navigation;
