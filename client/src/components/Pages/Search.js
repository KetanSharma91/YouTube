import React from 'react';
import Leftsidebar from '../LeftsideBars/Leftsidebar';
import Showvideogrid from '../Videogrid/Showvideogrid';
// import vid from '../Videogrid/vid.mp4';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Search = () => {
    const {searchquery} = useParams();

    const vids = useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchquery?.toUpperCase()));
        
    // const vids = [
    //         {
    //             _id: 1,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 2',
    //             uploader: "abc",
    //             description: "description of video 1"
    //         },
    //         {
    //             _id: 2,
    //             video_src: vid,
    //             chanel: 'wertyuiiop',
    //             title: 'video 2',
    //             uploader: "abc 2",
    //             description: "description of video 2"
    //         },
    //     ];

    return (
        <div className="container_Pages_App">
            <Leftsidebar />
            <div className="container2_Pages_App">
                <Showvideogrid vid={vids} />
            </div>
        </div>
    )
}

export default Search;