import { List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Switch } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Home from '@mui/icons-material/Home';
import Page from '@mui/icons-material/ContactPage';
import People from '@mui/icons-material/PeopleAlt';
import Setting from '@mui/icons-material/Settings';
import Notification from '@mui/icons-material/Notifications';
import Night from '@mui/icons-material/Nightlight';


const SideBar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm:"block"}}}>
        <Box position="fixed">
        <List>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#home">
                    <ListItemAvatar>
                        <Home/>
                    </ListItemAvatar>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Pages">
                    <ListItemAvatar>
                        <Page/>
                    </ListItemAvatar>
                    <ListItemText>Pages</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#People">
                    <ListItemAvatar>
                        <People/>
                    </ListItemAvatar>
                    <ListItemText>People</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Settings">
                    <ListItemAvatar>
                        <Setting/>
                    </ListItemAvatar>
                    <ListItemText>Setting</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Notifications">
                    <ListItemAvatar>
                        <Notification/>
                    </ListItemAvatar>
                    <ListItemText>Notification</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#Night">
                    <ListItemAvatar>
                        <Night/>
                    </ListItemAvatar>
                    <Switch/>
                </ListItemButton>
            </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default SideBar