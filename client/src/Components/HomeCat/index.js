import { React, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import redapple from "../../assets/images/redapple.png";
import ProductItem from "../../Components/ProductItem";


const HomeCat = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#ecffec',
        '#feefea',
        '#fff3ff',
        '#feefea',
        '#fff3ff',
        '#ecffec',
        '#feefea',
        '#feefea',
        '#fff3ff',
        '#ecffec',
        '#feefea'

    ]);

    return (
        <>
            <section className="homeCat">
                <div className="container">
                    <div className="row">
                        <div className="top_cat">
                        <h3 className="mb-0 hd">All Category</h3>
                        </div>
                        <div className="col-md-12">
                            <div>
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper"
                                    slidesPerView={8}
                                    spaceBetween={20}
                                    slidesPerGroup={1}
                                    pagination={{
                                        clickable: true,
                                        responsive: true,
                                    }}
                                >
                                    {
                                        itemBg?.map((item, index) => {
                                            return (
                                                
                                                    <SwiperSlide key={index}>
                                                        <div className="item text-center mt-5" style={{ background: item }}>
                                                            <img src={redapple} />
                                                            <h6 className="text-center">Red Apple</h6>
                                                        </div>
                                                    </SwiperSlide>
                                                
                                            )
                                        })
                                    }






                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeCat;