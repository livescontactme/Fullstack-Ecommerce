import { Input } from '@mui/material';
import { Button } from '@mui/material';
import { IoCart } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
    return(
        <>
       
                       <div className='srch_container'>
                        <Input className='srch_bar'/>
                       </div>
                       <div className='srch_btn'>
                       <Button className='ico_btn'>
                       <IoSearch  />
                       </Button>
                       </div>
        </>
    )
}

export default SearchBar;