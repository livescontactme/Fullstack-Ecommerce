import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { IoTimer } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HistoryIcon from '@mui/icons-material/History';

const BoardBox = (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);
  const ITEM_HEIGHT = 48;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="dashboardbox" style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0]} , ${props.color[1]})`

      }}>
        {
          props.grow === true ?
            <span className="chart"><TrendingUpIcon /></span>
            :
            <span className="chart"><TrendingDownIcon /></span>
        }
        <div className='d-flex w-100'>
          <div className="col1">
            <h4 className="text-white">Total Users</h4>
            <span className="text-white">277</span>
          </div>
          <div className="ml-auto">
            {
              props.icon ?
                <span span className="icon">
                  {props.icon ? props.icon : ''}
                </span>
                :
                ''
            }

          </div>
        </div>
        <div className="d-flex align-items-center">
          <h6 className="text-white mt-0 mb-0">Last Month</h6>
          <Button className="ml-auto toogleicon" onClick={handleClick}><HiDotsVertical /></Button>
          <Menu
            id="long-menu"
            MenuListProps={{
              'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              paper: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: '20ch',
                },
              },
            }}
          >

            <MenuItem onClick={handleClose}>
              <HistoryIcon />&nbsp;&nbsp;<span>last day</span>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HistoryIcon />&nbsp;&nbsp;<span>last week</span>

            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HistoryIcon />&nbsp;&nbsp;<span>last month</span>

            </MenuItem>
            <MenuItem onClick={handleClose}>
              <HistoryIcon />&nbsp;&nbsp;<span>last year</span>
            </MenuItem>

          </Menu>
        </div>
      </div>

    </>
  )
}
export default BoardBox;