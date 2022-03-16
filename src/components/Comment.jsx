import React, {useState} from 'react';
import { FormGroup } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Comment = () => {
    const [comments, setComments] = useState([]);
    const [userComment, setUserComment] = useState('');
    const [counter, setCounter] = useState(1);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addComment = (text) => {
        setComments([{id: counter, comment: text}, ...comments]);
        setCounter(counter + 1);
        handleClose(); 
    }

    return (
    <>
        <Form >
            <FormControl onMouseDown={handleShow} onChange={(e) => setUserComment(e.target.value)} size="sm" type="textarea" placeholder="Add a comment ..." value={userComment}/>
        </Form>
            {show && 
            <div>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="success" type="submit" onClick={() => {addComment(userComment); setUserComment('')}} >
                    Comment
                </Button>
            </div>
            }
        <div>
            
           {comments.length > 0 && comments.map(item =>{
                <p key={item.id}>{item.comment}</p>
            })}
        </div>
    </>
    )
};

export default Comment;