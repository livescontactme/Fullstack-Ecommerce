import { AiFillProduct } from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { TbRosetteDiscount } from "react-icons/tb";
import { MdPriceCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { React, useState } from "react";
import { motion } from "framer-motion";

















const Footer = () => {






    return (
        <>
            <footer>
                <div className="container mb-5">
                    <motion.div
                        initial={{ opacity: 0, zoomIn: "5" }}
                        whileInView={{ opacity: 1, zoomIn: 0 }}
                        transition={{ duration: 0.9 }}
                        className="row topInfo">
                        <div className="col d-flex align-items-center">
                            <span><AiFillProduct /></span>
                            <span className="ml-2">EveryDay Fresh Product</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><TbTruckDelivery /></span>
                            <span className="ml-2">Free delovery for order over $70</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><TbRosetteDiscount /></span>
                            <span className="ml-2">Daily Mega Discount</span>
                        </div>
                        <div className="col d-flex align-items-center">
                            <span><MdPriceCheck /></span>
                            <span className="ml-2">Best price on market</span>
                        </div>
                    </motion.div>
                    <div className="animatedSlider">


                        slidr



                    </div>



                    <div className="row mt-5 linksWrap">
                        <div className="col">
                            <h5>FRUIT & VEGETABLES</h5>
                            <ul>
                                <li>
                                    <Link to="#">Fresh Vegetables</Link>
                                </li>
                                <li >
                                    <Link to="#">Herbs & Seasonings</Link>
                                </li>
                                <li>
                                    <Link to="#">Fresh Fruits</Link>
                                </li>
                                <li>
                                    <Link to="#">Cuts & Sprouts</Link>
                                </li>
                                <li>
                                    <Link to="#">Exotic Fruits & Veggies</Link>
                                </li>
                                <li>
                                    <Link to="#">Packaged Produce</Link>
                                </li>
                                <li>
                                    <Link to="#">Party Trays</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>BREAKFAST & DAIRY</h5>
                            <ul>
                                <li>
                                    <Link to="#">Fresh Vegetables</Link>
                                </li>
                                <li>
                                    <Link to="#">Herbs & Seasonings</Link>
                                </li>
                                <li>
                                    <Link to="#">Fresh Fruits</Link>
                                </li>
                                <li>
                                    <Link to="#">Cuts & Sprouts</Link>
                                </li>
                                <li>
                                    <Link to="#">Exotic Fruits & Veggies</Link>
                                </li>
                                <li>
                                    <Link to="#">Packaged Produce</Link>
                                </li>
                                <li>
                                    <Link to="#">Party Trays</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>MEAT & SEAFOOD</h5>
                            <ul>
                                <li>
                                    <Link to="#">Fresh Vegetables</Link>
                                </li>
                                <li>
                                    <Link to="#">Herbs & Seasonings</Link>
                                </li>
                                <li>
                                    <Link to="#">Fresh Fruits</Link>
                                </li>
                                <li>
                                    <Link to="#">Cuts & Sprouts</Link>
                                </li>
                                <li>
                                    <Link to="#">Exotic Fruits & Veggies</Link>
                                </li>
                                <li>
                                    <Link to="#">Packaged Produce</Link>
                                </li>
                                <li>
                                    <Link to="#">Party Trays</Link>
                                </li>
                            </ul>
                        </div>


                        <div className="col">
                            <h5>BEVERAGES</h5>
                            <ul>
                                <li>
                                    <Link to="#">Fresh Vegetables</Link>
                                </li>
                                <li>
                                    <Link to="#">Herbs & Seasonings</Link>
                                </li>
                                <li>
                                    <Link to="#">Fresh Fruits</Link>
                                </li>
                                <li>
                                    <Link to="#">Cuts & Sprouts</Link>
                                </li>
                                <li>
                                    <Link to="#">Exotic Fruits & Veggies</Link>
                                </li>
                                <li>
                                    <Link to="#">Packaged Produce</Link>
                                </li>
                                <li>
                                    <Link to="#">Party Trays</Link>
                                </li>
                            </ul>
                        </div>


                        <div className="col">
                            <h5>BREAD & BAKERY</h5>
                            <ul>
                                <li>
                                    <Link to="#">Fresh Vegetables</Link>
                                </li>
                                <li>
                                    <Link to="#">Herbs & Seasonings</Link>
                                </li>
                                <li>
                                    <Link to="#">Fresh Fruits</Link>
                                </li>
                                <li>
                                    <Link to="#">Cuts & Sprouts</Link>
                                </li>
                                <li>
                                    <Link to="#">Exotic Fruits & Veggies</Link>
                                </li>
                                <li>
                                    <Link to="#">Packaged Produce</Link>
                                </li>
                                <li>
                                    <Link to="#">Party Trays</Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                    <div className="copyright mt-3 pt-3 pb-3 d-flex">
                        <p className="mb-0">Copyright 2025. All Right Reserves.</p>
                        <ul className="list list-inline ml-auto mb-0">
                            <li className="list-inline-item">
                                <Link to="#"><SiFacebook /></Link>
                            </li>
                            <li>
                                <Link to="#"><AiFillTwitterCircle /></Link>
                            </li>
                            <li>
                                <Link to="#"><TiSocialLinkedinCircular /></Link>
                            </li>
                        </ul>
                    </div>









                </div>
            </footer>
        </>
    )

}

export default Footer;