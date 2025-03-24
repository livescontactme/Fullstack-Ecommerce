
import Button from '@mui/material/Button';
import { useContext, useEffect, useState} from "react";
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import Pagination from '@mui/material/Pagination';
import { MyContext } from "../../App";
import { fatchDataFromApi } from '../utils/api';
import { data } from 'react-router-dom';








export const options = {
  'backgroundColor': 'transparent',
  'chartArea': {'width': '85%%', 'height': '80%'},
  title: "My first e-commerce pject",
  pieHole: 0.4,
  is3D: true,
};
const Category = () => {

  const [catData, setCatData] = useState([]);

    
    const context = useContext(MyContext);

    useEffect(()=>{
      context.setIsHideSidebarAndHeader(false);
      window.scrollTo(0,0);
      fatchDataFromApi('/api/category').then((res)=>{
        setCatData(res);
        console.log(res);
      })
    },[]);
    


   

  return (
    <>
      <div className="right-content w-100 mt-1">
        <h4 className="tpheaderdashboard">Category List</h4>
        <div className="row dashboardboxwrapperrow">
         
        </div>

        <div className="card shadow border-0 p-3">
         

          <div className="table-responsive mt-3">
            <table className="table table-bordered v-align">
              <thead>
                <tr>
                  <th>UID</th>
                  <th style={{width:'100px'}}>Image</th>
                  <th style={{width:'300px'}}>Category</th>
                  <th>Color</th>
                  
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
              
            {
              catData?.categoryList?.length!==0 && catData?.categoryList?.map((item,index)=>{
                  return(
                    <tr>
                    <td>#{index+1}</td>
                    <td>
                      <div className='d-flex productbox align-items-center justify-content-center'>
                        <div className="imgwrapper">
                          <div className="img">
                            <img src={item.images[0]} className="w-100" />
                          </div>
                        </div>
                       
                      </div>
                    </td>
                    <td>
                    <div className="info pl-2">
                          <h6><b>{item.name}</b></h6>
                          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                        </div>
                    </td>
                    <td>{item.color}</td>
                   
                   
                    <td>
                      <div className="d-flex align-items-center actions">
                        <Button className="secondary" color="secondary"><FaEye /></Button>
                        <Button className="success" color="success"><FaPencil /></Button>
                        <Button className="error" color="error"><MdDelete /></Button>
                      </div>
                    </td>
                  </tr>
                  )
              })
            }

                 
               
               
               




 


              
               
               
                
              </tbody>
            </table>
            <div className='d-flex tablefooter'>
            
      
      <Pagination count={catData?.totalPages} variant="outlined" shape="rounded" className="pagination" showFirstButton showLastButton
      onChange={handleChange}
      />
    
            
            </div>
          </div>
        </div>
      </div>

     
    </>
  )
}
export default Category;