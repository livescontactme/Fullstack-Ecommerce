import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import Countrydrop from '../CountryDropdown';
import { Input } from '@mui/material';
import { IoSearch } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Button } from '@mui/material';
import { IoCart } from "react-icons/io5";
import SearchBar from './SearchBar';
import Navigation from '../Navigation';
import { MyContext } from '../../App';
import { useContext } from 'react';




const Header = () => {
    const context = useContext(MyContext)

    return (
        <>
            <div className='sstr'>
                <div className="header">
                    <div className="top-strip">
                        <div className="fluid-container">
                            <p className="mb0 mt0 text-center tp_strip_bg">Due to the <b>COVID 19</b> epidemic, order may be processed with a slight delay</p>
                        </div>
                    </div>
                    <div className="header">
                        <div className="container">
                            <div className='row'>
                                <div className="logo-wrapper col-sm-2 d-flex align-items-center logo-pad">
                                    <Link to={'/'}><img src={Logo} alt='Logo' /></Link>
                                </div>
                                <div className='col-md-2 d-flex align-items-center part2'>
                                    <span className='spc'>
                                        {
                                            context.countryList.length !== 0 && <Countrydrop />
                                        }

                                    </span>

                                </div>
                                <div className='col-md-5 headersearch'>
                                    <SearchBar />


                                </div>
                                <div className='col-md-2 d-flex align-items-center part3 ml-auto'>
                                    <Button className='user_circle user_cc mr-3 ml-auto'>
                                        <FaRegCircleUser className='user_style' />
                                    </Button>
                                    <div className='ml-auto mr-3 cart_price'>$400.00</div>
                                    <div className='ml-auto mr-3'>
                                        <div className='position-relative'>
                                            <Button className='cart_btn_stl'>
                                                <IoCart className='cart_icon_style user_style' />
                                            </Button>
                                            <div className='count d-flex align-iteams-center justify-content-center'>
                                                <span>1</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <nav>
                    <div className='container mr_top'>
                        <div className='row'>
                            <Navigation />
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header;