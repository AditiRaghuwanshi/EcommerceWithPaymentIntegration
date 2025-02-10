import "./Newsletter.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return <div className="newsletter-section">
        
        <div className="newsletter-content">
            <span className="small-text">
                NewsLetter
            </span>
            <span className="big-text">
                Sign Up for Latest Updates and Offers!
            </span>
            <div className="form">
                <input type="text" placeholder="email address" />
                <button>Subscribe</button>
            </div>
            <div className="text">
                will be used in accordance with our Privacy Policy
            </div>

            <div className="social-icons">
                <div className="icons">
                    < FaFacebookF size={14} />

                </div>

                <div className="icons">
                    <  FaTwitter size={14} />

                </div>

                <div className="icons">
                    <  FaInstagram size={14} />

                </div>

                <div className="icons">
                    <   FaLinkedinIn size={14} />

                </div>

             
            </div>
            
        </div>
    </div>;
};

export default Newsletter;
