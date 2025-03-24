import HomeBanner from "../../Components/HomeBanner";
import sideadd from "../../assets/images/sideadd.jpg";
import sideadd2 from "../../assets/images/sideadd2.jpg";
import { Button } from '@mui/material';
import { MdArrowRightAlt } from "react-icons/md";
import {React, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import product02 from "../../assets/images/product02.jpg";
import Rating from '@mui/material/Rating';
import ProductItem from "../../Components/ProductItem";
import HomeCat from "../../Components/HomeCat";
import NewsLetter from "../../Components/NewsLetter";
import Footer from "../../Components/Footer";







const Home = () => {

   

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true
    }

    const proslider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true


    };




    return (
        <>
            <HomeBanner />


           <HomeCat />

            <section className="homeProducts mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 simage">
                            <div className="banner">
                                <img src={sideadd} className="cursor w-100" />
                            </div>
                           
                            <div className="banner mt-5">
                                <img src={sideadd2} className="cursor w-100" />
                            </div>
                        </div>
                        <div className="col-md-9 productrow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">Best Seller</h3>
                                    <p className="text-light">Learn about the history, usage and variations of Lorem Ipsum, the industry's
                                standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a
                                dictionary of over 200 Latin words an</p>
                                </div>
                                <Button className="viewallbtn ml-auto">
                                    View All &nbsp;&nbsp;<MdArrowRightAlt />
                                </Button>
                            </div>

                            <div className="product_row">
                                <div>
                                    <Swiper navigation={true} 
                                        modules={[Navigation]} 
                                        className="mySwiper"
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                    >
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        
                                        
                                       
                                         

                                    </Swiper>


                                </div>
                            </div>


                            <div className="d-flex align-items-center mt-5">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">New Product</h3>
                                    <p className="text-light">Learn about the history, usage and variations of Lorem Ipsum,
                                        the industry's standard dummy text for over 2000 years. Generate your own Lorem Ipsum with a
                                        dictionary of over 200 Latin words an</p>
                                </div>
                                <Button className="viewallbtn ml-auto">
                                    View All &nbsp;&nbsp;<MdArrowRightAlt />
                                </Button>
                            </div>

                            <div className="product_row">
                                <div>
                                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
                                        slidesPerView={3}
                                        spaceBetween={10}
                                        pagination={{
                                            clickable: true,
                                        }}
                                    >
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <ProductItem />
                                        </SwiperSlide>
                                        
                                        
                                       
                                         

                                    </Swiper>


                                </div>
                            </div>

                        </div>

                       

                        

                    </div>
                    
                </div>
                
            </section>
            <NewsLetter />
            
            
        </>
    )
}


export default Home;

