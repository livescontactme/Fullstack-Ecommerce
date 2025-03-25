import React, { useContext, useRef, useState } from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { IoMdHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../App';






import Button from '@mui/material/Button';
import { fatchDataFromApi, postData } from '../utils/api';
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

 



const AddCategory = ()=>{

  const [isLoading, setIsLoading] = useState(false);
  
  

  const [formFields,setFormFields] = useState({
    name:'',
    images:[],
    color:''
  })

  const changeInput = (e) =>{
    setFormFields(()=>(
      {
        ...formFields,
        [e.target.name]:e.target.value
      }
    ))
  }

 

 

  const addImgUrl = (e)=>{
    const arr = [];
    arr.push(e.target.value);
    setFormFields(()=>(
      {
        ...formFields,
        [e.target.name]:arr
      }
    ))
  }

  const history = useNavigate();
  const context = useContext(MyContext);
 

  const addCategory = (e)=>{
    e.preventDefault();
    if(formFields.name!=="" && formFields.images.length!==0 && formFields.color!==""){
      setIsLoading(true);
      postData('/api/category/create', formFields).then(res=>{
        setIsLoading(false);
        history('/category')
        //console.log(formFields);
      })
    }

      else{
        context.setAlertBox({
          open:true,
          color:'Success',
          msg:'Please Fill all the details'
        })
        
      }
   
   
   
  }
    

   

   
   
   

    
    
   
    return(
        <>
        <div className='right-content w-100'>
        <div className="card shadow border-0 w-100 flex-row p-4 mrtt productdetailsection">
          <h5 className="mb-0">Add Category</h5>
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
                
                label="category" />
              <StyledBreadcrumb
                label="add category"
                component="a"
                href="/product/details"


              />
            </Breadcrumbs>
          </div>

       




        </div>
        <div className='w-100 border-0'>
            <form className='form' onSubmit={addCategory}>
        <div className='row'>
            <div className='col-sm-12 addcategory'>
            <div className='card p-4'>
                <h5 className='mb-4'>Basic Information</h5>
                <div className='form-group'>
                    <h6>Category Name</h6>
                    <input type='text' name='name' onChange={changeInput} />
                </div>
                <div className='form-group'>
                    <h6>Image url</h6>
                    <input type='text' name='images' onChange={addImgUrl} />
                </div>
                <div className='form-group'>
                    <h6>Color</h6>
                    <input type='text' name='color' onChange={changeInput} />
                </div>
                <Button type="submit">
                  {isLoading===true ? <CircularProgress color="inherit" className='ml-3 loader' /> : 'Add Category'}
                </Button>
               
            </div>
            </div>
           
           
        </div>
        </form>
        </div>
        </div>





      



        </>
    )
}
export default AddCategory;