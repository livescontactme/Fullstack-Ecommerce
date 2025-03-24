
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import newbanner from "../../assets/images/newbanner.jpg";
import newbanner2 from "../../assets/images/newbanner2.jpg";
import newbanner3 from "../../assets/images/newbanner3.jpg";
import home01 from "../../assets/images/home01.jpg";
import home02 from "../../assets/images/home02.jpg";
import home03 from "../../assets/images/home03.jpg";


const HomeBanner = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true


    };





    return (
        <>
            <div className="homeBannerSection secsep">

                <Slider {...settings}>
                    <div className="iteam">
                        <img src={home01} className="w-100" />
                    </div>
                    <div className="iteam">
                        <img src={home02} className="w-100" />
                    </div>
                    <div className="iteam">
                        <img src={home03} className="w-100" />
                    </div>
                    
                </Slider>
            </div>
        </>
    )
}

export default HomeBanner;