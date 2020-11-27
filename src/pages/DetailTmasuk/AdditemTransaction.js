import React, { useEffect, useState } from 'react'
import Modal from "../../components/Modal/Modal";
import {getSalesId} from "../../redux/action/sale";
import {postBuyItem} from "../../redux/action/buyitem";
import {getTmasukId} from "../../redux/action/Tmasuk"
import {connect} from "react-redux";
import DropDown from "../../components/DropMassage/DropMassage"
const AdditemTransaction = ({Tambah,
    setTambah,
    match,
    getSalesId,
    sales:{salesId},
    Sales,
    postBuyItem,
    buyitem:{error},
    setCode
}) => {
    const right = "20%"
    const left = "20%"
    const [Beli,setBeli]=useState("")
    const [Banyak,setBanyak]=useState("")
    const [ItemId,setItemId]=useState("")
    useEffect(()=>{
        getSalesId(Sales)
    },[Sales,error])
  const HandlePush=()=>{
    setCode("AddItemTrans")  
      postBuyItem(ItemId,Beli,Banyak,match)
      if (error === false){
          getTmasukId(match)
          setBeli("")
          setBanyak("")
      }     
  }
  return (
    <div onDoubleClick={()=>setTambah(!Tambah)}>
        <Modal show={Tambah} left={left} right={right}>
            <div>
                <h1>Add Item Transaction</h1>
                <h3>Transaksi No : {match}</h3>
            </div>
            <div>                                 
                <div className="Render-Item">
                    <div className="Item-Render">
                        <select 
                        className="dropdown-additems"
                        onChange={e => setItemId(e.target.value)}
                        >
                            <option value="" disabled selected>Select Item</option>
                            {salesId.Items ? (salesId.Items.map((item)=>(                       
                                <option value={item.id} key={item.id}>
                                    {item.namabarang}
                                </option>
                            ))):null}
                        </select>
                    </div>
                    <div className="Item-Render">
                        <input
                        placeholder="Harga"
                        value={Beli}
                        onChange={e => setBeli(e.target.value)}
                        />
                    </div>
                    <div  className="Item-Render">
                        <input
                        placeholder="Jumlah"
                        value={Banyak}
                        onChange={e => setBanyak(e.target.value)}
                        />
                    </div>
                    <div className="Item-Render">
                        <button onClick={()=>HandlePush()}>Add</button>
                    </div>
                </div>               
            </div>
            
        </Modal>    
    </div>
  )
}
const mapStateToProps = (state)=>({
    sales : state.sales,
    buyitem : state.buyitem,
  })
  export default connect(mapStateToProps,{getSalesId,postBuyItem})(AdditemTransaction) ; 
