import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import AdminDashboard from './Pages/Dashboard/AdminDashboard/AdminDashboard';
import UserDashboard from './Pages/Dashboard/UserDashboard/UserDashboard';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products/Products';
import Login from './Pages/Login/Login/Login';
import PrivateRoute from './Pages/Login/PrivetRoute/PrivateRoute';
import Register from './Pages/Login/Register/Register';
import Buy from './Pages/User/Buy/Buy';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <PrivateRoute path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <PrivateRoute path="/userdb">
              <UserDashboard></UserDashboard>
            </PrivateRoute>
            <PrivateRoute path="/buy/:buyId">
              <Buy></Buy>
            </PrivateRoute>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
