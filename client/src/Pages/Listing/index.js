import Sidebar from "../../Components/Sidebar";
import newbanner2 from "../../assets/images/newbanner2.jpg";
import { IoMdMenu } from "react-icons/io";
import { TbGridDots } from "react-icons/tb";
import { HiViewGrid } from "react-icons/hi";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Button } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaAngleDown } from "react-icons/fa6";
import { useState } from 'react';
import ProductItem from "../../Components/ProductItem";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Listing = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [productView, setProductView] = useState('four');

  const openDropdown = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <>
      <section className="Product_Listing_Page">
        <div className="container">
          <div className="productListing d-flex">
            <Sidebar>

            </Sidebar>
            <div className="content_right">
              <div>
                <img src={newbanner2} className="w-100" />
              </div>
              <div className="showBy mt-5 d-flex align-items-center">
                <div className="iconWrapper">
                  <Button onClick={() => setProductView('one')}><IoMdMenu /></Button>
                  <Button onClick={() => setProductView('two')}><TbGridDots /></Button>
                  <Button onClick={() => setProductView('three')}><HiViewGrid /></Button>
                  <Button onClick={() => setProductView('four')}><BsGrid3X3Gap /></Button>
                </div>

                <div className="ml-auto showByFilter">
                  <span>
                    <Button onClick={handleClick}>Short by letest<FaAngleDown /></Button>

                    <Menu
                      className="w-100 showPerPageDropdown"
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openDropdown}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>9</MenuItem>
                      <MenuItem onClick={handleClose}>18</MenuItem>
                      <MenuItem onClick={handleClose}>27</MenuItem>
                      <MenuItem onClick={handleClose}>36</MenuItem>
                      <MenuItem onClick={handleClose}>45</MenuItem>
                      <MenuItem onClick={handleClose}>54</MenuItem>
                    </Menu>


                  </span>
                </div>




                <div className="ml-auto showByFilter">
                  <span>
                    <Button onClick={handleClick}>Show 9<FaAngleDown /></Button>

                    <Menu
                      className="w-100 showPerPageDropdown"
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={openDropdown}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={handleClose}>9</MenuItem>
                      <MenuItem onClick={handleClose}>18</MenuItem>
                      <MenuItem onClick={handleClose}>27</MenuItem>
                      <MenuItem onClick={handleClose}>36</MenuItem>
                      <MenuItem onClick={handleClose}>45</MenuItem>
                      <MenuItem onClick={handleClose}>54</MenuItem>
                    </Menu>


                  </span>
                </div>
              </div>
              <div className="productListings mt-5">
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />
                <ProductItem itemView={productView} />

              </div>
              <div className="d-flex align-items-center justify-content-center mt-4">
                <Pagination count={10} color="primary" />
              </div>

            </div>

          </div>


        </div>
      </section>
    </>
  )

}

export default Listing;