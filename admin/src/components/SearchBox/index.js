import { FaSearch } from "react-icons/fa";
import Button from '@mui/material/Button';
const SearchBox = ()=>{
    return(
        <>
        <div className="searchBox position-relative d-flex align-items-center">
            <FaSearch className="mr-2" />
            <input type="text" placeholder="finding here..." />
        </div>
        </>
    )
}
export default SearchBox;