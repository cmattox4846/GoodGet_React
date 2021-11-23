import React, {Component, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderAndNav from './components/HeaderAndNav/HeaderAndNav'
import HomePage from './components/HomePage/HomePage';
import ProductTable from './components/ProductTable/ProductTable'
import SellProductTable from './components/SellProductTable/SellProductTable'
import axios from 'axios'

function App() {

  const [productId, setProductId] = useState([])
  const [productList, setProductList] = useState([])

  useEffect(() =>{

  },[productId])

  async function getProducts() {
    let response = await axios.get('https://localhost:44394/api/Products')
    setProductId(response.data.Name)
  }

  render() 
    return (
    <div>
      <Router>
        <HeaderAndNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductTable />} getProducts={getProducts}/>
          <Route path="/sellProducts" element={<SellProductTable />} />
        </Routes>
      </Router>
      
    </div>  );
  }

 
export default App
;
