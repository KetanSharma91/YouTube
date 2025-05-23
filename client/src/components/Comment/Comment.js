import React, { useState } from 'react';
import Displaycomment from './Displaycomment';
import { useSelector, useDispatch } from 'react-redux';
import { postcomment } from '../../action/comment';

const Comment = ({ videoid }) => {

    const [commenttext, setcommenttext] = useState("");
    const dispatch = useDispatch();

    const currentUser = useSelector(state => state.currentuserreducer);
    const commentlist = useSelector(state => state.commentreducer);
    // const commentlist = [
    //     {
    //         _id: 1,
    //         commentbody: "hello",
    //         usercommented: "ABC"
    //     },
    //     {
    //         _id: 1,
    //         commentbody: "hello2",
    //         usercommented: "XYZ"
    //     },
    //     {
    //         _id: 2,
    //         commentbody: "hello3",
    //         usercommented: "ABCDFV"
    //     },
    // ];

    const handleonsubmit = (e) => {
        e.preventDefault();
        if (currentUser) {
            if (!commenttext) {
                alert("please type your comment!!");
            } else {
                dispatch(postcomment({
                    videoid: videoid,
                    userid: currentUser?.result._id,
                    commentbody: commenttext,
                    usercommented: currentUser.result.name
                }))
                setcommenttext("")
            }
        }
        else {
            alert("Please login to comment")
        }
    }

    return (
        <>
            <form className='comments_sub_form_comments' onSubmit={handleonsubmit}>
                <input type="text" onChange={(e) => setcommenttext(e.target.value)} placeholder='add comment...' value={commenttext} className='comment_ibox' />
                <input type="submit" value="add" className="comment_add_btn_comments" />
            </form>
            <div className="display_comment_container">
                {/* {commentlist?.data.filter((q) => videoid === q?.videoid) */}
                {Array.isArray(commentlist?.data) && commentlist.data.filter((q) => videoid === q?.videoid)
                    .reverse()
                    .map((m) => {
                        return (<Displaycomment cid={m._id} userid={m.userid} commentbody={m.commentbody} commenton={m.commenton} usercommented={m.usercommented} />)
                    })}
            </div>
        </>
    )
}

export default Comment;