import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Nav } from 'react-bootstrap';
import {
    NavLink,
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';
import MyOrders from '../../User/MyOrders/MyOrders';
import Review from '../../User/Review/Review';
import Pay from '../../User/Pay/Pay';
import useAuth from '../../../Hooks/useAuth';
import './UserDashboard.css';
import Button from '@restart/ui/esm/Button';


const drawerWidth = 220;

function UserDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div className="side-bar">
            {
                admin && <Nav.Link style={{ color: 'white' }} as={NavLink} to="/adminDashboard"><Button className="admin-btn">Go To Admin Dashboard</Button></Nav.Link>
            }
            <Divider />
            <Toolbar />
            <Nav.Link style={{ color: 'white' }} as={NavLink} to="/home"><Button className="d-btn px-3">Home</Button></Nav.Link>
            <Divider />

            <Nav.Link style={{ color: 'white' }} as={NavLink} to={`${url}/myorders`}><Button className="d-btn">My orders</Button></Nav.Link>
            <Nav.Link style={{ color: 'white' }} as={NavLink} to={`${url}/review`}><Button className="d-btn px-3">Review</Button></Nav.Link>
            <Nav.Link style={{ color: 'white' }} as={NavLink} to={`${url}/pay`}><Button className="d-btn px-2 ">Payment</Button></Nav.Link>
            <Nav.Link style={{ color: 'white' }} onClick={logOut}  ><Button className="d-btn px-3">logout</Button></Nav.Link>

            {/* <Divider /> */}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

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
                <Toolbar style={{ color: 'white', backgroundColor: '#052046', }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h5" noWrap component="div">
                        My Dashboard
                    </Typography>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
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

                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/myorders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/Review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}

UserDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default UserDashboard;
