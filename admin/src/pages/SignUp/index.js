import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../App";
import logo from "../../assets/images/logo.png";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa6";
import { FaCircleUser } from "react-icons/fa6";
import { IoShieldCheckmark } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AiFillHome } from "react-icons/ai";




const SignUp = ()=>{
    const [inputIndex,setInputIndex] = useState(null);
    const [isShowPassword,setIsShowPassword] = useState(false);

    const context = useContext(MyContext)



    useEffect(()=>{
        context.setIsHideSidebarAndHeader(true);
    },[]);

    const focusInput=(index)=>{
        setInputIndex(index);
    }
    return(
        <>
         
         <div className='loginsection signupsection'>
        <div className="row">
            <div className="col-md-8 d-flex align-items-center justify-content-center flex-column part1">
            <div className='logo text-center'>
            <img src={logo} width="40px" className="mb-2" />
            <h4 className="rhdng">About Theos Group</h4>
            </div>
            <h1>best ux/ui fashion <span className="text-sky">ecommerce dashboard</span> & admin panel</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged.</p>
               <div className="morebtn w-100">
               <span> <Link to={'/'}><Button><AiFillHome /> &nbsp;Go to Home</Button></Link></span>
               </div>
            </div>
            <div className="col-md-4">
            <div className="loginbox">
            <h4 className="text-center rhdng">Register a New Account</h4>
            <div className="wrapper card border p-3">
                
            <form>
                <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                    <span className="icon"><FaCircleUser /></span>
                    <input type="text" className="form-control" placeholder="enter your name"
                    onFocus={()=>focusInput(0)}
                    onBlur={()=>setInputIndex(null)} autoFocus
                    />
                </div>

                <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                    <span className="icon"><MdEmail /></span>
                    <input type="text" className="form-control" placeholder="enter your email"
                    onFocus={()=>focusInput(1)}
                    onBlur={()=>setInputIndex(null)}
                    />
                </div>
                
                <div className={`form-group position-relative ${inputIndex===2 && 'focus'}`}>
                    <span className="icon"><RiLockPasswordFill /></span>
                    <input type={`${isShowPassword===true ? 'text' : 'password'}`} className="form-control" placeholder="enter your password" onFocus={()=>focusInput(2)}
                    onBlur={()=>setInputIndex(null)}
                    />
                    <span className="toggleshowpassword" onClick={()=>setIsShowPassword(!isShowPassword)}>
                        {
                            isShowPassword===true ? <IoEyeOff /> : <MdRemoveRedEye />
                        }
                        
                    </span>
                </div>

                <div className={`form-group position-relative ${inputIndex===3 && 'focus'}`}>
                    <span className="icon"><IoShieldCheckmark /></span>
                    <input type="password" className="form-control" placeholder="confirm password"
                    onFocus={()=>focusInput(3)}
                    onBlur={()=>setInputIndex(null)}
                    />
                </div>


                <FormControlLabel control={<Checkbox  />} label="I have read and Terms and Conditions" />
                <div className="form-group w-100">
                    <Button variant="contained" className="btn-blue btn-lg btn-big">Sign Up</Button>
                </div>

                <div className="form-group text-center w-100">
                    <Link to={'/forgot-password'} className='link'>
                    forgot password
                    </Link>
                    <div className="d-flex align-items-center justify-content-center or mt-3 mb-3">
                        <span className="line"></span>
                        <span className="txt">or</span>
                        <span className="line"></span>
                    </div>
                    <Button variant="contained" className="success w-100 btn-google mb-3">
                        <BiLogoFacebookCircle /> &nbsp;Login with Facebook
      </Button>
      <Button variant="contained"  className="success w-100 btn-twtr mb-3">
      <FaTwitter /> &nbsp; Login with Twitter
      </Button>
      <span className="text-center rgstr">
                Don't have an Account?
                <Link to={'/login'} className="link color ml-2 color-register">Register</Link>
            </span>
                </div>

            </form>
            </div>
            
        </div>
            </div>
        </div>



       

       
        
       </div>
        </>
    )
}

export default SignUp;