import React, { useEffect, useState } from 'react'
import {getItem} from '../../redux/action/Item'
import {Head} from '../Item/DataItem'
import {connect} from "react-redux"
import "./ItemAdmin.css"
const ItemAdmin = ({getItem,item:{item}}) => {
    useEffect(()=>{
        getItem()
    },[])


    var modal = 0;  
    var i;
    for (i = 0; i < item.length; i++) { 
        modal += (item[i].beli * item[i].stock);  
    }

    var omzet = 0;
    for (i = 0; i < item.length; i++) { 
        omzet += (item[i].jual * item[i].stock);  
    }
  return (
    <div>
        <div className="Heading">
            <div className="Heading-content">
                <h1>{modal}</h1>
                <h3>Modal</h3>
            </div>
            <div className="Heading-content">
                <h1>{omzet}</h1>
                <h3>Omset</h3>
            </div>
        </div>   
      <div className = "outtable">
      <table>
            <thead>
                <tr>
                    {Head.map((head)=>(
                        <th className={head.class}>{head.Judul}</th>
                        
                    ))}
                </tr>
            </thead>
            <tbody>
                {item.map((item)=>(
                    <tr>
                        <td>{item.kode}</td>
                        <td>{item.namabarang}</td>
                        <td>{item.beli}</td>
                        <td>{item.jual}</td>
                        <td>{item.satuan.nama}</td>
                        <td>{item.stock}</td>
                        <td>{item.category.nama}</td>
                        <td>{item.sales.pt}</td>
                    </tr>
                ))}               
            </tbody>
        </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    item : state.item
})
export default connect(mapStateToProps,{getItem})(ItemAdmin) ;
