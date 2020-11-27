import React, { useEffect,useState } from 'react'
import {getCategory} from "../../redux/action/category"
import {connect} from "react-redux"
import Table from "../../components/Tabel/Tabel"
import Crud from  "../../components/Crud/Crud"
import {Head,form} from "./DataCategory"
const Kategori = ({getCategory,category:{category}}) => {
  const [Tambah,setTambah]= useState(false)
  const [Delet,setDelet] = useState(false)
  const [Edit,setEdit] = useState(false)
    useEffect(()=>{
        getCategory()
    },[Tambah])
    
    const code = "category"
  return (
    <div>
        <Crud Tambah={Tambah} 
        setTambah={setTambah} 
        form={form} 
        code={code} 
        setDelet={setDelet}
        Delet={Delet}
        Edit={Edit}
        setEdit={setEdit}
        />
      <div>
          <Table item={category} 
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
    category : state.category
})
export default connect(mapStateToProps,{getCategory})(Kategori) ;
