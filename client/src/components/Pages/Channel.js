import React from 'react';
// import vid from '../Videogrid/vid.mp4';
import { useParams } from 'react-router-dom';

import ChanelDescribe from './ChanelDescribe';
import Showvideogrid from '../Videogrid/Showvideogrid';
import Leftsidebar from '../LeftsideBars/Leftsidebar';
import { useSelector } from 'react-redux';

const Channel = ({ setvideoUploadPage, seteditcreateChannelBtn }) => {

    // const vids = [
    //     {
    //         _id: 1,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 2',
    //         uploader: "abc",
    //         description: "description of video 1"
    //     },
    //     {
    //         _id: 2,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 2',
    //         uploader: "abc 2",
    //         description: "description of video 2"
    //     },
    //     {
    //         _id: 3,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 3',
    //         uploader: "abc",
    //         description: "description of video 3"
    //     },
    //     {
    //         _id: 4,
    //         video_src: vid,
    //         chanel: 'wertyuiiop',
    //         title: 'video 4',
    //         uploader: "abc",
    //         description: "description of video 4"
    //     },
    // ];

    const { cid } = useParams();
    const vids = useSelector(state => state.videoreducer)?.data?.filter(q => q?.videochanel === cid).reverse();

    return (
        <div className='container_Pages_App'>
            <Leftsidebar />
            <div className="container2_Pages_App">
                <ChanelDescribe cid={cid} setvideoUploadPage={setvideoUploadPage} seteditcreateChannelBtn={seteditcreateChannelBtn} />
                <Showvideogrid vids={vids} />
            </div>
        </div>
    )
}

export default Channel;