import React,{useEffect,useState} from 'react'
import Crud from "../../components/Crud/Crud";
import "../DetailTmasuk/Detail.css"
import {getTkeluarId,editTkeluar} from "../../redux/action/tkeluar"
import {connect} from "react-redux"
import AddItem from "./AddItemTkelauar"
import {useHistory} from "react-router-dom"

const DetailTkeluar = ({tkeluar:{TkeluarId,Buyer,Items},match,getTkeluarId,editTkeluar}) => {
    const [Tambah,setTambah]= useState(false)
    const [Delet,setDelet] =useState(false)
    const [Edit,setEdit] =useState(false)
    const [Input,setInput] =useState("")
    const [Kembalian,setKembalian] = useState()
    const [code,setCode] = useState("DetailTkeluar")
    useEffect(()=>{
        getTkeluarId(match.params.id)
    },[TkeluarId.sisa])
    var Jumlah = 0
    const TotItem = (banyak , harga)=>{
      const data = banyak * harga
      Jumlah += data
      return data
    }
    const HandleUpdate=()=>{
      getTkeluarId(match.params.id)
      editTkeluar(match.params.id,Input,Jumlah)
      setCode("DetailTkeluar")
      setInput("")
    }
    const history = useHistory()
    const HandlePrint=()=>{
        history.push(`/print/${match.params.id}`)
    }

    const Hitung = ()=>{
        setKembalian(Input - Jumlah)
        let bayar = Input - Kembalian
        editTkeluar(match.params.id,bayar,Jumlah)
    }
  return (
    <div>
        <div>
        <AddItem
        Tambah={Tambah} 
        match={match.params.id} 
        setTambah={setTambah} 
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
              <h1>Transaksi Masuk No : {TkeluarId.id}</h1>
          </div>
          <div>
              <h3>Nama Suplier : {Buyer.nama}</h3>
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
                          <td>{TkeluarId.sisa}</td>
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
                      <td >{Kembalian > 0 ? (<p>Kembalian = {Kembalian}</p>):(<p>0</p>)}</td>
                          <td ><button onClick={()=>HandlePrint()} className="Button">PRINT</button></td>
                          <td >{Input>=Jumlah && <button className="Button" onClick={()=>Hitung()}>HITUNG</button>}</td>
                          <td >{Input < Jumlah && <button onClick={()=>HandleUpdate()} className="Button">BAYAR</button>}</td>
                      </tr>               
                  </tbody>
              </table>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    tkeluar : state.tkeluar
  })

export default connect(mapStateToProps,{getTkeluarId,editTkeluar})(DetailTkeluar) ;
