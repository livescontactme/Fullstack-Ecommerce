

import React, { useRef } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { IoMdHome } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdBrandingWatermark } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FaRegFile } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { FaCartArrowDown } from "react-icons/fa6";
import { BiSolidStar } from "react-icons/bi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import LinearProgress from '@mui/material/LinearProgress';
import UserAvtarImg from "../../components/UserAvtarImg";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { MdReply } from "react-icons/md";










const StyledBreadcrumb = styled(Chip)(({ theme }) => {

  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}



const ProductDetails = () => {
const productsliderBig = useRef();
const productsliderSml = useRef();

  var productslideroptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  var productslidersmloptions = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false
  };

const goToSlide=(index)=>{
  productsliderBig.current.slickGoTo(index);
}
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4 mrtt productdetailsection">
          <h5 className="mb-0">Product View</h5>
          <div role="presentation" onClick={handleClick} className='ml-auto'>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="#"
                label="Home"
                icon={<IoMdHome fontSize="small" />}
              />
              <StyledBreadcrumb

                component="a"
                href="#"
                label="Product" />
              <StyledBreadcrumb
                label="View"


              />
            </Breadcrumbs>
          </div>






        </div>
        <div className='card shadow border-0 w-100 flex-row p-4'>
          <div className='col-md-12'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='sliderwrapper pt-3 pb-3 pl-4 pr-4'>
                  <h6 className='mb-3 smlheading'>Product Gallary</h6>
                  <Slider {...productslideroptions} ref={productsliderBig} className='sliderbig mb-3'>
                    <div className='item'>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                    <div className='item'>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                    <div className='item'>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                    <div className='item'>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                    <div className='item'>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                    <div className='item'>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                  </Slider>
                  <Slider {...productslidersmloptions} ref={productsliderSml} className='slidersml'>
                    <div className='item' onClick={()=>goToSlide(1)}>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/02.webp" className='w-100' />
                    </div>
                    <div className='item' onClick={()=>goToSlide(2)}>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/03.webp" className='w-100' />
                    </div>
                    <div className='item'onClick={()=>goToSlide(3)}>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/04.webp" className='w-100' />
                    </div>
                    <div className='item' onClick={()=>goToSlide(4)}>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/05.webp" className='w-100' />
                    </div>
                    <div className='item' onClick={()=>goToSlide(5)}>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                    <div className='item' onClick={()=>goToSlide(6)}>
                      <img src="https://mironcoder-hotash.netlify.app/images/product/single/01.webp" className='w-100' />
                    </div>
                  </Slider>
                </div>

              </div>
              <div className='col-md-8'>
                <div className='pt-3 pb-3 pl-4 pr-4'>
                  <h6 className='mb-3 smlheading'>Product Details</h6>
                  <h4 className='detlhdng'>Formal suits for men wedding slim fit 3 piece dress business party jacket</h4>
                  <div className='productinfo mt-3'>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><MdBrandingWatermark /></span>
                        <span className='name'>Brand</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>Eatcasy</span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><BiCategoryAlt /></span>
                        <span className='name'>Category</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>Men's</span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><IoMdSettings /></span>
                        <span className='name'>Tags</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>
                          <ul className='list list-inline tags sml'>
                            <li className='list-inline-item'>
                              <span>Small</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Midium</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Large</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>XLL</span>
                            </li>


                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><IoColorPaletteOutline /></span>
                        <span className='name'>Color</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>
                          <ul className='list list-inline tags sml'>
                            <li className='list-inline-item'>
                              <span>Red</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Blue</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Green</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>White</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Orange</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Yellow</span>
                            </li>

                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><FaRegFile /></span>
                        <span className='name'>size</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>
                          <ul className='list list-inline tags sml'>
                            <li className='list-inline-item'>
                              <span>Small</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Midium</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>Large</span>
                            </li>
                            <li className='list-inline-item'>
                              <span>XLL</span>
                            </li>


                          </ul>
                        </span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><IoIosPricetags /></span>
                        <span className='name'>price</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>Eatcasy</span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><FaCartArrowDown /></span>
                        <span className='name'>stock</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>(68) Pices</span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><BiSolidStar /></span>
                        <span className='name'>review</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>(03) Reviews</span>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-sm-3 d-flex align-items-center'>
                        <span className='icon'><RiVerifiedBadgeFill /></span>
                        <span className='name'>published</span>
                      </div>
                      <div className='col-sm-9'>
                        : <span>09 December 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-100'>
          <div className='row'>
            <div className='col-md-12'>
            <h5 className='mt-4 mb-3'>Product Discription</h5>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining 
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
        PageMaker including versions of Lorem Ipsum.
        </p>
            </div>

          <div className='col-md-12'>
          <h5 className='mt-4 mb-3'>rating analytics</h5>
        <div className='ratingsection'>
          <div className='ratingrow d-flex align-items-center'>
            <span className='col1'>5 Star</span>
            <div className='col2'>
            <div className='progress'>
              <div className='progress-bar' style={{width:'70%'}}>

              </div>
            </div>
            </div>
            <span className='col3'>(23) Ratings</span>
          </div>
          <div className='ratingrow d-flex align-items-center'>
            <span className='col1'>4 Star</span>
            <div className='col2'>
            <div className='progress'>
              <div className='progress-bar' style={{width:'50%'}}>
                
              </div>
            </div>
            </div>
            <span className='col3'>(20) Ratings</span>
          </div>
          <div className='ratingrow d-flex align-items-center'>
            <span className='col1'>3 Star</span>
            <div className='col2'>
            <div className='progress'>
              <div className='progress-bar' style={{width:'30%'}}>
                
              </div>
            </div>
            </div>
            <span className='col3'>(16) Ratings</span>
          </div>

          <div className='ratingrow d-flex align-items-center'>
            <span className='col1'>2 Star</span>
            <div className='col2'>
            <div className='progress'>
              <div className='progress-bar' style={{width:'12%'}}>
                
              </div>
            </div>
            </div>
            <span className='col3'>(2) Ratings</span>
          </div>
          <div className='ratingrow d-flex align-items-center'>
            <span className='col1'>1 Star</span>
            <div className='col2'>
            <div className='progress'>
              <div className='progress-bar' style={{width:'2%'}}>
                
              </div>
            </div>
            </div>
            <span className='col3'>(2) Ratings</span>
          </div>
        </div>
          </div>
          
          <div className='col-md-12'>
          <h5 className='mt-4 mb-4'>Customer Reviews</h5>
        <div className='reviewsection'>
          <div className='reviewsrow'>
            <div className='row'>
             <div className='col-md-12 mt-3 mb-3'>
              <div className='w-100'>
                <div className='row'>
                <div className='col-md-5 d-flex align-items-center '>
                <div className='userinfo'>
                  <UserAvtarImg img="https://mironcoder-hotash.netlify.app/images/avatar/02.webp"/>
                </div>
                <div className='info pl-3'>
                  <h5>Miron Mahmud</h5>
                  <span>25 minutes ago!</span>
                </div>
                </div>
              <div className='col-md-3'>
              &nbsp;
              </div>
              <div className='col-md-4 userallinfo ml-auto'>
                <Button><MdReply /> &nbsp;Reply</Button>
              </div>
                </div>
              </div>
             </div>
             <div className='row'>
            <div className='col-md-12'>
            <div className='w-100'>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
               </p>
              </div>
            </div>
             </div>
              
            </div>
          </div>

          <div className='reviewsrow reply mt-3 mb-3'>
            <div className='row'>
             <div className='col-md-12 mt-3 mb-3'>
              <div className='w-100'>
                <div className='row'>
                <div className='col-md-5 d-flex align-items-center '>
                <div className='userinfo'>
                  <UserAvtarImg img="https://mironcoder-hotash.netlify.app/images/avatar/04.webp"/>
                </div>
                <div className='info pl-3'>
                  <h5>Miron Mahmud</h5>
                  <span>25 minutes ago!</span>
                </div>
                </div>
              <div className='col-md-3'>
              &nbsp;
              </div>
              <div className='col-md-4 userallinfo ml-auto'>
                <Button><MdReply /> &nbsp;Reply</Button>
              </div>
                </div>
              </div>
             </div>
             <div className='row'>
            <div className='col-md-12'>
            <div className='w-100'>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
               </p>
              </div>
            </div>
             </div>
              
            </div>
          </div>

          <div className='reviewsrow'>
            <div className='row'>
             <div className='col-md-12 mt-3 mb-3'>
              <div className='w-100'>
                <div className='row'>
                <div className='col-md-5 d-flex align-items-center '>
                <div className='userinfo'>
                  <UserAvtarImg img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                </div>
                <div className='info pl-3'>
                  <h5>Miron Mahmud</h5>
                  <span>25 minutes ago!</span>
                </div>
                </div>
              <div className='col-md-3'>
              &nbsp;
              </div>
              <div className='col-md-4 userallinfo ml-auto'>
                <Button><MdReply /> &nbsp;Reply</Button>
              </div>
                </div>
              </div>
             </div>
             <div className='row'>
            <div className='col-md-12'>
            <div className='w-100'>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
               </p>
              </div>
            </div>
             </div>
              
            </div>
          </div>

          <div className='reviewsrow reply mt-3 mb-3'>
            <div className='row'>
             <div className='col-md-12 mt-3 mb-3'>
              <div className='w-100'>
                <div className='row'>
                <div className='col-md-5 d-flex align-items-center '>
                <div className='userinfo'>
                  <UserAvtarImg img="https://mironcoder-hotash.netlify.app/images/avatar/02.webp"/>
                </div>
                <div className='info pl-3'>
                  <h5>Miron Mahmud2</h5>
                  <span>25 minutes ago!</span>
                </div>
                </div>
              <div className='col-md-3'>
              &nbsp;
              </div>
              <div className='col-md-4 userallinfo ml-auto'>
                <Button><MdReply /> &nbsp;Reply</Button>
              </div>
                </div>
              </div>
             </div>
             <div className='row'>
            <div className='col-md-12'>
            <div className='w-100'>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
               </p>
              </div>
            </div>
             </div>
              
            </div>
          </div>

          <div className='reviewsrow'>
            <div className='row'>
             <div className='col-md-12 mt-3 mb-3'>
              <div className='w-100'>
                <div className='row'>
                <div className='col-md-5 d-flex align-items-center '>
                <div className='userinfo'>
                  <UserAvtarImg img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                </div>
                <div className='info pl-3'>
                  <h5>Miron Mahmud</h5>
                  <span>25 minutes ago!</span>
                </div>
                </div>
              <div className='col-md-3'>
              &nbsp;
              </div>
              <div className='col-md-4 userallinfo ml-auto'>
                <Button><MdReply /> &nbsp;Reply</Button>
              </div>
                </div>
              </div>
             </div>
             <div className='row'>
            <div className='col-md-12'>
            <div className='w-100'>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
               </p>
              </div>
            </div>
             </div>
              
            </div>
          </div>

          <div className='reviewsrow reply mt-3 mb-3'>
            <div className='row'>
             <div className='col-md-12 mt-3 mb-3'>
              <div className='w-100'>
                <div className='row'>
                <div className='col-md-5 d-flex align-items-center '>
                <div className='userinfo'>
                  <UserAvtarImg img="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"/>
                </div>
                <div className='info pl-3'>
                  <h5>Miron Mahmud</h5>
                  <span>25 minutes ago!</span>
                </div>
                </div>
              <div className='col-md-3'>
              &nbsp;
              </div>
              <div className='col-md-4 userallinfo ml-auto'>
                <Button><MdReply /> &nbsp;Reply</Button>
              </div>
                </div>
              </div>
             </div>
             <div className='row'>
            <div className='col-md-12'>
            <div className='w-100'>
              <Rating name="half-rating" defaultValue={4} precision={0.5} />
              
               <p>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               when an unknown printer took a galley of type and 
               scrambled it to make a type specimen book.
               </p>
              </div>
            </div>
             </div>
              
            </div>
          </div>
        </div>
        
          </div>

          <div className='col-md-12 mt-3 mb-3'>
            <h5>Review Reply Form</h5>
            <div className='formsection w-100 mt-4'>
              <form>
                <textarea placeholder='write here...'/>
                <Button>Submit</Button>
              </form>
            </div>

          </div>

          

          </div>
        </div>









       <div className="p-4">
       
        <br/>
        
       

       </div>
      </div>
    </>
  )
};
export default ProductDetails;