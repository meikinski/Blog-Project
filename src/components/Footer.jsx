import React from "react"
import { Link } from "react-router-dom";

const Footer = () => (
    <div className="footer">
        <div className="about">
        <p>Company</p>
        <Link to href='#'>About Us</Link>
        <Link to href='#'>Contact Us</Link>
        <Link to href='#'>Privacy Policy</Link>
        <Link to href='#'>Copyright Policy</Link>
        </div>
        <div className="social">
        <p>Follow us</p>
        <div className="icons">
        <Link to href='#'><img src="https://img.icons8.com/stickers/50/000000/facebook.png"alt=""/></Link>
        <Link to href='#'><img src="https://img.icons8.com/stickers/50/000000/instagram-new--v2.png" alt=""/></Link>
        <Link to href='#'><img src="https://img.icons8.com/stickers/50/000000/pinterest.png" alt=""/></Link>
        <Link to href='#'><img src="https://img.icons8.com/stickers/50/000000/tiktok.png" alt=""/></Link>
        </div>
        </div>
        <div className="links">
        <p>Contribute</p>
        <Link to href='#'>Write an Article</Link>
        <Link to href='#'>Improve an Article</Link>
        <Link to href='#'>Coperate with us</Link>
        <Link to href='#'>Send us your Recipe</Link>

        </div>       

      
    </div>
  );
  
  export default Footer;
  
  