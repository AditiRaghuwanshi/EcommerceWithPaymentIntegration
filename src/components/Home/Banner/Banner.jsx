import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
const Banner = () => {
    return (
    <div className="hero-banner">
        <div className="content">
            <div className="text-content">
               <h1> <span>PRO</span>DUCTS</h1>
               
               <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Quod, delectus.
               </p>

               <div className="ctas">
                <h4>Attractive Deals</h4>
                
               </div>

               <div className="cta">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-ctav2">Shop Now</div>
                    </div>
                </div>
               

                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    )
        
};

export default Banner;


// import React from "react";

// import "./Banner.scss";
// import BannerImg from "../../../assets/banner-img.png";

// const Banner = () => {
//     return (
//         <div className="hero-banner">
//             <div className="content">
//                 <div className="text-content">
//                     <h1>SALES</h1>
//                     <p>
//                         Convallis interdum purus adipiscing dis parturient
//                         posuere ac a quam a eleifend montes parturient posuere
//                         curae tempor
//                     </p>
//                     <div className="ctas">
//                         <div className="banner-cta">Read More</div>
//                         <div className="banner-cta v2">Shop Now</div>
//                     </div>
//                 </div>
//                 <img className="banner-img" src={BannerImg} />
//             </div>
//         </div>
//     );
// };

// export default Banner;
