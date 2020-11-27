import React, { useState } from 'react'
import "./Tabel.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import {deletCategory,getCategoryId}from "../../redux/action/category"
import {deletSales,getSalesId} from "../../redux/action/sale"
import {deletSatuan,getSatuanId} from "../../redux/action/satuan"
import {deletItem,getItem, getItemId} from "../../redux/action/Item"
import {connect} from "react-redux"
import Editt from "../Edit/Edit"
import FilterResults from 'react-filter-search';
const Tabel = ({
    item,
    Head,
    code,
    Delet,
    Edit,
    deletCategory,
    deletItem,
    deletSales,
    deletSatuan,
    getSatuanId,
    getCategoryId,
    getSalesId,
    getItem,
    getItemId
}) => {
    const [modal,setModal]=useState(false)
    const [value,setValue] =  useState("")
    const HandleDelet = (id)=>{
        if(code === "category"){
            deletCategory(id)
        }else if(code === "Item"){
            deletItem(id)
        }else if(code === "seles"){
            deletSales(id)
        }else if(code === "satuan"){
            deletSatuan(id)
        }
    }
    const HandleEdit = (id) =>{
        setModal(!modal)
        if(code === "satuan"){
            getSatuanId(id)
        }else if(code === "category"){
            getCategoryId(id)
        }else if(code === "seles"){
            getSalesId(id)
        }else if(code === "Item"){
            getItemId(id)
        }
    }
    console.log(value)
  return (
    <>
        <div className = "outtable">
            <Editt modal={modal} code={code} setModal={setModal}/>
            <table>
            {/* <thead>
                <tr>
                    <input
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    />
                </tr>
            </thead> */}
            <thead>
                <tr>
                    {Delet && <th>Hapus</th>}
                    {Edit && <th>Edit</th>}
                    {Head.map((head)=>(
                        <th className={head.class}>{head.Judul}</th>                    
                    ))}
                </tr>
            </thead>
            {code === "Item"? (item.map((item)=>(
            <tbody>
                <tr>
                    {Delet && <td><FontAwesomeIcon 
                    icon={faTrash} 
                    style={{color:'red'}}
                    onClick={()=>HandleDelet(item.id)}
                    /></td>}
                    {Edit && <td><FontAwesomeIcon 
                    icon={faEdit} 
                    style={{color:'green'}}
                    onClick={()=>HandleEdit(item.id)}
                    /></td>}                       
                    <td>{item.kode}</td>
                    <td>{item.namabarang}</td>
                    <td>{item.beli}</td>
                    <td>{item.jual}</td>
                    <td>{item.satuan.nama}</td>
                    <td>{item.stock}</td>
                    <td>{item.category.nama}</td>
                    <td>{item.sales.pt}</td>
                </tr>
            </tbody>
            ))):code === "seles" ?(item.map((item)=>(
                    <tbody>
                        <tr>
                            {Delet && <td><FontAwesomeIcon 
                            icon={faTrash} 
                            style={{color:'red'}}
                            onClick={()=>HandleDelet(item.id)}
                            /></td>}
                            {Edit && <td><FontAwesomeIcon 
                            icon={faEdit} 
                            style={{color:'green'}}
                            onClick={()=>HandleEdit(item.id)}
                            /></td>}  
                            <td>{item.pt}</td>
                            <td>{item.nama}</td>
                            <td>{item.kode}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.alamat}</td>                          
                        </tr>
                    </tbody>
                ))):code === "category" ?(item.map((item)=>(
                    <tbody>
                        <tr>
                            
                            {Delet && <td><FontAwesomeIcon 
                            icon={faTrash} 
                            style={{color:'orange'}}
                            onClick={()=>HandleDelet(item.id)}
                            /></td>}
                            {Edit && <td><FontAwesomeIcon 
                            icon={faEdit} 
                            style={{color:'green'}}
                            onClick={()=>HandleEdit(item.id)}
                            /></td>}  
                            <td>{item.nama}</td>
                        </tr>
                    </tbody>
                ))):(
                    
                    item.map((item)=>(
                    <tbody>
                        <tr>
                            
                            {Delet && <td><FontAwesomeIcon 
                            icon={faTrash} 
                            style={{color:'orange'}}
                            onClick={()=>HandleDelet(item.id)}
                            /></td>}
                            {Edit && <td><FontAwesomeIcon 
                            icon={faEdit} 
                            style={{color:'green'}}
                            onClick={()=>HandleEdit(item.id)}
                            /></td>}  
                            <td>{item.nama}</td>
                        </tr>
                    </tbody>
                )))
        }
        </table>
        </div>
    
    </>
  )
}

const mapStateToProps = (state)=>({
    
})
export default connect(mapStateToProps,{
    deletCategory,
    deletSatuan,
    deletSales,
    deletItem,
    getSatuanId,
    getCategoryId,
    getSalesId,
    getItem,
    getItemId
})(Tabel) ;
