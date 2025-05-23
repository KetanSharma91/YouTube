import React from 'react';
import { AiFillPlaySquare, AiOutlineHome, AiFillLike } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater } from 'react-icons/md';
import { FaHistory } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Drawersliderbar = ({ toggleDrawer, toggleDrawersSideBar }) => {
    return (
        <div className='container_DrawaerLeftSidebar' style={toggleDrawersSideBar}>
            <div className="container2_DrawaerLeftSidebar">
                <div className="Drawer_leftsidebar">
                    <NavLink to={'/'} className="icon_sidebar_div">
                        <p>
                            <AiOutlineHome size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Home</div>
                        </p>
                    </NavLink>
                    <div className="icon_sidebar_div">
                        <p>
                            <MdOutlineExplore size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Explore</div>
                        </p>
                    </div>
                    <div className="icon_sidebar_div">
                        <p>
                            <img src='https://raw.githubusercontent.com/BitHeadmr/Your_tube_clone/refs/heads/main/client/src/Component/Leftsidebar/shorts.png' alt='' width={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Shorts</div>
                        </p>
                    </div>
                    <div className="icon_sidebar_div">
                        <p>
                            <MdOutlineSubscriptions size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Subscriptions</div>
                        </p>
                    </div>
                </div>
                <div className="libraryBtn_Drawerleftsidebar">
                    <NavLink to={'/Library'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineVideoLibrary size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Library</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/WatchHistory'} className="icon_sidebar_div">
                        <p>
                            <FaHistory size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">History</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/YourVideo'} className="icon_sidebar_div">
                        <p>
                            <AiFillPlaySquare size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Your Videos</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/WatchLater'} className="icon_sidebar_div">
                        <p>
                            <MdOutlineWatchLater size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Watch Later</div>
                        </p>
                    </NavLink>
                    <NavLink to={'/LikedVideos'} className="icon_sidebar_div">
                        <p>
                            <AiFillLike size={22} className='icon_sidebar' style={{ margin: "auto 0.7rem" }} />
                            <div className="text_sidebar_icon">Liked Videos</div>
                        </p>
                    </NavLink>
                </div>
                <div className="subScriptions_lsdbar">
                    <h3>Your Subscription</h3>
                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>
                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>
                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>
                    <div className="chanel_lsdbar">
                        <p>C</p>
                        <div>Chanel</div>
                    </div>
                </div>
            </div>
            <div className="container3_DrawaerLeftSidebar" onClick={() => toggleDrawer()}></div>
        </div>
    )
}

export default Drawersliderbar;