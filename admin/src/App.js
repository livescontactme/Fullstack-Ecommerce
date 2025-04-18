import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Dashboard from "./pages/Dashboard";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import React,{ createContext, useEffect, useState, useRef  } from 'react';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProductDetails from './pages/ProductDetails';
import ProductUpload from './pages/ProductUpload';
import Category from './pages/Category';
import AddCategory from './pages/AddCategory';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import LoadingBar from "react-top-loading-bar";



const MyContext = createContext();

function App() {
  const [isToggleSidebar,setIsToggleSidebar] = useState(false);
  const [isLogin,setIsLogin] = useState(false);
  const [isHideSidebarAndHeader,setIsHideSidebarAndHeader] = useState(false);
  const [themeMode,setthemeMode] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const [alertBox, setAlertBox] = useState({
    msg:'',
    error:false,
    open:false
  })


  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode','light');
      
    }
    else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode','dark');
    }
   
  },[themeMode]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlertBox({
      open:false,
      msg:''
    });
  };

 // const handleClickVariant = (variant) => () => {
    // variant could be success, error, warning, info, or default
   // enqueueSnackbar('This is a success message!', { variant });
 // };

  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    themeMode,
    setthemeMode,
    alertBox,
    setAlertBox,
    setProgress
    
  }
  
  return (
   <>
  <BrowserRouter>
  <MyContext.Provider value={values}>
  <LoadingBar
        color="#a50034"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        className='topLodingBar'
      />

  <Snackbar open={alertBox.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertBox.error===false? "success" : "error"}
          variant="filled"
          sx={{ width: '100%' }}
        >
         {alertBox.msg}
        </Alert>
      </Snackbar>
 
  {
      isHideSidebarAndHeader!== true &&
  <Header />
}
  <div className='main d-flex'>
    {
      isHideSidebarAndHeader!== true &&
      <div className={`sidewrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
      <Sidebar />
      
    </div>
    }
    
    <div className={`content ${isToggleSidebar===true ? 'toggle' : ''}`}>
    <Routes>
  <Route path="/" exact={true} element={<Dashboard />} /> 
  <Route path="/dashboard" exact={true} element={<Dashboard />} /> 
  <Route path="/login" exact={true} element={<Login />} />
  <Route path="/signUp" exact={true} element={<SignUp />} /> 
  
  <Route path="/product/details" exact={true} element={<ProductDetails />} /> 
  <Route path="/product/upload" exact={true} element={<ProductUpload />} /> 
  <Route path="/category/add" exact={true} element={<AddCategory />} /> 
  <Route path="/category" exact={true} element={<Category />} /> 
  </Routes>
    </div>

  </div>



  </MyContext.Provider>

  </BrowserRouter>
   </>
  );
}

export default App;
export {MyContext};
