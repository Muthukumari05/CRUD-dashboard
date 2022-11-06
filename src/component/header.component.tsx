import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EmailIcon from '@material-ui/icons/Email';
import SettingIcon from '@material-ui/icons/Settings';
import ExitIcon from '@material-ui/icons/ExitToApp';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface Props {
 }

export default function Header(props: Props) {
 
  const [statePos, setStatePos] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setStatePos({ ...statePos, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <div className='side-menu-header'>MENUS</div>
      <List>
        {['Home', 'Dashboard', 'All posts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 3 === 0 ? <DashboardIcon /> : <EmailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Settings', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingIcon /> : <ExitIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


         return (
          <Box sx={{ display: 'flex' }}> 
          <CssBaseline />
          <AppBar
            position="fixed"
          >
       
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer("left", true)}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit">
                             My Dashboard
                        </Typography>
                    </Toolbar>
          </AppBar>
          <Drawer
            // anchor={anchor}
            open={statePos['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          </Box>


        );
}


