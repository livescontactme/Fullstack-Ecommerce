
import axios from "axios";
// require('dotenv/config');





export const fatchDataFromApi=async(url)=>{
    try{
        const {data} = await axios.get("http://127.0.0.1:4000"+url)
        return data;
    }catch(error){
        console.log(error);
        return error;
    };

   
    
}

export const postData = async ( url, formData ) => {
   
    const{res} = await axios.post("http://127.0.0.1:4000"+ url,formData)
     return res;
}

export const editData = async (url, updatedData) =>{
    const {res} = await axios.put(`http://127.0.0.1:4000${url}`, updatedData)
    return res;
}