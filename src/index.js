import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './user/app/App';
import reportWebVitals from './reportWebVitals';
import {ProductDetails} from "./user/details/productDetails";
import {Login} from "./user/login/login";
import {AdminDashboard} from "./admin/dashboard/adminDashboard";
import {AddProduct} from "./admin/products/addProduct";
import {EditProduct} from "./admin/products/editProduct";
import {UserAdministration} from "./admin/user/userAdministration";
import {Register} from "./user/login/register";
import {AddUser} from "./admin/user/addUser";
import {ShoppingCart} from "./user/cart/shoppingCart";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {NavBar} from "./user/app/navBar";

export const UserContext = React.createContext(null);

function CurrentUser(props){
    const [user, setUser] = useState(
        {userID: 0,firstname: "", lastname: "" , password: "", mail: "", admin: 0}
    );
    const value = { user, setUser };

    return <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <CurrentUser>
          <BrowserRouter>

              <NavBar />
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />}/>
                  <Route path="/dashboard" element={<AdminDashboard />}/>
                  <Route path="/shoppingCart" element={<ShoppingCart />}/>
                  <Route path="/productDetails" element={<ProductDetails />}/>
                  <Route path="/user" element={<UserAdministration />}/>
                  <Route path="/addP" element={<AddProduct />}/>
                  <Route path="/addU" element={<AddUser />}/>
                  <Route path="/editP" element={<EditProduct />}/>
              </Routes>
          </BrowserRouter>
      </CurrentUser>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
