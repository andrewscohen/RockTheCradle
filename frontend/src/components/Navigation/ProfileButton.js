import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
        <>
            <button onClick={openMenu}>
                <div className="ml-60 mt-5">
                    <img className="rounded-full h-10" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/15626392_10103141149812575_9083256572061825643_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4euJzJNSSTMAX_JHjZm&_nc_ht=scontent-iad3-1.xx&oh=23dbf2874cc6754dad98c53f51db8856&oe=603DA320" alt=
                        "userPhoto" />
                    {/* <i className="fas fa-user-circle" /> */}
                </div>
            </button>
            {showMenu && (
                <ul className="profile-dropdown">
                    <li>{user.username}</li>
                    <li>{user.email}</li>
                    <li>
                        <button onClick={logout}>Log Out</button>
                    </li>
                </ul>
            )}
        </>
    );
}

export default ProfileButton;
