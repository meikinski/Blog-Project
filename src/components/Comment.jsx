import React, {useEffect, useState} from 'react';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import CommentsList from './CommentsList';  

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [userComment, setUserComment] = useState('');
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mounted, setMounted] = useState(false);

    const addComment = (newComment) => {
        setComments([{id: counter, text: newComment}, ...comments]);
        setCounter(counter + 1);
        setUserComment('');
        handleClose(); 
    }

    useEffect(() => {
        setMounted(true);
        console.log(comments)
    }, [comments]);

    return (
    <>
        <Form className="mt-3">
            <FormControl onMouseDown={handleShow} onChange={(e) => setUserComment(e.target.value)} size="sm" type="textarea" placeholder="Add a comment ..." value={userComment}/>
        </Form>
            {show && 
            <div>
                <Button className="mx-3" variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button className="mx-3"  variant="success" type="submit" onClick={() => {
                    console.log('userComment:', userComment)

                    addComment(userComment); 
                    console.log('Array: ', comments);
                    }} >
                    Comment
                </Button>
            </div>
            }
        {mounted && <CommentsList comments={comments}/> }     
    </>
    )
};

export default Comment;