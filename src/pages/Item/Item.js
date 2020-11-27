import React,{useEffect,useState} from 'react'
import {getItem} from "../../redux/action/Item";
import { connect } from "react-redux";
import Tabel from "../../components/Tabel/Tabel"
import Crud from "../../components/Crud/Crud"
import {Head,form} from "./DataItem"
const Item = ({getItem,item:{item}}) => {
  const [Tambah,setTambah]= useState(false)
  const [Delet,setDelet] =useState(false)
  const [Edit,setEdit] =useState(false)
    useEffect(()=>{
        getItem()
    },[Tambah])
    const code = "Item"
    
  return (
    <div>
      <Crud 
      Tambah={Tambah} 
      setTambah={setTambah} 
      form={form} 
      setDelet={setDelet} 
      Delet={Delet}
      code={code}
      Edit={Edit}
      setEdit={setEdit}
      />
      <div>
        <Tabel 
        item={item} 
        Head={Head} 
        code={code} 
        form={form} 
        Delet={Delet}
        Edit={Edit}
        />
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    item : state.item
})
export default connect(mapStateToProps,{getItem})(Item) ;

