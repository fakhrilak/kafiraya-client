import React,{useEffect,useState} from 'react';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import Login from "./components/Login/Login"
import AdminRoute from './components/Routing/AdminRoute'
import UserRoute from './components/Routing/UserRoute'
import LandingPage from './pages/LandingPage/LandingPage'
import Category from "./pages/Kategori/Kategori";
import Satuan from "./pages/Satuan/Satuan"
import Sales from './pages/Sales/Sales';
import Tentang from './pages/Informasi/Tentang'
import Item from './pages/Item/Item'
import { setAuthToken } from "./config/api";
import { Provider } from "react-redux";
import { loadUser } from "./redux/action/auth";
import ItemAdmin from "./pages/ItemAdmin/ItemAdmin";
import store from "./redux/store/store";
import ModalLogin from "./components/Login/Login";
import Beli from "./pages/Beli/Beli";
import Detail from "./pages/DetailTmasuk/Detail";
import Transaksi from "./pages/Transaksi/TransaksiBeli";
import Pelanggan from "./pages/Pelanggan/Pelanggan";
import Kasir from "./pages/Kasir/Kasir";
import DetailTkeluar from "./pages/DetailTkeluar/DetailTkeluar";
import Barang from "./pages/Barang/Barang"
import Print from "./pages/Print/Print"

import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
    }, []);

  const [HandleLogin,setHandleLogin]=useState(false)
  return (
    <Provider store={store}>
      <div className="App">    
          <Router>  
            <div>
               <Navbar />
            </div>            
              <div className="Container"> 
                <div  className="page">
                <Switch>
                  <Route exact path="/">
                          <LandingPage HandleLogin={HandleLogin} setHandleLogin={setHandleLogin}/>
                  </Route>
                  <UserRoute exact path="/tentang" component={Tentang}/>
                  <UserRoute exact path="/item" component={Item}/>
                  <UserRoute exact path="/suplier" component={Sales}/>
                  <UserRoute exact path="/kategori" component={Category}/>
                  <UserRoute exact path="/satuan" component={Satuan}/>
                  <UserRoute exact path="/keuangan" component={ItemAdmin}/>
                  <UserRoute exact path="/beli" component={Beli}/>
                  <UserRoute exact path="/tin/:id" component={Detail}/>
                  <UserRoute exact path="/transaksi" component={Transaksi}/>
                  <UserRoute exact path="/pelanggan" component={Pelanggan}/>
                  <UserRoute exact path="/kasir" component={Kasir}/>
                  <UserRoute exact path="/tout/:id" component={DetailTkeluar}/>
                  <UserRoute exact path="/barang" component={Barang}/>
                  <UserRoute exact path="/print/:id" component={Print}/>
                </Switch> 
                </div>  
              </div>              
          </Router>
          {HandleLogin && <ModalLogin HandleLogin={HandleLogin} setHandleLogin={setHandleLogin}/>}     
      </div>
    </Provider>
  );
}

export default App;
