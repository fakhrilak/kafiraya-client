import React,{useEffect, useState} from 'react'
import Crud from "../../components/Crud/Crud";
import "./Detail.css"
import {getTmasukId,editTmasuk, getTmasuk} from "../../redux/action/Tmasuk"
import {connect} from "react-redux"
import AddItem from "./AdditemTransaction"
const Detail = ({
    getTmasukId,
    match,
    tmasuk:{TmasukId,Sales,Items},
    editTmasuk
}) => {
    const [Tambah,setTambah]= useState(false)
    const [Delet,setDelet] =useState(false)
    const [Edit,setEdit] =useState(false)
    const [Input,setInput] =useState("")
    const [code,setCode] = useState("Detail")

    useEffect(()=>{
        getTmasukId(match.params.id)
    },[])
    var Jumlah = 0
    const TotItem = (banyak , harga)=>{
      const data = banyak * harga
      Jumlah += data
      return data
    }
    const HandleUpdate=()=>{
      editTmasuk(match.params.id,Input,Jumlah)
      getTmasukId(match.params.id)
      setCode("Detail")
    }

  return (
    <div>
        <div>
            <AddItem 
            Tambah={Tambah} 
            match={match.params.id} 
            setTambah={setTambah} 
            Sales={Sales.id}
            setCode={setCode}
            />
        </div>
      <div>
            <Crud
            Tambah={Tambah}
            setTambah={setTambah}
            Delet={Delet}
            setDelet={setDelet}
            Edit={Edit}
            code={code}
            setEdit={setEdit}
            setCode={setCode}
            />
      </div>
      <div>
          <div>
              <h1>Transaksi Masuk No : {TmasukId.id}</h1>
          </div>
          <div>
              <h3>Nama Suplier : {Sales.pt}</h3>
          </div>
          <div className = "outtable">
            <table>
                <thead>
                    <tr>
                        <th className="Nama-barang">Nama</th>
                        <th className="Nama-barang">Banyak</th>
                        <th className="Nama-barang">Harga</th>
                        <th className="Nama-barang">Jumlah</th>
                    </tr>
                </thead>
                  <tbody>
                      {Items.map((items)=>(
                          <tr>
                              <td>{items.Item.namabarang}</td>
                              <td>{items.banyak}</td>
                              <td>{items.beli}</td>
                              <td>{TotItem(items.banyak,items.beli)}</td>
                          </tr>
                      ))}
                      <tr>
                          <td></td>
                          <td></td>
                          <td style={{float:'right'}}>Jumlah</td>
                          <td>{Jumlah}</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td style={{float:'right'}}>Sisa</td>
                          <td>{TmasukId.sisa}</td>
                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td style={{float:'right'}}>Bayar</td>
                          <td><input
                          placeholder="Bayar Tagihanmu Disini"
                          className="Input"
                          value={Input}
                          onChange={e => setInput(e.target.value)}
                          /></td>
                      </tr>
                      <tr>
                          <td></td>
                          <td></td>
                          <td style={{float:'right',color:"white"}}></td>
                          <td><button onClick={()=>HandleUpdate()} className="Button">BAYAR</button></td>
                      </tr>               
                  </tbody>
              </table>
          </div>
      </div>
    </div>

  )
}

const mapStateToProps = (state)=>({
    tmasuk : state.tmasuk
  })

export default connect(mapStateToProps,{getTmasukId,editTmasuk})(Detail) ;
