
import Button from '@mui/material/Button';
import { useContext, useEffect, useState} from "react";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { editData, fatchDataFromApi } from '../utils/api';
import { data, Link } from 'react-router-dom';


import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import CircularProgress from '@mui/material/CircularProgress';







export const options = {
  'backgroundColor': 'transparent',
  'chartArea': {'width': '85%%', 'height': '80%'},
  title: "My first e-commerce pject",
  pieHole: 0.4,
  is3D: true,
};
const Category = () => {

  const [catData, setCatData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editFields, setEditFields] = useState({})
  const [editId, setEditId] = useState(null);
  const [formFields,setFormFields] = useState({
      name:'',
      images:[],
      color:''
    })
  const [isLoading, setIsLoading] = useState(false);

    
    const context = useContext(MyContext);

    useEffect(()=>{
      context.setIsHideSidebarAndHeader(false);
      window.scrollTo(0,0);
      fatchDataFromApi('/api/category').then((res)=>{
        setCatData(res);
        console.log(res);
      })
    },[]);
    
    const handleChange = (event, value) =>{
      fatchDataFromApi(`/api/category?page=${value}`).then((res) =>{
        setCatData(res);
      
      })
    };

    const handleClose = () => {
      setOpen(false);
    };


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



    const editCategory = (id)=>{
      setFormFields({
        name:'',
        images:'',
        color:''
      });
      setOpen(true);
      setEditId(id);
      fatchDataFromApi(`/api/category/${id}`).then((res) =>{
        setFormFields({
          name:res.name,
          images:res.images,
          color:res.color
        });
        console.log(res);
      })
    }


    const editcategoryFun = (e)=>{
      e.preventDefault();
      setIsLoading(true);

      editData(`/api/category/${editId}`, formFields).then((res)=>{
        fatchDataFromApi('/api/category').then((res)=>{
          setCatData(res);
          setOpen(false);
          setIsLoading(false);
        })
        
      })
      
    }

   

  return (
    <>
      <div className="right-content w-100 mt-1">
        <h4 className="tpheaderdashboard">Category List</h4>
        <Link to="/category/add">
          <Button className='btn-blue'>Add Category</Button>
          </Link>
       
        <div className="row dashboardboxwrapperrow">
         
        </div>

        <div className="card shadow border-0 p-3">
         

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead>
                <tr>
                  <th>UID</th>
                  <th style={{width:'100px'}}>Image</th>
                  <th style={{width:'300px'}}>Category</th>
                  <th>Color</th>
                  
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
              
            {
              catData?.categoryList?.length!==0 && catData?.categoryList?.map((item,index)=>{
                  return(
                    <tr>
                    <td>#{index+1}</td>
                    <td>
                      <div className='d-flex productbox align-items-center justify-content-center'>
                        <div className="imgwrapper">
                          <div className="img">
                            <img src={item.images[0]} className="w-100" />
                          </div>
                        </div>
                       
                      </div>
                    </td>
                    <td>
                    <div className="info pl-2">
                          <h6><b>{item.name}</b></h6>
                          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                        </div>
                    </td>
                    <td>{item.color}</td>
                   
                   
                    <td>
                      <div className="d-flex align-items-center actions">
                        <Button className="secondary" color="secondary"><FaEye /></Button>
                        <Button className="success" color="success" onClick={()=>editCategory(item.id)}><FaPencil /></Button>
                        <Button className="error" color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>
                  )
              })
            }

                 
               
               
               




 


              
               
               
                
              </tbody>
            </table>
            <div className='d-flex tablefooter'>
            
      
      <Pagination count={catData?.totalPages} variant="outlined" shape="rounded" className="pagination" showFirstButton showLastButton
      onChange={handleChange}
      />
    
            
            </div>
          </div>
        </div>
      </div>









      <Dialog
       className='editmodal'
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries(formData.entries());
              const email = formJson.email;
              console.log(email);
              handleClose();
            },
          },
        }}
      >
        <form>
        <DialogContent>
          <h3>Edit Category</h3>
          
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Category Name"
            type="text"
            fullWidth
            value={formFields.name}
            onChange={changeInput}
          
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="images"
            name="images"
            label="Category Images"
            type="text"
            fullWidth
            value={formFields.images}
            onChange={addImgUrl}
          
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="color"
            name="color"
            label="Category Color"
            type="text"
            fullWidth
            value={formFields.color}
            onChange={changeInput}
          
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='outlined'>Cancel</Button>
          <Button type="button" onClick={editcategoryFun} variant='contained' className='btn-submit'> 
            {isLoading===true ? <CircularProgress color="inherit" className='ml-3 loader' /> : 'Submit'}
          </Button>
          <br />
          <br/>
        </DialogActions>
        </form>
      </Dialog>

     
    </>
  )
}
export default Category;