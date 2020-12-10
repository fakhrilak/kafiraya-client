import React, { useEffect, useState } from 'react'
import Modal from "../../components/Modal/Modal";
import {getItem} from "../../redux/action/Item"
import {postSaleItem} from "../../redux/action/saleitem";
import {getTmasukId} from "../../redux/action/Tmasuk";
import {getBuyerId} from "../../redux/action/buyer";
import {connect} from "react-redux";
import DropDown from "../../components/DropMassage/DropMassage"
import LandingPage from '../LandingPage/LandingPage';
import { postTkeluar } from '../../redux/action/tkeluar';
const AdditemTransaction = ({
    Tambah,
    setTambah,
    match,
    postSaleItem,
    getItem,
    setCode,
    item:{item},
}) => {
    const right = "5%"
    const left = "5%"
    let Jual,ItemId;
    const [Banyak,setBanyak]=useState("")
    const [cari,setCari] = useState()
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);

    useEffect(()=>{
        getItem()
    },[])
    
  const HandlePush=()=>{
    setCode("AddItemTranskeluar")
    postSaleItem(`${ItemId}`,`${Jual}`,Banyak,match)
      
  }

  const handleChange = event => {
    setSearchTerm(event.target.value);
  }
  React.useEffect(() => {
    const results = item.filter(data =>
        data.namabarang.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
    }, [searchTerm]);

  return (
    <div onDoubleClick={()=>setTambah(!Tambah)}>
        <Modal show={Tambah} left={left} right={right}>
            <div>
                <h1>Add Item Transaction</h1>
                <h3>Transaksi No : {match}</h3>
                <div className="wrapper-barcode">
                    <input
                    type="text"
                    placeholder="Search Nama"
                    value={searchTerm}
                    onChange={handleChange}
                    />
                </div>
            </div>
                    {searchResults[0] ? (searchResults.map((item)=>(
                       <div className="Additem">
                            <div>
                                <div className="wrapper-item">
                                    {item.namabarang}
                                </div>
                            </div>
                            <div>
                                <div className="wrapper-item">
                                    {item.jual}
                                </div>                                
                            </div>
                            <div>
                                <div className="wrapper-item">
                                    {item.stock}
                                </div>                                
                            </div>
                            <div>
                                <div className="wrapper-action">
                                    <input
                                    placeholder= "Jumlah"
                                    value={Banyak}
                                    onChange={e => setBanyak(e.target.value)}
                                    />
                                </div>                                
                            </div>
                            <div className="wrapper-action">
                                <button onClick={()=>HandlePush()}>Add</button>
                            </div>
                        </div>
                    ))):null}
            
            </Modal>    
        </div>
  )
}
const mapStateToProps = (state)=>({
    buyer : state.buyer,
    saleitem : state.saleitem,
    item : state.item
  })
  export default connect(mapStateToProps,{getBuyerId,postSaleItem,getItem})(AdditemTransaction) ; 
