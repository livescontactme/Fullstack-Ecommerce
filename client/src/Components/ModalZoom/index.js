import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prothumb1 from "../../assets/images/pro_thumb1.jpg";
import prothumb2 from "../../assets/images/pro_thumb2.jpg";
import React, { useEffect, useRef } from 'react';
import product from "../../assets/images/product.jpg"
const ModelZoom = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true


    };

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();
    const settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    }

    const goto = (index)=>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return (
        <>
        <div className='productZoom position-relative'>
                            <div className='badge badge-primary'>23%</div>
                            <Slider {...settings2} className='zoomSliderBg' ref={zoomSliderBig}>

                            <div className='item no-border'>
                                            <InnerImageZoom zoomType='hover' zoomScale={1} src={product} />
                                        </div>
                                        <div className='item no-border'>
                                            <InnerImageZoom zoomType='hover' zoomScale={1} src={prothumb1} />
                                        </div>
                                        <div className='item no-border'>
                                            <InnerImageZoom zoomType='hover' zoomScale={1} src={prothumb2} />
                                        </div>
                                

                            </Slider>
                          </div>

                          <Slider {...settings} className='zoomSlider' ref={zoomSlider}>

                          <div className='item'>
                                        <img src={product} className='w-100'  onClick={()=> goto(0)}/>
                                    </div>
                                    <div className='item'>
                                        <img src={prothumb1} className='w-100'  onClick={()=> goto(1)}/>
                                    </div>
                                    <div className='item'>
                                        <img src={prothumb2} className='w-100'  onClick={()=> goto(2)}/>
                                    </div>

                          </Slider>
        </>
    )
}

export default ModelZoom;