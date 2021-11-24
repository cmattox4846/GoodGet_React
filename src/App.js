import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderAndNav from './components/HeaderAndNav/HeaderAndNav';
import HomePage from './components/HomePage/HomePage';
import ProductTable from './components/ProductTable/ProductTable';
import SellProductTable from './components/SellProductTable/SellProductTable';
import LoginScreen from './components/LoginScreen/LoginScreen';
import axios from 'axios'
import UserRegistration from './components/UserRegistration/UserRegistration';
import ProfilePage from './components/ProfilePage/ProfilePage';

function App() {
  const [productId, setProductId] = useState([])
  const [productList, setProductList] = useState([])
  const [userData, setUserData] = useState({})

  useEffect(() =>{
    getProducts()
  },[productList])

  const getProducts = async () => {
    debugger
    let response = await axios.get('https://localhost:44394/api/Products')
    setProductList(response.data.Name)
    console.log(response.data)
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
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductTable productList={productList}/>} />
            <Route path="/sellProducts" element={<SellProductTable />} />
            <Route path="/userRegistration" element={<UserRegistration registerUser={registerUser} />} />
            <Route path="/Profile" element={<ProfilePage userData={userData}/>}/>
          </Routes>
        </Router>
      </div>
  );
}


export default App;
