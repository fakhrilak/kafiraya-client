import React, { useEffect } from 'react'
import {connect} from "react-redux"
import {getSaleItem} from "../../redux/action/saleitem"
import {Jual} from "./DataItemterjual"
import "./Barang.css"
const JualBarang = ({getSaleItem,saleitem:{saleitem},slide,setSlide}) => {
    useEffect(()=>{
        getSaleItem()
    },[])
    
    let no=1
    const Hitung =(a,b)=>{
        const c = (a * b)
        return c
    }
    var Jumlah = 0;
    for (let i = 0; i < saleitem.length; i++) { 
        Jumlah += (saleitem[i].beli * saleitem[i].banyak);  
    }
    
  return (
    <div >
        <div className="Heading-content">
            <h1 onClick={()=>setSlide(!slide)}>{Jumlah}</h1>
            <h3>Total Penjualan Barang</h3>
        </div>
    <div className="Continer-barang">
      <table>
        <thead>
            <tr>
                {Jual.map((head)=>(
                    <th className={head.class}>{head.Judul}</th>
                    
                ))}
            </tr>
        </thead>
        {saleitem.map((item)=>(
           <tbody>
                <tr>
                    <td>{no++}</td>
                    <td>{item.Item.namabarang}</td>
                    <td>{item.TkeluarId}</td>
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
    saleitem: state.saleitem
  })

export default connect(mapStateToProps,{getSaleItem})(JualBarang) ;
