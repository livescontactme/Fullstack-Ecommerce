import Button from '@mui/material/Button';
import { FaAngleRight } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { BiSolidMessageSquareDots } from "react-icons/bi";
import { MdNotificationsActive } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from '../../App';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);
    const isOpensubmenu = (index) => {
        setActiveTab(index);
        setIsToggleSubmenu(!isToggleSubmenu)


    }


    return (
        <>
            <div className="sidebar">
                <ul>

                    <li>
                        <h5>main pages</h5>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}
                                onClick={() => isOpensubmenu(0)}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            </Link>
                            <div className={`submenuwrapper ${activeTab === 0 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="dashboard">Product List</Link></li>
                                    <li><Link to="product/details">Product View</Link></li>
                                    <li><Link to="product/upload">Product Upload</Link></li>
                                </ul>
                            </div>
                        
                    </li>
                    <li>

                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active' : ''}`}
                            onClick={() => isOpensubmenu(1)}>
                            <span className='icon'><MdProductionQuantityLimits /></span>
                            Product
                            <span className='arrow'><FaAngleRight /></span>
                        </Button>
                        <div className={`submenuwrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="/">Product List</Link></li>
                                <li><Link to="product/details">Product View</Link></li>
                                <li><Link to="product/upload">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`}
                                onClick={() => isOpensubmenu(2)} >
                                <span className='icon'><IoCart /></span>
                                Category
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                            </Link>
                            <div className={`submenuwrapper ${activeTab === 2 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
                                <ul className='submenu'>
                                    <li><Link to="/category">Category List</Link></li>
                                    <li><Link to="/category/add">Add Category</Link></li>
                                    
                                </ul>
                            </div>
                        
                    </li>
                   
                   

                </ul>
                <div className='logoutwrapper'>
                    <div className='logoutbox mt-5'>
                        <Button variant='contained' className='btnlogout'><IoMdLogOut /> Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sidebar;