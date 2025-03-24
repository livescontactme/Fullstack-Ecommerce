import product02 from "../../assets/images/product02.jpg";
import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import { Button } from '@mui/material';
import { IoIosHeartEmpty } from "react-icons/io";
import ProductModal from "../ProductModal";
import { useState } from "react";


const ProductItem=(props)=>{

    const [isOpenProductModal,setisOpenProductModal] = useState(false);
   
    const viewProductDetails= (id) =>{
        setisOpenProductModal(true);
    }

   const closeProductModal= ()=>{
    setisOpenProductModal(false);
   }

    

    return(
        <>
         <div className={`ProductIteam ${props.itemView}`}>
            <div className="testpro position-relative">
                                                <div className="imgwrapper img_scle">
                                                <img src={product02} className="w-75" />
                                                <span className="badge badge-primary">
                                                    28%
                                                </span>
                                                <div className="actions">
                                                    <Button onClick={() =>viewProductDetails(1)}>
                                                    <SlSizeFullscreen />
                                                    </Button>
                                                    <Button>
                                                    <IoIosHeartEmpty style={{fontSize:'20px'}} />
                                                    </Button>
                                                </div>
                                                </div>
                                               <div className="pro_info">
                                               <h4>Nikon Z50 Mirrorless Camera</h4>
                                                <span className="success d-block">In Stock</span>
                                                <Rating name="half-rating-read" defaultValue={2} precision={1} size="small" />
                                                <div className="d-flex align-items-center">
                                                    <span className="oldprice">$20.00</span>
                                                    <span className="netprice danger ml-2">$14.00</span>
                                                </div>
                                               </div>
                                               </div>
                                            </div>
                {
                    isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}/>
                }    
        </>
    )

    }





export default ProductItem;