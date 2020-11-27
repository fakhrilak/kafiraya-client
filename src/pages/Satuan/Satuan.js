import React, { useEffect,useState } from 'react';
import {getSatuan} from "../../redux/action/satuan";
import {connect} from "react-redux";
import Table  from "../../components/Tabel/Tabel";
import {Head,form} from "../Satuan/DataSatuan";
import Crud from "../../components/Crud/Crud"
const Satuan = ({getSatuan,satuan:{satuan}}) => {
    const [Tambah,setTambah]= useState(false)
    const [Delet,setDelet] = useState(false)
    const [Edit,setEdit] = useState(false)
    useEffect(()=>{
        getSatuan()
    },[Tambah])
    
    const code = "satuan"
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
            item={satuan} 
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
    satuan : state.satuan
})
export default connect(mapStateToProps,{getSatuan})(Satuan) ;
