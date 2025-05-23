import React from 'react';
import { FaEdit, FaUpload } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const ChanelDescribe = ({ cid, setvideoUploadPage, seteditcreateChannelBtn }) => {

    // const channel = [
    //     {
    //         _id: 1,
    //         name: 'ketanshs',
    //         email: '11@mail.com 2',
    //         joindon: "111111",
    //         desc: "description of video 1"
    //     }
    // ]

    const channel = useSelector(state => state.channelreducer);
    const currentchannel = channel.filter((c) => c._id === cid)[0];

    const currentUser = useSelector(state => state.currentuserreducer);

    return <div className='container3_chanel'>
        <div className="chanel_logo_chanel">
            <b>{currentchannel?.name.charAt(0).toUpperCase()}</b>
        </div>
        <div className="description_chanel">
            <b>{currentchannel?.name}</b>
            <p>{currentchannel?.desc}</p>
        </div>
        {currentUser?.result._id === currentchannel?._id && (
            <>
                <p className="editbtn_chanel" onClick={() => seteditcreateChannelBtn(true)}>
                    <FaEdit />
                    <b>Edit Channel</b>
                </p>
                <p className="uploadbtn_chanel" onClick={() => setvideoUploadPage(true)}>
                    <FaUpload />
                    <b>Upload Video</b>
                </p>
            </>
        )}
    </div>;
}

export default ChanelDescribe;