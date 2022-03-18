import React from 'react'


const CommentItem = ({comment}) => {
    return (
    <>
        <p className="my-3 bg-light text-dark border ">{comment.text}</p>
    </>
    )
}

export default CommentItem