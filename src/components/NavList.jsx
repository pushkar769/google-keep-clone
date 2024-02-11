import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { LightbulbOutlined as LightBulb, NotificationsNoneOutlined as Reminders } from '@mui/icons-material';
import { ArchiveOutlined as Archive, DeleteOutlineOutlined as Trash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';




function NavList(props) {

  const navigate = useNavigate();

  const navList = [
    { id: 1, name: 'Notes', icon: <LightBulb />, route: '/' },
    { id: 2, name: 'Archive', icon: <Archive />, route: '/archive' },
    { id: 3, name: 'Trash', icon: <Trash />, route: '/trash' }
  ];

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <List>
      {
        navList.map(list => (
          <ListItemButton key={list.id} onClick={()=> handleNavigation(list.route)}>
            <ListItemIcon>
              {list.icon}
            </ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItemButton>
        ))
      }

    </List>
  );
}

export default NavList;