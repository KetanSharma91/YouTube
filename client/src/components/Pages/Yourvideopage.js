import React from 'react';

// import vid from "../Videogrid/vid.mp4";
import Showvideogrid from '../Videogrid/Showvideogrid';
import Leftsidebar from '../LeftsideBars/Leftsidebar';
import { useSelector } from "react-redux";

const Yourvideopage = () => {

    // const yourvideolist = [
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

    const currentUser = useSelector(state => state.currentuserreducer);
    const yourvideolist =  useSelector(s => s.videoreducer)?.data?.filter(q => q.videochanel === currentUser?.result._id).reverse();

    return (
        <div className='container_Pages_App'>
            <Leftsidebar />
            <div className="container2_Pages_App">
                <div className="container_yourvideo">
                    <h1>Your Video</h1>
                    {
                        currentUser ? (
                            <>
                                <Showvideogrid vid={yourvideolist} />
                            </>
                        ) : (
                            <>
                                <h3>Please login to see Your Uploaded Video List</h3>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Yourvideopage;