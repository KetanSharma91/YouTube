import React from 'react';

// import vid from "../Videogrid/vid.mp4";
import WHL from '../WHL/WHL';
import { useSelector } from 'react-redux';

const Watchlaterpage = () => {

    // const watchlatervideolist = [
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 1',
    //         uploader: "abc",
    //         description: "description of video 1"
    //     },
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 2',
    //         uploader: "abc 2",
    //         description: "description of video 2"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 3',
    //         uploader: "abc",
    //         description: "description of video 3"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 4',
    //         uploader: "abc",
    //         description: "description of video 4"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 2',
    //         uploader: "abc 2",
    //         description: "description of video 2"
    //     },
    // ];

    const watchlatervideolist = useSelector(state => state.watchlaterreducer);
    // console.log('watchlatervideolist',watchlatervideolist)
    return (
        <div>
            <WHL page={"Watch Later videos"} videolist={watchlatervideolist} />
        </div>
    )
}

export default Watchlaterpage;