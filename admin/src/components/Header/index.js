import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Button from '@mui/material/Button';
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import Modi from "../../assets/images/modi.jpg";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { IoIosArrowDown } from "react-icons/io";
import { FaShieldAlt } from "react-icons/fa";
import Divider from '@mui/material/Divider';
import { MyContext } from '../../App';


const Header = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennotificationDrop, setisOpennotificationDrop] = useState(null);
  const [isOpenemailDrop, setisOpenemailDrop] = useState(null);
  const [isOpencartDrop, setisOpencartDrop] = useState(null);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennotificationDrop);
  const openEmails = Boolean(isOpenemailDrop);
  const openCart = Boolean(isOpencartDrop);
  const context = useContext(MyContext )
  
  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);

  };
  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);

  };

  const handleOpenenotificationsDrop = (event) => {
    //setisOpennotificationDrop(true)
    setisOpennotificationDrop(event.currentTarget);
  }

  const handleClosenotificationsDrop = () => {
    setisOpennotificationDrop(null);
  }


  const handleOpenemailDrop = (event) => {
    //setisOpennotificationDrop(true)
    setisOpenemailDrop(event.currentTarget);
  }

  const handleCloseemailDrop = () => {
    setisOpenemailDrop(null);
  }

  const handleOpencartlDrop = (event) => {
    //setisOpennotificationDrop(true)
    setisOpencartDrop(event.currentTarget);
  }

  const handleClosecartDrop = () => {
    setisOpencartDrop(null);
  }






  return (
    <>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            <div className="col-sm-2 logo d-flex align-items-center part1">
              <Link to='/'>
                <img src={logo} />
                <span className="ml-2">Theos Group</span>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center part2 ">
              <Button className="rounded-circle mr-3" onClick={()=>context.setIsToggleSidebar
                (!context.isToggleSidebar)
              }>
                {
                  context.isToggleSidebar===false ? <MdOutlineMenuOpen /> : <IoMdMenu />
                }
                </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end">
              <Button className="rounded-circle mr-3" onClick={()=>context.setthemeMode(!context.themeMode)}>
              <MdOutlineLightMode />
              </Button>
              <Button className="rounded-circle mr-3 position-relative" onClick={handleOpencartlDrop}><IoIosCart />
              <div className="count d-flex align-iteams-center justify-content-center"><span>8</span></div>
              </Button>
              <Menu
                anchorEl={isOpencartDrop}
                className='cartsDrop dropdown_list'
                id="cartsDrop"
                open={openCart}
                onClose={handleClosecartDrop}
                onClick={handleClosecartDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

              >
                 <div className='head pl-4 pb-2 position-relative'>
                  <h4>My Cart (8)</h4>
                </div>
                <Divider className='mb-1' />
                <div className='scroll'>
                <MenuItem onClick={handleClosecartDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosecartDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosecartDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosecartDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosecartDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosecartDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>
               
                </div>
                <div className='w-100'>
                <Button className='btn-blue'>View All Carts</Button>
                </div>

              
                
              </Menu>
              <Button className="rounded-circle mr-3 position-relative" onClick={handleOpenemailDrop}><MdOutlineMail />
              <div className="count d-flex align-iteams-center justify-content-center"><span>23</span></div>
              </Button>
              <Menu
                anchorEl={isOpenemailDrop}
                className='emails dropdown_list'
                id="emails"
                open={openEmails}
                onClose={handleCloseemailDrop}
                onClick={handleCloseemailDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

              >

<div className='head pl-4 pb-2 position-relative'>
                  <h4>My Emails (8)</h4>
                </div>
                <Divider className='mb-1' />
                <div className='scroll'>
                <MenuItem onClick={handleCloseemailDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleCloseemailDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleCloseemailDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleCloseemailDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleCloseemailDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleCloseemailDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>
               
                </div>
                <div className='w-100'>
                <Button className='btn-blue'>View All Emails</Button>
                </div>




               
              </Menu>

              <div className='dropdownWrapper'>
              <Button className="rounded-circle mr-3" onClick={handleOpenenotificationsDrop}>
                <HiOutlineBell />
                <div className="count d-flex align-iteams-center justify-content-center"><span>12</span></div>
              </Button>
              <Menu
                anchorEl={isOpennotificationDrop}
                className='notifications dropdown_list'
                id="notifications"
                open={openNotifications}
                onClose={handleClosenotificationsDrop}
                onClick={handleClosenotificationsDrop}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

              >



                <div className='head pl-4 pb-2 position-relative'>
                  <h4>Notifications (12)</h4>
                </div>
                <Divider className='mb-1' />
                <div className='scroll'>
                <MenuItem onClick={handleClosenotificationsDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosenotificationsDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosenotificationsDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosenotificationsDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosenotificationsDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>

                <MenuItem onClick={handleClosenotificationsDrop}>
                 <div className='d-flex'>
                <div>
                <div className="userImg">
                    <img src={Modi} />
                  </div>
                </div>
                  <div className='dropdownInfo'>
                    <h4>
                  <span><b>Mahmudul</b> added to his favorite list <b>Leather belt steve madden</b></span>
                  </h4>
                  <p className='text-red'>few seconds ago</p>
                  </div>
                 </div>
                </MenuItem>
               
                </div>
                <div className='w-100'>
                <Button className='btn-blue'>View All Notifications</Button>
                </div>
                  
                
              </Menu>
              
              </div>
                {
                  context.isLogin !== true ? <Link to={'/login'}> <Button className='btn-blue sgnbtn btn-lg'>Sign in</Button></Link>
                  :
                  <div className="myAccWrapper">
                  <div className="myAcc d-flex align-items-center">
                    <div className="userImg">
                      <img src={Modi} />
                    </div>
                    <div className="userInfo" onClick={handleOpenMyAccDrop}>
                      <h4>Narendra Modi &nbsp;<IoIosArrowDown /></h4>
                      <p>@Modiji2025</p>
  
                    </div>
                    <Menu
                      anchorEl={anchorEl}
                      id="account-menu"
                      open={openMyAcc}
                      onClose={handleCloseMyAccDrop}
                      onClick={handleCloseMyAccDrop}
  
                    >
  
  
  
  
                      <MenuItem onClick={handleCloseMyAccDrop}>
                        <ListItemIcon>
                          <FaShieldAlt Settings fontSize="small" />
                        </ListItemIcon>
                        My Account
                      </MenuItem>
                      <MenuItem onClick={handleCloseMyAccDrop}>
                        <ListItemIcon>
                          <FaShieldAlt Settings fontSize="small" />
                        </ListItemIcon>
                        Reset Password
                      </MenuItem>
                      <MenuItem onClick={handleCloseMyAccDrop}>
                        <ListItemIcon>
                          <FaShieldAlt Settings fontSize="small" />
                        </ListItemIcon>
                        Logout
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
                }
               
             
            </div>

          </div>
        </div>
      </header>
    </>
  )
}
export default Header;