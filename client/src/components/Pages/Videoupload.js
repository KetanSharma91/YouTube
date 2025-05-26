import React, { useState } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useDispatch, useSelector } from 'react-redux';
import { uploadvideo } from '../../action/video';

const Videoupload = ({ setvideoUploadPage }) => {

    const [title, settitle] = useState("");
    const [videofile, setvideofile] = useState("");
    const [progress, setprogress] = useState(0);
    const dispatch = useDispatch();

    const handlesetvideofile = (e) => {
        setvideofile(e.target.files[0]);
    }

    const currentUser = useSelector(state => state.currentuserreducer);

    const fileoption = {
        onUploadProgress: (ProgressEvent) => {
            const { loaded, total } = ProgressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setprogress(percentage);
            if (percentage === 100) {
                setTimeout(function () { }, 3000);
                setvideoUploadPage(false);
            }
        }
    };

    const uploadvideofile = () => {
        if (!title) {
            alert('Please enter the video title!!');
        }
        else if (!videofile) {
            alert("Please attach a video file");
        }
        else if (videofile.size > 100000000) {
            alert("Please attach video file less than 1kb");
        }
        else {
            const filedata = new FormData();
            filedata.append("file", videofile);
            filedata.append("title", title);
            filedata.append("chanel", currentUser?.result?._id);
            filedata.append("uploader", currentUser?.result.name);
            console.log(videofile);
            dispatch(uploadvideo({ filedata: filedata, fileoption: fileoption }));
        }
    }

    return (
        <div className='container_VidUpload'>
            <input type="submit" name='text' value={"X"} onClick={() => setvideoUploadPage(false)} className="ibtn_x" />
            <div className="container2_VidUpload">
                <div className="ibox_div_vidupload">
                    <input type="text" maxLength={30} placeholder='Enter title of your video' className="ibox_vidupload" onChange={(e) => {settitle(e.target.value)}} />
                    <label htmlFor='file' className='ibox_cidupload btn_vidUpload'>
                        <input type="file" name='file' style={{ fontSize: "1rem" }} onChange={(e) => { handlesetvideofile(e) }} className="ibox_vidupload" />
                    </label>
                </div>
                <div className="ibox_div_vidupload">
                    <input type="submit" onClick={() => uploadvideofile()} className="ibox_vidupload btn_vidUpload" />
                    <div className="loader ibox_div_vidupload">
                        <CircularProgressbar
                            value={progress}
                            text={`${progress}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                strokeLinecap: "butt",
                                textSize: "20px",
                                pathTransitionDuration: 0.5,
                                pathColor: `rgba(255,255,255,)`,
                                textColor: "#f88",
                                trailColor: "#adff2f",
                                backgroundColor: "#3e98c7"
                            })}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Videoupload;
