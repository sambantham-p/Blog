import React, { useState } from 'react'
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import {AppBar,InputBase,styled, Toolbar, Typography,Badge, Menu, MenuItem} from "@mui/material"
import MailIcon from '@mui/icons-material/Mail';
import Avatar from '@mui/icons-material/AccountCircle';
import Notifications from '@mui/icons-material/Notifications';


export const Navbar = () => {
  const [open,setOpen] = useState(false)
  const Nav = styled(Toolbar)({
        display: 'flex',
        justifyContent: 'space-between',
  });
  const Search = styled('div')(({theme})=>({
    display:"none",
    backgroundColor: "white",
    padding: "0px 10px",
    borderRadius:"10px",
    width:"40%",
    [theme.breakpoints.up("sm")]:{
        display:"block",
    }
    
  }));
  const Icon = styled('div')(({theme})=>({

    borderRadius: theme.shape.borderRadius,
    gap:"20px",
    
    
  }));
 
  return (
    <AppBar position='sticky'>
        
        <Nav>
            <Typography sx={{display:{xs:"none", sm:"block"},fontFamily:"cursive"}}>Tweet</Typography>
            <PedalBikeIcon sx={{display:{xm:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='Search'></InputBase></Search>
            <Icon sx={{display:{xs:"none", sm:"flex"}}}>
                <Badge badgeContent={4} color="error">
                    <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications ></Notifications>
                </Badge>
                <Badge>
                    <Avatar onClick={e=>setOpen(true)}></Avatar>
                </Badge>
            </Icon>
            <Badge  sx={{display:{xs:"flex", sm:"none"}}}>
                <Avatar onClick={e=>setOpen(true)}></Avatar>
            </Badge>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>{setOpen(false)}}
                anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
                transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
                }}
            >
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
            </Menu>
        </Nav>
    </AppBar>
  )
}

export default Navbar;
