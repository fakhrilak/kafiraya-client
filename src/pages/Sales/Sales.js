import React, { useEffect, useState } from 'react'
import {getSales}from '../../redux/action/sale'
import {connect} from "react-redux"
import Table from "../../components/Tabel/Tabel"
import {Head , form} from "./DataSales"
import Crud from "../../components/Crud/Crud"
const Sales = ({getSales,sales:{sales}}) => {
  const [Tambah,setTambah]= useState(false)
  const [Delet,setDelet]= useState(false)
  const [Edit,setEdit] = useState(false)
  
    useEffect(()=>{
        getSales()
    },[Tambah])
    
    const code = "seles"    
  return (
    <div>
      <Crud 
        Tambah={Tambah} 
        setTambah={setTambah} 
        form={form}
        code={code}
        setDelet={setDelet}
        Delet={Delet}
        Edit={Edit}
        setEdit={setEdit}
        />
      <div>
        <Table 
        item={sales} 
        Head={Head} 
        code={code}
        Delet={Delet}
        Edit={Edit}
        />
      </div> 
    </div>
  )
}

const mapStateToProps = (state)=>({
    sales : state.sales
})
export default connect(mapStateToProps,{getSales})(Sales) ;
