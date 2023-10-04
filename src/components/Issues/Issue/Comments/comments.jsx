import React, { useState } from "react";
import { addComment, deleteComment } from "../../../../Store/issueSlice";
import { useDispatch } from "react-redux";
import { formatTimestamp } from "../../../../main";

function Comments({ issue, timeStamp }) {

    const dispatch = useDispatch();

    const comments = issue.comments || [];

    const [comment, setComment] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;
        setComment(value);
    };

    const handleSaveComment = () => {   

        const newComment = {
            userName: 'John Test',
            comment: comment,
            timeStamp: formatTimestamp(timeStamp),
        };
        console.log(newComment);
    
        dispatch(addComment({ issueId: issue.id, comments: newComment }));

        setComment('');
    };

    const handleDeleteComment = (index) => {
        dispatch(deleteComment({ issueId: issue.id, commentIndex: index }));
    }


    return(
        <div className="issue-comments-container">
            <div className="issue-comments-title">Comments</div>
            <div className="issue-comments-input-container">
                <input type="text" className="issue-comments-input" value={comment} placeholder="Enter comment..." onChange={handleInputChange}/>
                <button className="issue-comments-button" onClick={handleSaveComment}>+</button>
            </div>
            <div className="issue-comments-content">
                {comments.map((comment, index) => (
                    <div className='issue-comment-container' key={index} >
                        <div className="issue-comments-user-container">
                            <div className="issue-comments-user">{comment.userName}</div>            
                        </div>
                        <div className="issue-comment-container">
                            <div className="issue-comment">{comment.comment}</div>
                        </div>
                        <div className="issue-comments-date-container">
                            <div className="issue-comments-date">{comment.timeStamp}</div>
                        </div>
                        <div className="issue-comments-buttons-container">
                            <div className="issue-comments-button-container">
                                <button className="delete-button" onClick={() => handleDeleteComment(index)}>delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
      </div>
    )
}

export default Comments;