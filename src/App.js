import React, { useEffect, useState} from 'react';
// import jwtDecode from 'jwt-decode;'
import jwtDecode from 'jwt-decode';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderAndNav from './components/HeaderAndNav/HeaderAndNav';
import HomePage from './components/HomePage/HomePage';
import ProductTable from './components/ProductTable/ProductTable';
import SellProductTable from './components/SellProductTable/SellProductTable';
import LoginScreen from './components/LoginScreen/LoginScreen';
import axios from 'axios'

function App() {
  const [productId, setProductId] = useState([])
  const [productList, setProductList] = useState([])
  const [user, setUser] = useState("")
  const [userLogin, setUserLogin] = useState([])

  const getUserJWT = () => {
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      setUser(user)
      console.log(user)
    } catch (error) {
      console.log("Error in decoding JWT token: ", error)
    }
  }

  useEffect(() =>{
    getUserLogin();
  },[])

  useEffect(() =>{
    getProducts()
  },[productId])

  // Get user login
  const getUserLogin = async () => {
    const jwt = localStorage.getItem('token');
    const response = await axios.get('https://localhost:44394/api/authentication/user', { headers: {Authorization: 'Bearer ' + jwt}});
    setUserLogin(userLogin);
  }

  // Get Product info on id change 

  const getProducts = async () => {
    debugger
    let response = await axios.get('https://localhost:44394/api/Products')
    setProductList(response.data.Name)
    console.log(response.data)
  }

  // * CAll back functions
  const loginUser = async (loginUser) => {
    let response= await axios.post('https://localhost:44394/api/authentication/login', loginUser);
    localStorage.setItem('token', response.data.token);
    console.log(response.data.token)
    
  }
  registerUser = async (objectBeingPassedIn) => {

    let newUser = {
        firstName: objectBeingPassedIn.firstName,
        lastName: objectBeingPassedIn.lastName,
        password: objectBeingPassedIn.password,
        userName: objectBeingPassedIn.userName,
        email: objectBeingPassedIn.email,
        phoneNumber: objectBeingPassedIn.phoneNumber 
    }

    await axios.post('https://localhost:44394/api/authentication', newUser)





  
    return (
      <div>
        <Router>
          <HeaderAndNav />
          <Routes>
            <Route path="/login" element={<LoginScreen loginUserCall={loginUser} />} />
            <Route path="/" element={<HomePage />} />                    
            <Route path="/products" element={<ProductTable productList={productList}/>} />
            <Route path="/sellProducts" element={<SellProductTable />} />
          </Routes>
        </Router>
      </div>
  );
}

}
export default App
;
