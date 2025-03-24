import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from "./Components/Footer";
import ProductDetail from './Pages/ProductDetail';


/*********Country List API integaration *********** */

const MyContext = createContext();

function App() {
const [countryList,setCountryList ] = useState([]);
const [selectedCountry,setselectedCountry] = useState('');
useEffect(()=>{
      getCountry("https:////countriesnow.space/api/v0.1/countries/");
      },[]);
      
      const getCountry=async(url)=>{
      const responsive = await axios.get(url).then((res)=>{
        setCountryList(res.data.data)
        console.log(res.data.data)
      })
       
        

    
      }

  const values={
    countryList,
    setselectedCountry,
    selectedCountry, 
  }








  return (
    <BrowserRouter>
    <MyContext.Provider value={values}>

    
    <Header />
    <Routes>
    <Route path="/" exact={true} element={<Home />} /> 
    <Route path="/cat/:id" exact={true} element={<Listing />} /> 
    <Route path="/product/:id" exact={true} element={<ProductDetail />} /> 

    </Routes>
    <Footer />
    </MyContext.Provider> 
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
