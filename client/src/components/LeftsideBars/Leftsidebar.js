import React from 'react';
// import shorts from "https://github.com/BitHeadmr/Your_tube_clone/blob/main/client/src/Component/Leftsidebar/shorts.png?raw=true"
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlineSubscriptions, MdOutlineVideoLibrary } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Leftsidebar = () => {
    return (
        <div className='container_leftSidebar'>
            <NavLink to={'/'} className="icon_sidebar_div" >
                <AiOutlineHome size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Home</div>
            </NavLink>
            <div className="icon_sidebar_div">
                <MdOutlineExplore size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Explore</div>
            </div>
            <div className="icon_sidebar_div">
                <img src="https://raw.githubusercontent.com/BitHeadmr/Your_tube_clone/refs/heads/main/client/src/Component/Leftsidebar/shorts.png" width={22} className='icon_sidebar' alt="" />
                <div className="text_sidebar_icon">Shorts</div>
            </div>

            <div className="icon_sidebar_div">
                <MdOutlineSubscriptions size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Subscription</div>
            </div>
            <NavLink to={'/Library'} className="icon_sidebar_div">
                <MdOutlineVideoLibrary size={22} className='icon_sidebar' />
                <div className="text_sidebar_icon">Library</div>
            </NavLink>
        </div>
    )
}

export default Leftsidebar;
