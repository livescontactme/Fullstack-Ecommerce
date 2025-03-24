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





const Login = ()=>{

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

        
      
       <div className='loginsection'>
        <div className="loginbox">
            <div className='logo text-center'>
            <img src={logo} width="40px" className="mb-4" />
            <h4>Login to <b>THEOS GROUP</b></h4>
            </div>
            <div className="wrapper card border p-3">
            <form>
                <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                    <span className="icon"><MdEmail /></span>
                    <input type="text" className="form-control" placeholder="enter your email" onFocus={()=>focusInput(0)}
                    onBlur={()=>setInputIndex(null)} autoFocus
                    />
                </div>

                
                
                <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
                    <span className="icon"><RiLockPasswordFill /></span>
                    <input type={`${isShowPassword===true ? 'text' : 'password'}`} className="form-control" placeholder="enter your password" onFocus={()=>focusInput(1)}
                    onBlur={()=>setInputIndex(null)}
                    />
                    <span className="toggleshowpassword" onClick={()=>setIsShowPassword(!isShowPassword)}>
                        {
                            isShowPassword===true ? <IoEyeOff /> : <MdRemoveRedEye />
                        }
                        
                    </span>
                </div>
                <div className="form-group w-100">
                    <Button className="btn-blue btn-lg btn-big">Sign In</Button>
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
      <Button variant="contained"  className="success w-100 btn-twtr">
      <FaTwitter /> &nbsp; Login with Twitter
      </Button>
                </div>

            </form>
            </div>
            <div className="wrapper mt-0 card border">
            <div className="form-group text-center">
            <span className="text-center rgstr">
                Don't have an Account?
                <Link to={'/signUp'} className="link color ml-2 color-register">Register</Link>
            </span>
            </div>
        </div>
        </div>

       
        
       </div>
        </>
    )
}
export default Login;