
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css"; 
import { useEffect, useState } from 'react';
import sideadd from "../../assets/images/sideadd.jpg";
import { Link } from 'react-router-dom';






import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
  }

const Sidebar = () =>{

    const [value, setValue] = useState([37, 99]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
   




    // const [value, setValue] = useState([100,60000]);
    // const [value2, setValue2] = useState([0]);
    // useEffect(()=>{
    //     var price = 0;
    //     props.currentCatData.length !== 0 &&
    //     props.currentCatData.map((item, index)=>{
    //         let prodPrice = parseInt(item.price.toString().replace(/,/g, ""));
    //         if (prodPrice > price){
    //             price = prodPrice
    //         }
    //     })

    //     setValue2(price)
    // },[props.currentCatData])

    
    return(
        <>
        <div className="sidebar">
            <div className='sticky'>
            <div className="filterBox">
                <h6>Product Category</h6>
                <div className='scroll'>

                <ul className='mt-4'>
                    <li>
                    <FormControlLabel className='w-100' control={<Checkbox />} label="Home" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Fashion" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Electronics" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Backry" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Grocery" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Blog" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Contact Us" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Grocery" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Blog" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Contact Us" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Grocery" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Blog" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Contact Us" />
                    </li>
                    
                </ul>
                
      
      
      
      
     
      
      
      
      
      
      
      
      
      
                     
      

                </div>

           

            </div>

            <div className='filterBox mt-4'>
                <h6>Filter By Price</h6>
                {/* <RangeSlider className="mt-3 w-75" value={value} onInput={setValue} min={100} max={60000} step={5}>
                    <div className='d-flex pt-2 pb-2 priceRange'>
                    <span>From:<strong className="text-success">Rs: {value[0]}
                        </strong>
                        </span>
                        <span className='ml-auto'>
                            From<strong className="text-success">Rs: {value[1]}

                            </strong>
                        </span>
                    </div>
                </RangeSlider> */}
                <Box sx={{ width: 200 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>


            </div>
            <div className='filterBox mt-5'>
                <h6>Product Status</h6>
                <div className='scroll'>
                    <ul>
                    <li>
                    <FormControlLabel className='w-100' control={<Checkbox />} label="Home" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Fashion" />
                    </li>
                    </ul>
                </div>

            </div>

            <div className='filterBox mt-4'>
                <h6>Brands</h6>
                <div className='scroll'>
                    <ul>
                    <li>
                    <FormControlLabel className='w-100' control={<Checkbox />} label="Adidas" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Puma" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Loto" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Relaxo" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Bata" />
                    </li>
                    <li>
                    <FormControlLabel control={<Checkbox />} label="Sri" />
                    </li>
                    </ul>
                </div>

            </div>

           <div className='mt-4'>
           <Link to="#" className='mt-3'>
            <img src={sideadd} className='w-75' style={{borderRadius:'20px'}} />
            </Link>
           </div>
           </div>
        </div>
        </>
    )

    
}

export default Sidebar;