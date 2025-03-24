import Button from '@mui/material/Button';
import QuantityBox from '../QuantityBox';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const ModalProductDetail = () => {
const [activeSize, setActiveSize] = useState(null);
const isActiveSize = (index)=>{
        setActiveSize(index);
}
    return (
        <>

            <div className='right_column'>
                <div className='d-flex align-items-center info'>
                    <span className='oldprice'>
                        $9.36
                    </span>
                    <span className='newprice'>$16.45</span>

                </div>
                <div className='mt-1 mb-2'>
                    <span className='badge bg-success'>
                        IN STOCK
                    </span>
                </div>
                <div className='pro_info'>
                    <p>Vivamus adipiscing nisl ut dolor dignissim semper.
                        Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>
                </div>
                <div className='productsize d-flex align-items-center'>
                    <span>Size/Weight:</span>
                    <ul>
                        <li className='list-inline-item'>
                            <a className={`tag ${activeSize === 0 ? 'active' : ''}`} onClick={()=> isActiveSize(0)}>50g</a>
                        </li>
                        <li className='list-inline-item'>
                            <a className={`tag ${activeSize === 1 ? 'active' : ''}`} onClick={()=> isActiveSize(1)}>200g</a>
                        </li>
                        <li className='list-inline-item'>
                            <a className={`tag ${activeSize === 2 ? 'active' : ''}`} onClick={()=> isActiveSize(2)}>300g</a>
                        </li>
                        <li className='list-inline-item'>
                            <a className={`tag ${activeSize === 3 ? 'active' : ''}`} onClick={()=> isActiveSize(3)}>500g</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center mt-3'>
                    <QuantityBox />
                    <Button className='btn-blue btn-lg btn-big btn-round ml-4'>Add to Cart</Button>
                    <Tooltip title="Add to Wishlist" placement='top-start'>
                    <Button className='circle_btn ml-2'><FaRegHeart /></Button>
    </Tooltip>
    <Tooltip title="Compare" placement='top-start'>
    <Button className='circle_btn ml-2'><MdCompareArrows /></Button>
    </Tooltip>
                   
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
        </>
    )
}
export default ModalProductDetail;