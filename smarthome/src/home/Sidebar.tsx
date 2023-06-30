import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FaHome, FaDesktop, FaFileAlt, FaCog } from 'react-icons/fa';
import Overview from './Components/Overview';
import Devices from './Components/Devices';
import Rules from './Components/Rules';
import Settings from './Components/Settings';

const drawerWidth = 240;

interface Props {
    window?: () => Window;
}

enum ActiveComponent {
    Overview = 'Overview',
    Devices = 'Devices',
    Rules = 'Rules',
    Settings = 'Settings',
}


export default function Sidebar(props: Props) {
    const [activeComponent, setActiveComponent] = React.useState(ActiveComponent.Overview);

    const handleListItemClick = (component: ActiveComponent) => {
        setActiveComponent(component);
        handleDrawerToggle();
    };
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />

            <ListItem >
                <ListItemButton onClick={() => handleListItemClick(ActiveComponent.Overview)}>
                    <ListItemIcon>
                        <FaHome />
                    </ListItemIcon>
                    <ListItemText primary='Overview' />
                </ListItemButton>
            </ListItem>

            <Divider />
            <ListItem>
                <ListItemButton onClick={() => handleListItemClick(ActiveComponent.Devices)}>
                    <ListItemIcon>
                        <FaDesktop />
                    </ListItemIcon>
                    <ListItemText primary='Devices' />
                </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemButton onClick={() => handleListItemClick(ActiveComponent.Rules)}>
                    <ListItemIcon>
                        <FaFileAlt />
                    </ListItemIcon>
                    <ListItemText primary='Rules' />
                </ListItemButton>
            </ListItem>
            <Divider />

            <ListItem>
                <ListItemButton onClick={() => handleListItemClick(ActiveComponent.Settings)}>
                    <ListItemIcon>
                        <FaCog />
                    </ListItemIcon>
                    <ListItemText primary='Settings' />
                </ListItemButton>
            </ListItem>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    const renderComponent = () => {
        switch (activeComponent) {
            case ActiveComponent.Devices:
                return <Devices />;
            case ActiveComponent.Rules:
                return <Rules />;
            case ActiveComponent.Settings:
                return <Settings />;
            default:
                return <Overview />;
        }
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        {activeComponent}
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                {renderComponent()}
            </Box>
        </Box>
    );
}
