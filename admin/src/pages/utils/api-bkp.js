
import axios from "axios";
// require('dotenv/config');

<div style="width:100%; float:left; margin-top:20px; margin-bottom:20px; margin-left:20px; margin-right:20px">
    
</div>





export const fatchDataFromApi=async(url)=>{
    try{
        const {data} = await axios.get("http://127.0.0.1:4000"+url)
        return data;
    }catch(error){
        console.log(Category);
        return error;
    };

   
    
}

export const postData = async ( url, formData ) => {
   
    const{res} = await axios.post("http://127.0.0.1:4000"+ url,formData)
     return res;
}