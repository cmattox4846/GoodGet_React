import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import HeaderAndNav from './components/HeaderAndNav/HeaderAndNav';
import HomePage from './components/HomePage/HomePage';
import ProductTable from './components/ProductTable/ProductTable';
import SellProductTable from './components/SellProductTable/SellProductTable';
import LoginScreen from './components/LoginScreen/LoginScreen';
import axios from 'axios'
import UserRegistration from './components/UserRegistration/UserRegistration';
import ProfilePage from './components/ProfilePage/ProfilePage';
import jwtDecode from 'jwt-decode'

function App() {
  const [productId, setProductId] = useState([])
  const [productList, setProductList] = useState([])
  const [userData, setUserData] = useState({})
  const [user, setUser] = useState("")
  const [userLogin, setUserLogin] = useState([])
  const [jwt, setJwt] = useState()
  const [loadData, setLoadData] = useState(false)

  const getUserJWT = () => {
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      setUser(user)
      console.log("get user jwt call", user)
      console.log(jwt)
    } catch (error) {
      console.log("Error in decoding JWT token: ", error)
    }
  }

  useEffect(() =>{
    getUserJWT();
    getUserLogin();
    setLoadData(!loadData)   
  },[])

  useEffect(() =>{
    getProducts()
  },[loadData])

// Get user login
const getUserLogin = async () => {
  setJwt(localStorage.getItem('token'));
  const response = await axios.get('https://localhost:44394/api/authentication/user', { headers: {Authorization: 'Bearer ' + jwt}});
  setUserLogin(userLogin);
}

  const getProducts = async () => {
    const jwt = localStorage.getItem('token');
    let response = await axios.get('https://localhost:44394/api/Products', { headers: {Authorization: 'Bearer ' + jwt}})
    setProductList(response.data)  
  }

  
  
  const loginUser = async (loginUser) => {
    let response= await axios.post('https://localhost:44394/api/authentication/login', loginUser);
    localStorage.setItem('token', response.data.token);
    console.log("response axios call", response.data.token)
    
  }
  
  const registerUser = async (objectBeingPassedIn) => {

    let newUser = {
        firstName: objectBeingPassedIn.firstName,
        lastName: objectBeingPassedIn.lastName,
        password: objectBeingPassedIn.password,
        userName: objectBeingPassedIn.userName,
        email: objectBeingPassedIn.email,
        phoneNumber: objectBeingPassedIn.phoneNumber 
    }

    await axios.post('https://localhost:44394/api/authentication', newUser)
  }



    return (
      <div>
        <Router>
          <HeaderAndNav />
          <Routes>
            <Route path="/Profile" render={props =>{
              if (!user){
                return <Route path="/Profile" element= {<Navigate replace to="/login" />} />
              } else {
                return <ProfilePage {...props} user={user}/>
              }
            }} element={<ProfilePage userData={userData}/>}/>
            <Route path="/login" element={<LoginScreen loginUserCall={loginUser}/>} />        
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductTable listOfProducts={productList}/>} />
            <Route path="/sellProducts" element={<SellProductTable />} />
            <Route path="/userRegistration" element={<UserRegistration registerUser={registerUser} />} />
            
          </Routes>
        </Router>
      </div>
  );
}


export default App;
