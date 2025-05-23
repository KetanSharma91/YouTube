import React from 'react';
import Showvideolist from '../Videogrid/Showvideolist';

const WHvideolist = ({ page, currentUser, videolist }) => {
    return (
        <>
            {currentUser ? (
                <>
                    {
                        videolist?.data.filter(q => q?.viewer === currentUser).reverse().map(m => {
                            // console.log('m', m);
                            return (
                                // <>
                                <Showvideolist videoid={m?.videoid} key={m?._id} />
                                // {/* </> */}
                            )
                        })
                    }
                </>
            ) : (
                <>
                    <h2 style={{ color: "white" }}>Please login to Watch your {page}</h2>
                </>
            )}
        </>
    )
}

export default WHvideolist;