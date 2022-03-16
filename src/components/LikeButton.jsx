import React, { useState } from "react";
import BlackHeart from '../sources/pictures/blackheart.png'
import RedHeart from '../sources/pictures/redheart.png'

export default function LikeButton() {

    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        console.log("clicked");
        setLiked(!liked);
        !liked && setCount(count + 1);
    }

    return(
       <button className="like-button" onClick={handleClick}>
           <div>
               {!liked ? 
                <img src={BlackHeart} alt=""/> : <img src={RedHeart} alt=""/>}
                <div>{count}</div>
           </div>

       </button>

    )
}