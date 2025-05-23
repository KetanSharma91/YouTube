import React from 'react';
import { FaHistory } from 'react-icons/fa';
import { MdOutlineWatchLater } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';

// import vid from "../Videogrid/vid.mp4";
import Leftsidebar from '../LeftsideBars/Leftsidebar';
import WHvideolist from '../WHL/WHvideolist';
import { useSelector } from 'react-redux';

const Library = () => {

    // const vids = [
    //         {
    //             _id: 1,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 1',
    //             uploader: "abc",
    //             description: "description of video 1"
    //         },
    //         {
    //             _id: 1,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 2',
    //             uploader: "abc 2",
    //             description: "description of video 2"
    //         },
    //         {
    //             _id: 2,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 3',
    //             uploader: "abc",
    //             description: "description of video 3"
    //         },
    //         {
    //             _id: 3,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 4',
    //             uploader: "abc",
    //             description: "description of video 4"
    //         },
    //         {
    //             _id: 4,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 2',
    //             uploader: "abc 2",
    //             description: "description of video 2"
    //         },
    //     ];

    const currentUser = useSelector(state => state.currentuserreducer);
    const likedvideolist = useSelector(state => state.likedvideoreducer);
    const watchlaterlist = useSelector(state => state.watchlaterreducer);
    const watchhistoryvideolist = useSelector(s => s.historyreducer);

    return (
        <div className='container_Pages_App'>
            <Leftsidebar />
            <div className="container2_Pages_App">
                <div className="container_libraryPage">
                    <h1 className="title_container_LibraryPage">
                        <b>
                            <FaHistory />
                        </b>
                        <b>History</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHvideolist page={"History"} currentUser={currentUser?.result?._id} videolist={watchhistoryvideolist} />
                    </div>
                </div>
                <div className="container_libraryPage">
                    <h1 className="title_container_LibraryPage">
                        <b>
                            <MdOutlineWatchLater />
                        </b>
                        <b>Watch Later</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHvideolist page={"Watch Later"} currentUser={currentUser?.result?._id} videolist={watchlaterlist} />
                    </div>
                </div>
                <div className="container_libraryPage">
                    <h1 className="title_container_LibraryPage">
                        <b>
                            <AiOutlineLike />
                        </b>
                        <b>Liked Videos</b>
                    </h1>
                    <div className="container_videoList_LibraryPage">
                        <WHvideolist page={"Liked Videos"} currentUser={currentUser?.result?._id} videolist={likedvideolist} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Library;