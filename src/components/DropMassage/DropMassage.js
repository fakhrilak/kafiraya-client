import React, { useState } from 'react'
import "./DropMassage.css"
import {connect} from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faInbox, faPlus, faSms, faTrash } from '@fortawesome/free-solid-svg-icons'


const DropMassage = ({
    code,
    item:{massageItem},
    category:{massageCategory},
    sales:{massageSales},
    satuan:{massageSatuan},
    tmasuk:{massageTmasuk},
    buyitem:{massageBuyItem},
    saleitem:{massageSaleItem},
    tkeluar:{massageTkeluar}
}) => {
  console.log(code)
  return (
    <div>
      <div className="profile-square">
        <div className="profile-arrow" />
            <div className="profile-dropdown-icon">
                <div className="konten">
                    <div>
                        <FontAwesomeIcon 
                    icon={faInbox} 
                    style={{color:'green'}} 
                    />
                    </div>
                    <div style={{paddingLeft:10}}>
                        {code === "category" && <div>{massageCategory}</div>}
                        {code === "seles" && <div>{massageSales}</div>} 
                        {code === "satuan" && <div>{massageSatuan}</div>}
                        {code === "Item" && <div>{massageItem}</div>}
                        {code === "Beli" && <div>{massageTmasuk}</div>}
                        {code === "Detail" && <div>{massageTmasuk}</div>}
                        {code === "AddItemTrans"  && <div>{massageBuyItem}</div>}
                        {code === "Kasir" && <div>{massageTkeluar}</div>}
                        {code === "AddItemTranskeluar"  && <div>{massageSaleItem}</div>}
                        {code === "DetailTkeluar" && <div>{massageTkeluar}</div>}
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    item : state.item,
    category: state.category,
    sales : state.sales,
    satuan : state.satuan,
    tmasuk : state.tmasuk,
    buyitem : state.buyitem,
    saleitem : state.saleitem,
    tkeluar : state.tkeluar
})
export default connect(mapStateToProps,{})(DropMassage) ;
