import React, { useEffect, useState } from 'react';
import Beli from "../Beli/Beli";
import Jual from "../Kasir/Kasir"
import "./Transaksi.css";
import {getTmasuk} from "../../redux/action/Tmasuk";
import {getTkeluar} from "../../redux/action/tkeluar"
import {connect} from "react-redux";
const Transaksi = ({getTmasuk,tmasuk:{Tmasuk},getTkeluar,tkeluar:{Tkeluar}}) => {
    const [Transaksi,setTransaksi]=useState(false)
    const code = "Transaksi"
    useEffect(()=>{
        getTmasuk()
        getTkeluar()
    },[])

    var bayar = 0;  
    var i;
    for (i = 0; i < Tmasuk.length; i++) { 
        bayar += Tmasuk[i].bayar;  
    }

    var total = 0;
    for (i = 0; i < Tmasuk.length; i++) { 
        total += Tmasuk[i].total;  
    }

    var sisa = 0;
    for (i = 0; i < Tmasuk.length; i++) { 
        sisa += Tmasuk[i].sisa;  
    }

    var pelangganBayar = 0;
    for (i = 0; i < Tkeluar.length; i++) { 
        pelangganBayar += Tkeluar[i].bayar;  
    }

    var pelangganTotal = 0;
    for (i = 0; i < Tkeluar.length; i++) { 
        pelangganTotal += Tkeluar[i].total;  
    }

    var pelangganSisa = 0;
    for (i = 0; i < Tkeluar.length; i++) { 
        pelangganSisa += Tkeluar[i].sisa;  
    }
  return (
    <div>
        {Transaksi === false && <div className="Heading">
            <div className="Heading-content">
                <h1>{total}</h1>
                <h3>Total Beli</h3>
            </div>
            <div className="Heading-content">
                <h1>{bayar}</h1>
                <h3>Total Bayar</h3>
            </div>
            <div className="Heading-content">
                <h1>{sisa}</h1>
                <h3>Total Hutang</h3>
            </div>
        </div>}
        {Transaksi === true && <div className="Heading">
            <div className="Heading-content">
                <h1>{pelangganTotal}</h1>
                <h3>Total Jual</h3>
            </div>
            <div className="Heading-content">
                <h1>{pelangganBayar}</h1>
                <h3>Total Pembayaran</h3>
            </div>
            <div className="Heading-content">
                <h1>{pelangganSisa}</h1>
                <h3>Total Piutang</h3>
            </div>
        </div>}
        

      <div >
          <div className="Header-Transaksi">
             <button onClick={()=>setTransaksi(!Transaksi)}>{Transaksi ? "PENJUALAN":"PEMBELIAN"}
          </button> 
          </div>       
      </div>
      {Transaksi === false && <div>
          <Beli />
      </div>}
      {Transaksi === true && <div>
          <Jual />
      </div>}
    </div>
  )
}

const mapStateToProps = (state)=>({
    tmasuk : state.tmasuk,
    tkeluar: state.tkeluar
  })

export default connect(mapStateToProps,{getTmasuk,getTkeluar})(Transaksi) ;
