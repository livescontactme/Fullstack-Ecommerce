import {React, useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import product02 from "../../assets/images/product02.jpg";
import Rating from '@mui/material/Rating';
import ProductItem from "../../Components/ProductItem";
const RelatedProduct = ()=>{
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div>
                    <h4 className="pro_hd">Related Product</h4>
                                    <Swiper navigation={true} 
                                        modules={[Navigation]} 
                                        className="mySwiper"
                                        slidesPerView={5}
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

            <div className="row mt-5">
                <div className="col-md-12">
                <div>
                    <h4 className="pro_hd">Recent Search</h4>
                                    <Swiper navigation={true} 
                                        modules={[Navigation]} 
                                        className="mySwiper"
                                        slidesPerView={5}
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
        </>
    )
}
export default RelatedProduct;