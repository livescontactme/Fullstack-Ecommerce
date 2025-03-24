import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6";
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { IoSearch } from "react-icons/io5";
import { Input } from '@mui/material';
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import Slide from '@mui/material/Slide';
import { MyContext } from '../../App';
import { useContext } from 'react';
import { FilterList } from '@mui/icons-material';





  const Transition = React.forwardRef(function Transition(props, ref){
    return <Slide direction="left" ref={ref} {...props} />});


    

const Countrydrop = () => {
    const[isOpenModal, setisOpenModal]= useState(false);
    const context = useContext(MyContext);
    const [selectedTab, setselectedTab]= useState(null);
    const [countryList, setcountryList]= useState([]);
    const selectCountry=(index,country)=>{
        setselectedTab(index);
        setisOpenModal(false);
        context.setselectedCountry(country)
        
    }
        useEffect(()=>{
            setcountryList(context.countryList);
        },[])

        const filterList=(e)=>{
            const keyword = e.target.value.toLowerCase();

                if(keyword!==""){
                    const list = countryList.filter((item)=>{
                
                        return item.country.toLowerCase().includes(keyword)
                    });
                    setcountryList(list);
                }else{
                    setcountryList(context.countryList);
                }
            
               
            
            
            
        }

        
    
    return(
        <>
        <Button className='countrydrop' onClick={()=>setisOpenModal(true)}>
                            <div className='info d-flex flex-column'>
                                <span className='label'>Your Location</span>
                                <span className='name'>{context.selectedCountry!=="" ? context.selectedCountry ?.length>10 
                                ?context.selectedCountry?.substr(0,10)+'...' : context.selectedCountry : 'Slect Location'}</span>
                            </div>
                            <FaAngleDown className='drp_btn' />
                        </Button>

                        <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='locationmodal'>
      <h4 className='mb-0'>Chose Your Delivery Location..</h4>
      <p>Enter your address and we will specify the offer for your area.</p>
      <Button className='close_' onClick={()=>setisOpenModal(false)}><IoClose /></Button>
      <div>
                       <div className='position-relative'>
                       <Input className='srch_bar' placeholder='Select Your Country...' onChange={filterList}/>
                       <div className='srch_btn modal_srch_btn position-relative'>
                       <Button className='ico_btn'>
                       <IoSearch  />
                       </Button>
                       </div>
                       </div>
                       </div>
                      
            <div className='list_cont'>
            <ul className='countryList'>
                {
                    countryList?.length!==0 && countryList.map((item,index)=>{
                        return(
                        <li key={index} onClick={()=>selectCountry(index,item.country)}
                        className={`${selectedTab ===index ? 'active': ''}`}
                        >{item.country}<Button></Button></li>
                        )
                    })
                }
                
 
            </ul>
            </div>
      
    </Dialog>
        </>
    )
}
export default Countrydrop;