import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { deletecomment, editcomment } from '../../action/comment';

const Displaycomment = ({ cid, userid, commentbody, commenton, usercommented }) => {

    const [edit, setedit] = useState(false);
    const [cmtnody, setcmtnody] = useState("");
    const [cmtid, setcmtid] = useState("");
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentuserreducer);
    // const currentUser = {
    //     result: {
    //         email: "abc@mail.com",
    //         joinedon: "123-456-789"
    //     }
    // }

    const handleedit = (ctid, ctbdy) => {
        setedit(true);
        setcmtid(ctid);
        setcmtnody(ctbdy);
    }

    const handleonsubmit = (e) => {
        e.preventDefault();
        if (!cmtnody) {
            alert("type your comment");
        }
        else {
            dispatch(editcomment({ id: cmtid, commentbody: cmtnody }));
            setcmtnody("");
        }
        setedit(false)
    }

    const handledelete = (id) => {
        console.log(id);
        dispatch(deletecomment(id))
    }

    return (
        <>
            {edit ? (
                <>
                    <form className="comments_Sub_form_comments" onSubmit={(e) => handleonsubmit(e)}>
                        <input type="text" onChange={(e) => setcmtnody(e.target.value)} placeholder='Edit comments...' value={cmtnody} className='comment_ibox' />
                        <input type="submit" value="change" className="comment_Add_btn_comments" />
                    </form>
                </>
            ) : (
                <p className="comment_body">{commentbody}</p>
            )}
            <p className="usercommented">{" "}- {usercommented} commented {moment(commenton).fromNow()} </p>
            {currentUser?.result?._id === userid && (
                <p className="EditDel_DisplayCommendt">
                    <i onClick={() => handleedit(cid, commentbody)}>Edit</i>
                    <i onClick={() => handledelete(cid)}>Delete</i>
                </p>
            )}
        </>
    )
}

export default Displaycomment;