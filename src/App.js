import React, {Component} from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HeaderAndNav from './components/HeaderAndNav/HeaderAndNav'
import HomePage from './components/HomePage/HomePage';
import ProductTable from './components/ProductTable/ProductTable'
import SellProductTable from './components/SellProductTable/SellProductTable'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
    <div>
      <Router>
        <HeaderAndNav />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/products" element={<ProductTable />} />
          <Route path="/sellProducts" element={<SellProductTable />} />
        </Routes>
      </Router>
      
    </div>  );
  }
}
 
export default App
;
