import React from 'react';
// import vid from "../Videogrid/vid.mp4";
import WHL from '../WHL/WHL';
import { useSelector } from 'react-redux';

const WatchHistorypage = () => {

    const watchhistoryvideolist = useSelector(s => s.historyreducer);
    // const watchhistoryvideolist = [
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

    return (
        <div>
            <WHL page={"History"} videolist={watchhistoryvideolist} />
        </div>
    )
}

export default WatchHistorypage;