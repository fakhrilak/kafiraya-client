import React,{useEffect} from 'react'
import {connect} from "react-redux"
import {getBuyitem} from "../../redux/action/buyitem"
import {Head} from "./DataItemterjual"
import "./Barang.css"
const BeliBarang = ({getBuyitem,buyitem:{itemterbeli,item},slide,setSlide}) => {
    useEffect(()=>{
        getBuyitem()
    },[])

    let no=1
    const Hitung =(a,b)=>{
        const c = (a * b)
        return c
    }
    var Jumlah = 0;
    for (let i = 0; i < item.length; i++) { 
        Jumlah += (item[i].beli * item[i].banyak);  
    }
  return (
    <div >
        <div className="Heading-content">
            <h1 onClick={()=>setSlide(!slide)}>{Jumlah}</h1>
            <h3>Total Pembelian Barang</h3>
        </div>
    <div className="Continer-barang">
      <table>
        <thead>
            <tr>
                {Head.map((head)=>(
                    <th className={head.class}>{head.Judul}</th>
                    
                ))}
            </tr>
        </thead>
        {itemterbeli.map((item)=>(
           <tbody>
                <tr>
                    <td>{no++}</td>
                    <td>{item.Item.namabarang}</td>
                    <td>{item.Item.sales.pt}</td>
                    <td>{item.beli}</td>
                    <td>{item.banyak}</td>
                    <td>{Hitung(item.beli,item.banyak)}</td>
                </tr>
            </tbody> 
        ))}       
      </table>
      </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    buyitem: state.buyitem
  })

export default connect(mapStateToProps,{getBuyitem})(BeliBarang) ;