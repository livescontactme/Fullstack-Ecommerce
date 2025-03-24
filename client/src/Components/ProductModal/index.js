import React, { useEffect, useRef } from 'react';
import Button from '@mui/material/Button';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoClose } from "react-icons/io5";
import Rating from '@mui/material/Rating';




import QuantityBox from "../QuantityBox";
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import ModalZoom from '../ModalZoom';










const ProductModal = (props) => {
    
    

   

    return (
        <>
            <Dialog open={true} onclose={() => props.closeProductModal()} className='productmodal'>
                <div className="iteam testpro position-relative no-border">
                    <div className="imgwrapper">
                        <h4 className='mb-2 font-weight-bold'>Nikon Z50 Mirrorless Camera</h4>
                        <div className='d-flex align-items-center'>
                            <div className='d-flex align-items-center mr-4'>
                                <span>Brands:</span>
                                <span className='ml-2'><b>whels</b></span>
                            </div>
                            <span>
                                <Rating name="half-rating-read" defaultValue={4}
                                    precision={0.5} readOnly size='small' />
                            </span>
                        </div>
                        <hr />
                        <div className='row mt2 productDetailModal'>
                            <div className='col-md-5'>
                                
                                <ModalZoom />
                                

                         

                               

                            </div>
                            <div className='col-md-7 right_column'>
                                    <div className='d-flex align-items-center info'>
                                        <span className='oldprice'>
                                            $9.36
                                        </span>
                                        <span className='newprice'>$16.45</span>
                                        <span className='badge bg-success'>
                                        IN STOCK
                                    </span>
                                    </div>
                                    <div className='pro_info'>
                                        <p>Vivamus adipiscing nisl ut dolor dignissim semper.
                                            Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <QuantityBox />
                                        <Button className='btn-blue btn-lg btn-big btn-round ml-4'>Add to Cart</Button>
                                    </div>

                                    <div className='d-flex align-items-center mt-5 actionss'>
                                        <Button>
                                          <FaRegHeart />&nbsp;  Add to Wishlist
                                        </Button>
                                        <Button>
                                           <MdCompareArrows />&nbsp; Compare
                                        </Button>
                                    </div>
                                    

                            </div>
                        </div>

                    </div>


                </div>
                <Button className='close_' onClick={() => props.closeProductModal()}><IoClose /></Button>
            </Dialog>

        </>
    )
}
export default ProductModal;
