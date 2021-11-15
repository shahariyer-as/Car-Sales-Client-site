import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Nav } from 'react-bootstrap';
import {
    NavLink, Switch,
    Route,

    useRouteMatch
} from 'react-router-dom';
import MakeAdmin from '../../myAdmin/MakeAdmin/MakeAdmin';
import AddProduct from '../../myAdmin/AddProduct/AddProduct';
import ManageAllOrders from '../../myAdmin/ManageAllOrders/ManageAllOrders';
import ManageProduct from '../../myAdmin/ManageProduct/ManageProduct';
import useAuth from '../../../Hooks/useAuth';

const drawerWidth = 220;

function AdminDashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    let { path, url } = useRouteMatch();
    const { logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div>
            <Toolbar style={{ color: 'white', backgroundColor: '#052046', }}>
                <Nav.Link style={{ color: 'white' }} as={NavLink} to='/home'>Go Home</Nav.Link>
            </Toolbar>

            {
                admin && <Box>
                    <Nav.Link style={{ color: 'black' }} as={NavLink} to={`${url}/addProduct`}> Add Product</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} as={NavLink} to={`${url}/makeAdmin`}>Make Admin</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} as={NavLink} to={`${url}/manageOrders`}>Manage All Orders</Nav.Link>
                    <Nav.Link style={{ color: 'black' }} as={NavLink} to={`${url}/manageProduct`}> Manage Product</Nav.Link>
                </Box>
            }

            <Nav.Link style={{ color: '' }} onClick={logOut}  >logout</Nav.Link>



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
                    <Typography variant="h6" noWrap component="div">
                        Admin Dashboard
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
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/manageOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProduct`}>
                        <ManageProduct></ManageProduct>
                    </Route>
                </Switch>
            </Box>
        </Box >
    );
}

AdminDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AdminDashboard;
