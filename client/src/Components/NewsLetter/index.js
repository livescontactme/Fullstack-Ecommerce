
import coupon from "../../assets/images/coupon.png";
import { LuMail } from "react-icons/lu";
import { Button } from '@mui/material';
import { React, useState } from "react";
import { motion } from "framer-motion";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const NewsLetter = () => {

    return (
        <>
            <section className="newsLetterSection">
                <motion.div
                    initial={{ opacity: 0, fadeIn: "10" }}
                    whileInView={{ opacity: 1, fadeIn: 0 }}
                    transition={{ duration: 1.5 }}
                    className="container newsbg mt-3 mb-3 d-flex align-items-center">
                    <div className="row w-100">
                        <div className="col-md-8">
                            <p className="text-white mb-0">$20 discount for your first order</p>
                            <h3 className="text-white mb-3">Join our newsletter and get....</h3>
                            <p className="text-light">Join our email subscription<br />now to get updates on promotions
                                and coupons.</p>
                            <div className="mt-5">

                            </div>
                            <form>
                                <LuMail />
                                <input type="text" placeholder="Your Email Address..." />
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-4">
                            <img src={coupon} />
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )

}

export default NewsLetter;