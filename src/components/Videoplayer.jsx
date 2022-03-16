import React from 'react'
import ReactPlayer from "react-player"
import Comment from "./Comment"



export default function Videoplayer() {
    return(
        <>
        <div className='header-videoplayer'>
        <h2>COOKING CLASS</h2>
        </div>
        
        <div className='video-container'>
        <div className='intro'>
            <p>With our Cooking Classes we present you our interpretation of a modern cooking school! 
                Our chef from "Pro Home Cooks" comes up with a new video for you every week. From "How to prepare the best Terriaky Chicken"
                to "What is that air fryer hype all about?" you will be provided with everything you need to know to improve your cooking skills and impress your family and friends with great knowledge.
            </p>
        </div>
        
        <div className='video'>
        <div className='video-title'><h5>What is that Air Fryer hype all about?</h5></div>
        <ReactPlayer
        url="https://www.youtube.com/watch?v=xBndXDH7gp8"
        controls="true"
      />
      </div>
      <div className='video'>
      <div className='video-title'><h5>Chicken Parmesan.. What else can I say?</h5></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9BP2-3uu9qw"
        controls="true"
      />
      </div>
      <div className='video'>
      <div className='video-title'><h5>A food prep guide for beginners</h5></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ghsw19qAG1g"
        controls="true"
      />
      </div>
      <div className='video'>
      <div className='video-title'><h5>Let's make some homemade snacks</h5></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=G5NEwx6KqPM"
        controls="true"
        
      />
      </div>
      <div className='video'>
      <div className='video-title'><h5>My first Onepot EVER</h5></div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=j7Og4vp6U24"
        controls="true"
      />
      </div>
      </div>
        
    </>
    )
}
