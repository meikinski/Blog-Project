import React, { useState } from 'react'
import LikeButton from './LikeButton';
import {
    FacebookShareButton,
    PinterestShareButton,
    WhatsappShareButton

} from 'react-share'
import {
    FacebookIcon,
    PinterestIcon,
    WhatsappIcon
} from 'react-share'

export default function MediaButton() {

    let url=window.location.href;
    console.log(url);
return(
    <div className='socialMediaWrapper'>
        <div className='socialMediaNetwork'>
            <FacebookShareButton
                className='btnSocialMedia'
                url={url}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
        </div>
        <div className='socialMediaNetwork'>
            <WhatsappShareButton
                className='btnSocialMedia'
                url={url}>
                <WhatsappIcon size={32} round />
            </WhatsappShareButton>
        </div>
        <div className='socialMediaNetwork'>
            <PinterestShareButton
                className='btnSocialMedia'
                url={url}>
                <PinterestIcon size={32} round />
            </PinterestShareButton>
            
            
        </div>
        <div className='socialMediaNetwork'>
            <LikeButton />
            
            
        </div>
        
    </div>
)
}