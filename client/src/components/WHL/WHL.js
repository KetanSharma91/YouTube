import React from 'react';

import Leftsidebar from '../LeftsideBars/Leftsidebar';
import WHvideolist from './WHvideolist';
import { useDispatch, useSelector } from 'react-redux';
import { clearhistory } from '../../action/history';

const WHL = ({ page, videolist }) => {

    const currentUser = useSelector(state => state.currentuserreducer);
    const dispatch = useDispatch();

    const handleclearhistory = () => {
        if (currentUser) {
            dispatch(clearhistory({ userid: currentUser?.result._id }))
        }
    }

    // console.log('videolist',videolist);

    return (
        <div className='container_Pages_App'>
            <Leftsidebar />
            <div className="container2_Pages_App">
                <p className="container_whl">
                    <div className="box_WHL leftside_whl">
                        <b>Your {page} Shown Here</b>
                        {
                            page === "History" &&
                            <div className="clear_History_btn" onClick={() => handleclearhistory()}>Clear History</div>
                        }
                    </div>
                    <div className="rightSide_whl">
                        <h1>{page}</h1>
                        <div className="whl_list">
                            <WHvideolist page={page} currentUser={currentUser?.result?._id} videolist={videolist} />
                        </div>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default WHL;