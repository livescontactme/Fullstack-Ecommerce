
import { Button } from '@mui/material';
import { IoMdMenu } from "react-icons/io";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineElectricBolt } from "react-icons/md";
import { useState } from 'react';


const Navigation = () => {
    const [isopenSidebarValue, setisopenSidebarValue] = useState(false);
    return (
        <>
            <div className='col-sm-2 p-0 nav-part1 d-flex align-items-center'>
                <div className='cartwrapper'>
                    <Button className='allcategory align-items-center' onClick={() => setisopenSidebarValue(!isopenSidebarValue)}>
                        <span className='icon1 mr-3'><IoMdMenu /></span>
                        <span className='text'>All Category</span>
                        <span className='icon2 ml-3'><TfiAngleDown /></span>
                    </Button>
                    <div className={`sidenavigation ${isopenSidebarValue === true ? 'open' : ''}`}>
                        <ul>
                            <li className='position-relative'>
                                <Link to="/"><Button>Home<span className='ml-auto mr-3'><TfiAngleDown /></span></Button></Link>
                                <div className='innerdrop'>
                                    <ul>
                                        <li><Link to="/"><Button>sidenavigation2</Button></Link> </li>
                                        <li><Link to="/"><Button>multidropdown2</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation4</Button></Link> </li>
                                        <li className='position-relative'><Link to="/"><Button>sidenavigation5</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation6</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation7</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation2</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation3</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation4</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation5</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation6</Button></Link> </li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link to="/"><Button>Fashion</Button></Link> </li>
                            <li><Link to="/"><Button>Electronics</Button></Link> </li>
                            <li><Link to="/"><Button>Backry</Button></Link> </li>
                            <li>
                                <Link to="/"><Button>Grocery<span className='ml-auto mr-3'><TfiAngleDown /></span></Button></Link>
                                <div className='innerdrop'>
                                    <ul>
                                        <li><Link to="/"><Button>Blog</Button></Link> </li>
                                        <li><Link to="/"><Button>multidropdown2</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation4</Button></Link> </li>
                                        <li className='position-relative'><Link to="/"><Button>sidenavigation5</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation6</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation7</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation2</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation3</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation4</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation5</Button></Link> </li>
                                        <li><Link to="/"><Button>sidenavigation6</Button></Link> </li>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-sm-10 nav-part2 d-flex align-items-center'>
                <ul className='list list-inline ml-auto'>
                    <li className='list-inline-item'><></>
                        <Link to="/"><IoHomeOutline />&nbsp;<Button>Home</Button>&nbsp;<TfiAngleDown /></Link>
                        <div className='submenu shadow'>
                            <Link to="/"><Button>submenu1</Button></Link>
                            <Link to="/"><Button>submenu2</Button></Link>
                            <Link to="/"><Button>submenu3</Button></Link>
                            <Link to="/"><Button>submenu4</Button></Link>
                            <Link to="/"><Button>submenu5</Button></Link>
                        </div>
                    </li>
                    <li className='list-inline-item'><Link to="/"><Button>Fashion</Button></Link></li>
                    <li className='list-inline-item position-relative'>
                        <Link to="/">&nbsp;<Button>Electronics</Button>&nbsp;<TfiAngleDown /></Link>
                        <div className='submenu shadow'>
                            <Link to="/"><Button>submenu1</Button></Link>
                            <Link to="/"><Button>submenu2</Button></Link>
                            <Link to="/"><Button>submenu3</Button></Link>
                            <Link to="/"><Button>submenu4</Button></Link>
                            <Link to="/"><Button>submenu5</Button></Link>
                        </div>
                    </li>
                    <li className='list-inline-item position-relative'>
                        <Link to="/"><Button>Backry</Button></Link>

                    </li>
                    <li className='list-inline-item'><Link to="/"><Button>Grocery</Button></Link></li>
                    <li className='list-inline-item position-relative'>
                        <Link to="/"><Button>Blog</Button>&nbsp;<TfiAngleDown /></Link>
                        <div className='submenu shadow'>
                            <Link to="/"><Button>submenu1</Button></Link>
                            <Link to="/"><Button>submenu2</Button></Link>
                            <Link to="/"><Button>submenu3</Button></Link>
                            <Link to="/"><Button>submenu4</Button></Link>
                            <Link to="/"><Button>submenu5</Button></Link>
                        </div>
                    </li>
                    <li className='list-inline-item position-relative'>
                        <Link to="/"><Button>Contact us</Button></Link>

                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation;