import React from 'react';

import Showvideo from './Showvideo';
// import vid from "../Videogrid/vid.mp4";
import { useSelector } from 'react-redux';

const Showvideolist = ({ videoid }) => {

    // const vids = [
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

    const vids = useSelector(state => state.videoreducer);
    // console.log('videoid',videoid);

    return (
        <div className='Container_ShowVideoGrid'>
            {
                vids?.data.filter(q => q._id === videoid).map(vi => {
                    return (
                        <div className="video_box_app" key={vi._id}>
                            <Showvideo vid={vi} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Showvideolist;