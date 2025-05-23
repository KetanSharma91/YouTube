import moment from 'moment';
import React, { useEffect } from 'react';
import Likewatchlatersavbtns from './Likewatchlatersavbtns';
import { useParams, Link } from 'react-router-dom';
import Comment from '../Comment/Comment';

// import vidd from '../Videogrid/vid.mp4';
import { getallvideo, viewvideo } from '../../action/video';

import { useSelector, useDispatch } from 'react-redux';
import { addtohistory } from '../../action/history';

const VideoPage = () => {
    const { vid } = useParams();
    const dispatch = useDispatch();

    // const vids = [
    //     {
    //         _id: 1,
    //         video_src: vidd,
    //         chanel: 'wertyuiiop',
    //         title: 'video 2',
    //         uploader: "abc",
    //         description: "description of video 1"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vidd,
    //         chanel: 'wertyuiiop',
    //         title: 'video 2',
    //         uploader: "abc 2",
    //         description: "description of video 2"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vidd,
    //         chanel: 'wertyuiiop',
    //         title: 'video 3',
    //         uploader: "abc",
    //         description: "description of video 3"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vidd,
    //         chanel: 'wertyuiiop',
    //         title: 'video 4',
    //         uploader: "abc",
    //         description: "description of video 4"
    //     },
    // ];

    const vids = useSelector((state) => state.videoreducer);
    const currentUser = useSelector(state => state.currentuserreducer);

    // const vidNumber = parseInt(vid, 10);
    // const vv = vids?.data.filter((q) => q._id === vid)[0];
    // http://localhost:5000

    const vv = vids?.data?.find((q) => q._id === vid); // safer than filter + [0]

    useEffect(() => {
        if (!vids?.data) {
            dispatch(getallvideo());
        }
    }, [dispatch, vids?.data]);

    const handleviews = () => {
        dispatch(viewvideo({ id: vid }))
    }

    const handlehistory = () => {
        dispatch(addtohistory({
            videoid: vid,
            viewer: currentUser?.result._id,
        }))
    }

    useEffect(() => {
        if (currentUser) {
            handlehistory();
        }
        handleviews();
    }, []);

    return (
        <>
            <div className="container_videoPage">
                <div className="container2_videoPage">
                    <div className="video_display_screen_videoPage">
                        <video src={`https://youtube-ry5z.onrender.com/${vv?.filepath}`} className="video_ShowVideo_videoPage" controls></video>
                        <div className='video_details_videoPage'>
                            <div className='.video_btns_title_VideoPage_cont'>
                                <p className="video_title_VideoPage">
                                    {vv?.videotitle}
                                </p>
                                <div className="views_date_btns_VideoPage">
                                    <div className="views_videoPage">
                                        {vv?.views} views
                                        <div className="dot"></div>{" "}
                                        {moment(vv?.createdAt).fromNow()}
                                    </div>
                                    <Likewatchlatersavbtns vv={vv} vid={vid} />
                                </div>
                            </div>
                            <Link to={'/'} className='chanel_details_videoPage'>
                                <b className="chanel_logo_videoPage">
                                    <p>{vv?.uploader.charAt(0).toUpperCase()}</p>
                                </b>
                                <p className='chanel_name_videoPage'>{vv?.uploader}</p>
                            </Link>
                            <div className="comments_VideoPage">
                                <h2>
                                    <u>Comments</u>
                                </h2>
                                <Comment videoid={vv?._id} />
                            </div>
                        </div>
                    </div>
                    <div className="moreVideoBar">
                        More videos
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoPage;
