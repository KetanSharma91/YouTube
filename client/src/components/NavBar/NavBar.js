import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'

import { RiVideoAddLine } from 'react-icons/ri';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { BiUserCircle } from 'react-icons/bi';

import Searchbar from './Searchbar';
import Auth from '../Pages/Auth';
import { useGoogleLogin, googleLogout } from '@react-oauth/google';
import axios from 'axios';
import { login } from '../../action/auth';
import { setcurrentuser } from '../../action/currentuser';
import { jwtDecode } from 'jwt-decode';

const NavBar = ({ toggleDrawer, seteditcreateChannelBtn }) => {

    const [authbtn, setauthbtn] = useState(false);
    const [user, setuser] = useState(null);
    const [profile, setprofile] = useState([]);
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentuserreducer);

    const successlogin = () => {
        // console.log(profile);
        if (profile.email) {
            dispatch(login({ email: profile.email }))
            console.log(profile.email);
        }
    }

    // console.log(currentUser);

    // const currentUser = {
    //     result: {
    //         _id: 1,
    //         name: 'abcccc',
    //         email: "abc@mail.com",
    //         joinedon: "123-456-789"
    //     }
    // }

    const google_login = useGoogleLogin({
        onSuccess: tokenResponse => setuser(tokenResponse),
        onError: (error) => console.log("Login Failed", error)
    });

    useEffect(() => {
        if (user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
                .then((res) => {
                    setprofile(res.data);
                    successlogin();
                    // console.log(res.data);
                })
            // .catch((err) => console.log(err))
        }
    }, [user]);

    const logout = () => {
        dispatch(setcurrentuser(null))
        googleLogout()
        localStorage.clear()
    }

    useEffect(() => {
        const token = currentUser?.token;
        if (token) {
            const decodetoken = jwtDecode(token)
            if (decodetoken.exp * 1000 < new Date().getTime()) {
                logout()
            }
        }
        dispatch(setcurrentuser(JSON.parse(localStorage.getItem("Profile"))))
    }, [currentUser?.token, dispatch])

    return <>
        <div className="Container_Navbar">
            <div className="Burger_Logo_Navbar">
                <div className="burger" onClick={() => toggleDrawer()}>
                    <p></p>
                    <p></p>
                    <p></p>
                </div>
                <Link to={"/"} className='logo_div_Navbar'>
                    <img src="https://www.youtube.com/s/desktop/08f2775a/img/logos/favicon_144x144.png" alt="logo" />
                    <p className='logo_title_navbar'>YouTube</p>
                </Link>
            </div>
            <Searchbar />
            <RiVideoAddLine size={22} className={'vid_bell_Navbar'} />
            <div className="apps_Box">
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
                <p className="appBox"></p>
            </div>
            <IoMdNotificationsOutline size={22} className={"vid_bell_Navbar"} />
            <div className="Auth_cont_Navbar">
                {currentUser ? (
                    <>
                        <div className="Chanel_logo_App" onClick={() => setauthbtn(true)}>
                            <p className="fstChar_logo_App">
                                {currentUser?.result.name ? (
                                    <>{currentUser?.result.name.charAt(0).toUpperCase()}</>
                                ) : (
                                    <>{currentUser?.result.email.charAt(0).toUpperCase()}</>
                                )}
                            </p>
                        </div>
                    </>
                ) : (
                    <>
                        <p className='Auth_Btn' onClick={() => google_login()}>
                            <BiUserCircle size={22} />
                            <b>Sign in</b>
                        </p>
                    </>
                )}
            </div>
        </div>
        {
            authbtn &&
            <Auth seteditcreateChannelBtn={seteditcreateChannelBtn} user={currentUser} setauthbtn={setauthbtn} />
        }
    </>;
}

export default NavBar;