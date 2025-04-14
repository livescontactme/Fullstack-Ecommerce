import React from "react";

import {useContext, useRef, useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { IoMdHome } from "react-icons/io";
import Rating from '@mui/material/Rating';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { IoCloseSharp } from "react-icons/io5";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { fatchDataFromApi, postData } from '../utils/api';

import { useEffect } from 'react';
import { MyContext } from '../../App';
import CircularProgress from '@mui/material/CircularProgress';



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
});
function handleClick(event) {
  event.preventDefault();

}





const ProductUpload = () => {

  const [categoryVal, setcategoryVal] = useState('');
  const [isFeaturedValue, setIsFeaturedValue] = useState(false);
  const [catData, setCatData] = useState([]);
  const [procount, setProCount] = useState(0);
  const [ratingValue, setratingValue] = useState(3);
  const [productimagesArr, setproductimagesArr] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name:'',
    description:'',
    brand:'',
    price:0,
    oldPrice:0,
    images:[],
    category:'',
    CountInStock:0,
    rating:0,
    isFeatured:false
  });

  
  
  const productImages = useRef();

  const context = useContext(MyContext);

 

  useEffect(()=>{
       
       window.scrollTo(0,0);
       context.setProgress(20)
       
       fatchDataFromApi('/api/category').then((res)=>{
       
        setCatData(res);
        context.setProgress(100)
       })
      
     },[]);


  const imagesArr=[];
  const handleChangeCategory = (event) => {
    setcategoryVal(event.target.value);
    setFormFields(()=>({
      ...formFields,
      category:event.target.value
    
    }))
  };
  // const handleChangebrand = (event) => {
  //   setbrandVal(event.target.value);

  // };
  const handleChangeisFeatured = (event) => {
    setIsFeaturedValue(event.target.value);
    setFormFields(()=>({
      ...formFields,
      isFeatured:event.target.value
    
    }))
  }

  

  const addProductImage = ()=>{

    setproductimagesArr(prevArray => [...prevArray, productImages.current.value]);
    productImages.current.value = "";



    // const arr=[];

    // const imgGrid = document.querySelector('#imgGrid');
    // const imgData = `<div class='img'>
    //                   <img src="${productImages.current.value}" alt="image" class="w-100" />
    //                 </div>`;

    //                 arr[procount]= productImages.current.value
    //                 alert(procount+1); 
    //                 setProCount(procount+1);
    //                 setFormFields(()=>({
    //                   ...formFields,
    //                   images:arr
                    
    //                 }))

    //                 imgGrid.insertAdjacentHTML('beforeend', imgData);
    //                productImages.current.value = "";

                   
  
  }

    const inputChange = (e)=>{
      setFormFields(()=>({
        ...formFields,
        [e.target.name]:e.target.value
      }))
    }
      
    

  const addProduct = (e)=>{
    e.preventDefault();
    setIsLoading(true)
    if(formFields.name===""){
      context.setAlertBox({
        open:true,
        msg:'Please Fill the Product Name',
        error:true
      });
      return false;
    }

    if(formFields.description===""){
      context.setAlertBox({
        open:true,
        msg:'Please Fill the Product description',
        error:true
      });
      return false;
    }


    if(formFields.brand===""){
      context.setAlertBox({
        open:true,
        msg:'Please Fill the Product brand Name',
        error:true
      });
      return false;
    }

    if(formFields.price!==0 && formFields.price!==""){
      context.setAlertBox({
        open:true,
        msg:'Please Fill the Product price',
        error:true
      });
      return false;
    }

    if(formFields.oldPrice===""){
      context.setAlertBox({
        open:true,
        msg:'Please Fill the Product oldPrice',
        error:true
      });
      return false;
    }

    if(formFields.category===""){
      context.setAlertBox({
        open:true,
        msg:'Please select category',
        error:true
      });
      return false;
    }

    if(formFields.CountInStock===0 && formFields.CountInStock===""){
      context.setAlertBox({
        open:true,
        msg:'Please add Product Count',
        error:true
      });
      return false;
    }

    if(formFields.rating===0){
      context.setAlertBox({
        open:true,
        msg:'Please add Product Rating',
        error:true
      });
      return false;
    }


    if(formFields.isFeatured===0){
      context.setAlertBox({
        open:true,
        msg:'Please Select product is a Featured',
        error:true
      });
      return false;
    }

    if(formFields.images.length===0){
      context.setAlertBox({
        open:true,
        msg:'Please add Product Images',
        error:true
      });
      return false;
    }




    

    console.log(formFields);
    postData('/api/products/create', formFields).then((res)=>{
      setIsLoading(false);
      
      context.setAlertBox({
        open:true,
        msg:'the product is created',
        error:false
        
      })
    });

    

    setFormFields({
      name:'',
    description:'',
    brand:'',
    price:0,
    oldPrice:0,
    images:[],
    category:'',
    CountInStock:0,
    rating:0,
    isFeatured:false,
    images:[]
    });
    
  
  }

  

 

  return (
    <>
      <div className='right-content w-100'>
        <div className="card shadow border-0 w-100 flex-row p-4 mrtt productdetailsection">
          <h5 className="mb-0">Product Upload</h5>
          <div role="presentation" onClick={handleClick} className='ml-auto'>
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                component="a"
                href="/"
                label="Home"
                icon={<IoMdHome fontSize="small" />}
              />
              <StyledBreadcrumb

                component="a"

                label="Product" />
              <StyledBreadcrumb
                label="Product Upload"
                component="a"
                href="/product/details"


              />
            </Breadcrumbs>
          </div>






        </div>
        <div className='w-100 border-0'>
          <form className='form' onSubmit={addProduct}>
            <div className='row'>
              <div className='col-sm-7'>
                <div className='card p-4'>
                  <h5 className='mb-4'>Basic Information</h5>
                  <div className='form-group'>
                    <h6>Product Name</h6>
                    <input type='text' name='name' value={formFields.name} onChange={inputChange} />
                  </div>
                  <div className='form-group'>
                    <h6>Discription</h6>
                    <textarea rows={5} cols={10} placeholder='Type here...' name="description"
                    onChange={inputChange} value={formFields.description}/>
                  </div>
                  <div className='form-group'>
                    <div className='w-100'>
                      <div className='row'>
                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Category</h6>
                          <Select
                            value={categoryVal}
                            className='categoryval'
                            onChange={handleChangeCategory}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" >
                              <em>None</em>
                            </MenuItem>
                            {
                              catData?.categoryList?.length !== 0 && catData?.categoryList?.map((cat,index)=>{
                                return(
                                  <MenuItem value={cat.id} key={index}>{cat.name}</MenuItem>
                                )
                               
                              })
                            }
                           
                           
                          </Select>
                        </div>

                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Brand</h6>
                         <input type='text' name="brand" value={formFields.brand} onChange={inputChange} />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Old Price</h6>
                          <input type='text' name='oldPrice' value={formFields.oldPrice} onChange={inputChange} />
                        </div>

                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Price</h6>
                          <input type="text" name='price' value={formFields.price} onChange={inputChange} />
                        </div>
                      </div>

                      <div className='row'>
                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Is Featured</h6>
                          <Select
                            value={isFeaturedValue}
                            className='categoryval'
                            onChange={handleChangeisFeatured}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="" >
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={true}>Ture</MenuItem>
                            <MenuItem value={false}>False</MenuItem>

                          </Select>
                        </div>

                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Tax Free</h6>
                          <input type="text"  />
                        </div>
                      </div>
                     

                      <div className='row'>
                      <div className='col-md-6 selectbox mb-3'>
                          <h6>Product Stock</h6>
                          <input type='text' name='CountInStock' value={formFields.CountInStock} onChange={inputChange} />
                        </div>
                       

                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Offer Price</h6>
                          <input type="text" name='offerPrice' value={formFields.offerPrice} onChange={inputChange} />
                        </div>
                        <div className='col-md-6 selectbox mb-3'>
                          <h6>Product Image</h6>
                         <div className='position-relative inputBtn'>
                         <input type="text" name='images' onChange={inputChange} ref={productImages} style={{paddingRight:'80px'}} />
                         <Button className='btn-blue img_btn' onClick={addProductImage}>Add</Button>
                         </div>
                        </div>
                        <div className="col-md-6 selectbox mb-3">
                        <div className="form-group">
                    <h6>rating</h6>
                    <Rating
                    name="rating"
                    value={ratingValue}
                    onChange={(event, newValue) =>{
                      setratingValue(newValue);
                      setFormFields(()=>({
                        ...formFields,
                        rating:newValue
                      
                      }))
                    }}
                    />
                  </div>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className='row'>
                        <div className='col-md-12'>
                        <div>
                    <Button type='submit' className='btn-blue btn-lg'>
                      {isLoading===true ? <CircularProgress color="inherit" className='ml-3 loader' /> : 'Add Product'}
                    </Button>
                  </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-sm-5'>
                <div className='card p-4'>
                  <h5 className="mb-4">organization</h5>
                  <div className='form-group'>
                    <h6>Add Category</h6>
                    <div className='d-flex align-items-center w-100 rightfrmarea'>
                      <span className='rghtinput'><input type='text' className='w-100' /></span>
                      <span className='ml-auto'>
                        <Button>Add</Button>
                      </span>
                    </div>
                  </div>

                  <div className='form-group'>
                    <h6>Add Brand</h6>
                    <div className='d-flex align-items-center w-100 rightfrmarea'>
                      <span className='rghtinput'><input type='text' className='w-100' /></span>
                      <span className='ml-auto'>
                        <Button>Add</Button>
                      </span>
                    </div>
                  </div>

                  <div className='form-group'>
                    <h6>Add Color</h6>
                    <div className='d-flex align-items-center w-100 rightfrmarea'>
                      <span className='rghtinput'><input type='text' className='w-100' /></span>
                      <span className='ml-auto'>
                        <Button>Add</Button>
                      </span>
                    </div>
                  </div>

                  <div className='form-group'>
                    <h6>Add Size</h6>
                    <div className='d-flex align-items-center w-100 rightfrmarea'>
                      <span className='rghtinput'><input type='text' className='w-100' /></span>
                      <span className='ml-auto'>
                        <Button>Add</Button>
                      </span>
                    </div>
                  </div>

                  
                 
                </div>
              </div>

              <div className='col-md-12'>
                <div className='card p-4'>
                  {
                    productimagesArr?.length!== 0 &&
                    <h3>Product Image</h3>
                  }
                
               
                  <div className='imgGrid' id='imgGrid'>
                    {
                      productimagesArr?.map((image,index)=>{
                        return(
                          <div class='img'>
                <img src={image} alt="image" class="w-100" />
                     </div>
                        )
                      })
                    }
                
               
                  </div>
                
             
                </div>
         
        </div>
              <div className='col-md-12'>
                <div className='card p-4 mt-0'>
                  <div className='imageuploadsection'>
                    <h5>Media and Publish</h5>
                    <div className='imguploadbox'>


                      <div className='uploadbox d-flex align-ites-cener'>
                        <span className='remove'><IoCloseSharp /></span>
                        <div className='Box'>
                          <LazyLoadImage
                            alt={"image"}
                            effect="blur"
                            className="w-100"
                            src={'https://mironcoder-hotash.netlify.app/images/product/single/01.webp'}
                          />
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>


       



            </div>
      



          </form>
        </div>
      </div>
    </>
  )
}
export default ProductUpload;