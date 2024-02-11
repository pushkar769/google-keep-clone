import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from '../assets/google-keep-logo.png';




const Header = styled(AppBar)`
    z-index: 1201;
    background: #fff;
    height: 70px;
    box-shadow: inset 0 -1px 0 0 #dadce0
`;

const Heading = styled(Typography)`
    color: #5F6368;
    font-size: 24px;
    margin-left: 25px; 
`;

const HeaderBar = ({ open, handleDrawer }) => {

    return (
        <Header position="fixed" open={open}>
            <Toolbar>
                <IconButton
                    onClick={handleDrawer}
                    edge="start"
                    sx={{
                        marginRight: '20px'}}
                >
                    <MenuIcon />
                </IconButton>
                <img src={logo} alt='keep-logo' style={{width: 28}} />
                <Heading >
                    Keep
                </Heading>
            </Toolbar>
        </Header>
    )
}

export default HeaderBar;