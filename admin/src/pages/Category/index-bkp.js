
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdOutlineStar } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";






export const options = {
  'backgroundColor': 'transparent',
  'chartArea': {'width': '85%%', 'height': '80%'},
  title: "My first e-commerce pject",
  pieHole: 0.4,
  is3D: true,
};
const Category = () => {

  const [anchorEl, setAnchorEl] = useState(null)
  const [showBy, setshowBy] = useState('');
  const [showBysetCatBy, setCatBy] = useState('');
  const [showBysetBrandBy, setBrandBy] = useState('');
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;

  // NEW CUSTOME CODE

  const [anchorE2, setAnchorE2] = useState(null);
  const [showBy2, setShowBy] = useState('');
  const [showBysetBrandBy, setshowBysetBrandBy] = useState('');








    const context = useContext(MyContext);

    useEffect(()=>{
      context.setIsHideSidebarAndHeader(false);
      window.scrollTo(0,0);
    },[]);
    


    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <>
      <div className="right-content w-100 mt-1">
        <h4 className="tpheaderdashboard">Category List</h4>
        <div className="row dashboardboxwrapperrow">
         
        </div>

        <div className="card shadow border-0 p-3">
          <h3 className="hd">Best selling products</h3>
          <div className='row cardfiltersmt-3'>
            <div className="col-md-3 label">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="w-100">
            <h4>Show By</h4>

            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBy}
          onChange={(e)=>setshowBy(e.target.value)}
          displayEmpty
          inputProps={{'aria-label':'Without label'}}
          className="w-100"
          label="Brand By"
         // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
        
            </div>
            <div className="col-md-3 label">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="w-100">
            <h4>Show By</h4>
            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBysetCatBy}
          onChange={(e)=>setCatBy(e.target.value)}
          displayEmpty
          inputProps={{'aria-label':'Without label'}}
          className="w-100"
          label="Age"
          variant="outlined"
         // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
            </div>
            <div className="col-md-3 label">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" className="w-100">
            <h4>Brand By</h4>
            <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={showBysetBrandBy}
          onChange={(e)=>setBrandBy(e.target.value)}
          displayEmpty
          inputProps={{'aria-label':'Without label'}}
          className="w-100"
          label="Brand By"
         // onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        </FormControl>
            </div>
            <div className="col-md-3 label custom-width">
            
            <h4>Search By</h4>
            <FormControl sx={{ m: 1, minWidth: 90 }}  size="small" >
            <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
      className="custwidth"
    >
            <TextField id="outlined-basic" label="id/name/category/brand" variant="outlined" className="w-100" size="small" />
            </Box>
        </FormControl>
            </div>
           
          </div>

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead>
                <tr>
                  <th>UID</th>
                  <th style={{width:'300px'}}>product</th>
                  <th>category</th>
                  <th>brand</th>
                  <th>price</th>
                  <th>stock</th>
                  <th>rating</th>
                  <th>order</th>
                  <th>sales</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#1</td>
                  <td>
                    <div className='d-flex productbox align-items-center'>
                      <div className="imgwrapper">
                        <div className="img">
                          <img src="https://mironcoder-hotash.netlify.app/images/product/01.webp" className="w-100" />
                        </div>
                      </div>
                      <div className="info pl-2 d-flex align-items-center">
                        <h6><b>Tops and skirt set for Female</b></h6>
                        <p>Women's exclusive summer Tops and skirt set for Female Tops and skirt set</p>
                      </div>
                    </div>
                  </td>
                  <td>womans</td>
                  <td>richman</td>
                  <td>
                    <del className="old">$21</del>
                    <span className="new text-danger">$19</span>
                  </td>
                  <td>30</td>
                  <td><span className='rtng'><MdOutlineStar /></span>4.9(16)</td>
                  <td>380</td>
                  <td>$38k</td>
                  <td>
                    <div className="d-flex align-items-center actions">

                  <Link to="/product/details">
                      <Button className="secondary" color="secondary">
                        <FaEye />
                        </Button>
                        </Link>
                      
                        <Link to="/product/upload">
                      <Button className="success" color="success">
                      <FaPencil />
                      
                      </Button>
                      </Link>
                      <Button className="error" color="error"><MdDelete /></Button>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className='control-manu'>
                      <div className='w-100'>
                        <div className='row'>
                          <div className='col-md-12'>
                            <div className='header-menu'>
                              <ul>
                                <li>
                                  <a href={logo}>Home</a>
                                </li>
                                <li>
                                  <a href={logo01}>Fashion</a>
                                </li>
                                <li>
                                  <a href={logo02}>Men's</a>
                                </li>
                                <li>
                                  <a href={logo03}>Women's</a>
                                </li>
                                <li>
                                  <a href={logo04}>
                                    Kids
                                  </a>
                                </li>
                                <li>
                                  <a href={logo05}>
                                    Electronics
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li>
                                  <a href={logo}
                                </li>
                              </ul>


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>

              
              
               
               
                
              </tbody>
            </table>
            <div className='d-flex tablefooter'>
            
      <p>showing <b>12</b> of <b>60</b> results</p>
      <Pagination count={15} variant="outlined" shape="rounded" className="pagination" showFirstButton showLastButton />
    
            
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}
export default Category;