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
import jwtDecode from 'jwt-decode'
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import ProductDetails from './components/ProductTable/ProductTable';
import DetailTable from './components/ProductDetail/ProductDetail';



function App() {
  //const [productId, setProductId] = useState([])
  const [productList, setProductList] = useState([])
  //const [userData, setUserData] = useState({})
  const [user, setUser] = useState({})
  //const [userLogin, setUserLogin] = useState([])
  //const [jwt, setJwt] = useState()
  const [loadData, setLoadData] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [loadShoppingCart, setLoadShoppingCart] = useState(false)
  const [details, setDetails] = useState([])
  const [reviews, setReviews] = useState([])
  
  // const [detailsLoad, setDetailsLoad] = useState("")



  
 
  useEffect(() =>{
    getProducts()
  },[loadData])

  useEffect(() => {
    getShoppingCart()
  },[loadShoppingCart])

  useEffect(() =>{
    //forceRerender
  },[productList])

  useEffect(() =>{
  
  }, [details])

  

 //Get user login
 
 const loginUser = async (loginUser) => {
  let response= await axios.post('https://localhost:44394/api/authentication/login', loginUser);
  localStorage.setItem('token', response.data.token);
  console.log("response axios call", response.data.token)
  getUserJWT();
}

  const getUserJWT = () => {
    const jwt = localStorage.getItem('token');
    try {
      const user = jwtDecode(jwt);
      setUser(user)
     // setLoadData(!loadData)
      console.log("get user jwt call", user)
      console.log(jwt)
    } catch (error) {
      console.log("Error in decoding JWT token: ", error)
      setUser({})
    }

  }

  const logOut = ()=>{
    localStorage.removeItem("token");
    setUser({})
    console.log("logged user out")
  }
  //register user
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
  // get all products
  const getProducts = async () => {
    const jwt = localStorage.getItem('token');
    let response = await axios.get('https://localhost:44394/api/Products', { headers: {Authorization: 'Bearer ' + jwt}})
    setProductList(response.data)  
  }
  const sellProduct = async (objectBeingPassedIn) => {
    let decimalPrice = parseInt(objectBeingPassedIn.price)
    let newProduct = {
        name: objectBeingPassedIn.name,
        description: objectBeingPassedIn.description,
        price: decimalPrice,
    }
    const jwt = localStorage.getItem('token')
    console.log("Saved token: " + jwt)
    try {

      await axios.post('https://localhost:44394/api/Products/', newProduct, {headers:{Authorization:'Bearer ' + jwt}})
    }
    catch (err) {
      console.log("Errors with Product Post API call: ", err)
    }

  }

  const searchForProduct = async (productName) => {
    console.log("api call for product search", productName)
    const jwt = localStorage.getItem('token')
    let response = await axios.get('https://localhost:44394/api/Products/' + (productName) + '/' , {headers:{Authorization:'Bearer ' + jwt}})
    console.log(response.data)
    setProductList(response.data)
    
  }
  
  const getShoppingCart = async () => {
    try {
      const jwt = localStorage.getItem('token');
      let response = await axios.get('https://localhost:44394/api/ShoppingCart', {headers:{Authorization:'Bearer ' + jwt}})
      console.log(response.data)
      setShoppingCart(response.data)
    }
    catch (err){
      console.log("Errors with shopping cart", err)
    }
  }

  const addToShoppingCart = async (addItem) => {
    console.log(addItem)
    let newProduct = {
      Userid: user.id,
      ProductId: addItem.id,
      Quantity: 1}
    const jwt = localStorage.getItem('token')
    let response = await axios.post('https://localhost:44394/api/ShoppingCart', newProduct, {headers:{Authorization:'Bearer ' + jwt}})
    setLoadShoppingCart(!loadShoppingCart)
  }
  
  const seeProductDetails = (viewDetails) =>  {
    console.log("these are the details" + viewDetails)
    let details = productList.filter((detailsOfProducts) => detailsOfProducts.id === viewDetails)
    console.log(details)
    setDetails(details[0])
    // console.log(details)
    
   
  }

  const deleteShoppingCart = async (item) => {
    const jwt = localStorage.getItem('token');
    let response = await axios.delete(`https://localhost:44394/api/ShoppingCart/${item}`, {headers:{Authorization:'Bearer ' + jwt}})
    setLoadShoppingCart(!loadShoppingCart)
  }

 // Reviews Section

 const getReviews = async () => {
  try {
    const jwt = localStorage.getItem('token');
    let response = await axios.get('https://localhost:44394/api/review', {headers:{Authorization:'Bearer ' + jwt}})
    console.log(response.data)
    setReviews(response.data)
  }
  catch (err){
    console.log("Errors loading reviews", err)
  }
}

const addReviews = async (addItem) => {
  console.log(addItem)
  let newReview = {
    Review: addItem.review,
    Rating: addItem.rating,
    ReviewId: addItem.id}
  const jwt = localStorage.getItem('token')
  let response = await axios.post('https://localhost:44394/api/review', newReview, {headers:{Authorization:'Bearer ' + jwt}})
  getReviews()
  }  



    return (
      <div className="background">
        <Router>
          <HeaderAndNav productSearch={searchForProduct} logout={logOut}/>
          <Routes>
            <Route path="/Profile" element={<ProfilePage user={user}/>}/>
            <Route path="/login" element={<LoginScreen loginUserCall={loginUser}  />} />        
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductTable listOfProducts={productList} add={addToShoppingCart} getAllProducts={getProducts} view={seeProductDetails} details={details}/> }  />            
            <Route path="/sellProducts" element={<SellProductTable sellProduct={sellProduct}/>} />
            <Route path="/userRegistration" element={<UserRegistration registerUser={registerUser} />} />
            <Route path="/ShoppingCart" element={<ShoppingCart list={shoppingCart} delete={deleteShoppingCart} />} />
            <Route path="/ProductDetail" element={<DetailTable details={details} productReviews={reviews} addProductReview={addReviews} /> } />
          </Routes>
        </Router>        
      </div>
  );
}


export default App;
