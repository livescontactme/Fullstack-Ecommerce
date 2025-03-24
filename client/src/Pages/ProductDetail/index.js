import ModelZoom from "../../Components/ModalZoom";
import ModalProductDetail from "../../Components/ModalProductDetail";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbMilk } from "react-icons/tb";
import { CiDollar } from "react-icons/ci";
import Rating from '@mui/material/Rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCircleUser } from "react-icons/fa6";
import RelatedProduct from "../../Components/RelatedProduct";
const ProductDetail = () => {
    return (
        <>
            <section className="section productDetail d-flex align-items-center">
                <div className="container">
                    <h4 className='hd'>All Natural Italian-Style Chicken Meatballs</h4>
                    <div className='d-flex align-items-center mr-4 mb-5'>
                        <span>Brands:</span>
                        <span className='ml-2'><b>whels</b></span>
                        <span className='r_rtng'>
                            <Rating name="half-rating-read" defaultValue={4}
                                precision={0.5} readOnly size='small' />
                        </span>
                        <span className='ml-2'>2 Rating</span>
                    </div>

                    <div className='row'>
                        <div className='col-md-4'>
                            <ModelZoom />
                        </div>
                        <div className='col-md-4 ml-auto'>
                            <ModalProductDetail />
                        </div>
                        <div className="col-md-3 covid_info">
                            <h2 className="hd_bg">Covid-19 Info: We keep delivering.</h2>
                            <div className="info_bg d-flex align-items-center">

                                <ul>
                                    <li>
                                        <div className="icon">
                                            <LiaShippingFastSolid />
                                        </div>

                                        <div className="message">
                                            Free Shipping apply to all orders over $100
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <TbMilk />
                                        </div>

                                        <div className="message">Guranteed 100% Organic from natural farmas
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <CiDollar />
                                        </div>

                                        <div className="message">
                                            1 Day Returns if you change your mind
                                        </div>
                                    </li>
                                    <li>
                                        <div className="icon">
                                            <LiaShippingFastSolid />
                                        </div>

                                        <div className="message">
                                            Free Shipping apply to all orders over $100
                                        </div>
                                    </li>
                                </ul>



                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 tabsection">
                            <div>
                                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                                    <Tab eventKey="home" title="Description">
                                        <div className="tab_content">
                                            <p>Quisque varius diam vel metus mattis, id aliquam diam rhoncus. Proin vitae magna in dui finibus malesuada et at nulla. Morbi elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce fermentum iaculis nibh, at sodales leo maximus a. Nullam ultricies sodales nunc, in pellentesque lorem mattis quis. Cras imperdiet est in nunc tristique lacinia. Nullam aliquam mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet vel ornare vel, dignissim a tortor.</p>
                                            <p>Morbi ut sapien vitae odio accumsan gravida. Morbi vitae erat auctor, eleifend nunc a, lobortis neque. Praesent aliquam dignissim viverra. Maecenas lacus odio, feugiat eu nunc sit amet, maximus sagittis dolor. Vivamus nisi sapien, elementum sit amet eros sit amet, ultricies cursus ipsum. Sed consequat luctus ligula. Curabitur laoreet rhoncus blandit. Aenean vel diam ut arcu pharetra dignissim ut sed leo. Vivamus faucibus, ipsum in vestibulum vulputate, lorem orci convallis quam, sit amet consequat nulla felis pharetra lacus. Duis semper erat mauris, sed egestas purus commodo vel</p>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="profile" title="additional information">
                                        <div className="tab_content">
                                        <table class="woocommerce-product-attributes shop_attributes" aria-label="Product Details">
			<tbody><tr class="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_brands">
			<th class="woocommerce-product-attributes-item__label" scope="row">Brands</th>
			<td class="woocommerce-product-attributes-item__value"><p>Welch's</p>
</td>
		</tr>
	</tbody></table>
                                        </div>
                                    </Tab>
                                    <Tab eventKey="contacts" title="reviews">
                                        <div className="tab_content">
                                            <div className="comments">
                                                <h2 className="commenttitle">1 review for All Natural Italian-Style Chicken Meatballs</h2>
                                                <ul>
                                                    <li>
                                                        <div><FaCircleUser /></div>
                                                        <div>
                                                        <div className="rating">
                                                        <span>
                                <Rating name="half-rating-read" defaultValue={4}
                                    precision={1}  size='small' />
                            </span>
                           
                                                        </div>
                                                        <div>
                                                            <span><strong>admin -</strong> 23/01/2025</span>
                                                            <p>Sed perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                                                        </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <RelatedProduct />
            </section>
        </>
    )
}
export default ProductDetail;
