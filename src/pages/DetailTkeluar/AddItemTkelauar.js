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
    const right = "20%"
    const left = "20%"
    let Jual,ItemId;
    const [Banyak,setBanyak]=useState("")
    const [cari,setCari] = useState()
    useEffect(()=>{
        getItem()
    },[])
  const HandlePush=()=>{
    setCode("AddItemTranskeluar")
    postSaleItem(`${ItemId}`,`${Jual}`,Banyak,match)
      
  }
  let B = [...item] 
  let filtered = B.filter((el)=>el.kode === cari );
  
  if (filtered[0]){
      ItemId = filtered[0].id
      Jual = filtered[0].jual
  }
  
  return (
    <div onDoubleClick={()=>setTambah(!Tambah)}>
        <Modal show={Tambah} left={left} right={right}>
            <div>
                <h1>Add Item Transaction</h1>
                <h3>Transaksi No : {match}</h3>
                <div className="wrapper-barcode">
                    <input
                    placeholder= "Barcode"
                    value={cari}
                    onChange={e => setCari(e.target.value)}
                    />
                </div>
            </div>
            <div>                                 
                {filtered[0] ?(<div>
                    {filtered[0] ? (filtered.map((item)=>(
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
                    ))):(<div>Loading..</div>)}
                    
                    </div>):null}              
            </div>
            
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
