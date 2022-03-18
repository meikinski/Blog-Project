import React from 'react'
import CommentItem from './CommentItem'

const CommentsList = ({comments}) => {


    return (
    <div>
        <ul>
        {comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
        ))}
        </ul>
    </div>
    )
}

export default CommentsList