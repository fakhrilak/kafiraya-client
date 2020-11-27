import React, { useRef,useEffect } from 'react';
import ReactToPrint from 'react-to-print';
import dayjs from "dayjs"
import "./print.css"
import {connect} from "react-redux"
import {getTkeluar, getTkeluarId} from "../../redux/action/tkeluar"

class ComponentToPrint extends React.Component {
  render() {
    let now = dayjs();
    let TkeluarId = this.props.TkeluarId
    let Buyer = this.props.Buyer
    let Items = this.props.Items
    var Jumlah = 0
    const TotItem = (banyak , harga)=>{
      const data = banyak * harga
      Jumlah += data
      return data
    }
    return (
      <div className="Head-print">
          <div>
              <h3>TOKO KAFI RAYA</h3>
              <p className="t1">NOMOR: 517/689/208.412/PK/2015</p>
              <p  className="t2">Dsn.SAMPANG, Desa BUNTALAN</p>
              <p  className="t3">TEMAYANG, BOJONEGOR</p>
              <p  className="t4">{now.format("HH:mm:ss")}</p>
              <p  className="t5">{now.format("dddd, MMMM D YYYY")}</p>
          </div>
          <div className="xxx">
          {Items.map((items)=>(
                    <div className="grid-data">
                        <p className="t6">{items.Item.namabarang}</p>
                        <p className="t7">{items.banyak}</p>
                        <p className="t8">{items.beli}</p>
                        <p className="t9">{TotItem(items.banyak,items.beli)}</p>
                    </div>
                ))}
            <p className="t10">Total : {TkeluarId.total}</p>
            <p className="t10">TERIMA KASIH</p>
            <p className="t10">*barang yang sudah diberi tidak </p>
            <p className="t10">dapat dikembalikan</p>
          </div>
              
      </div>
    );
  }
}
 

const Example = ({getTkeluarId,match,tkeluar:{TkeluarId,Buyer,Items}}) => {
  const componentRef = useRef();
    useEffect(()=>{
        getTkeluarId(match.params.id)
    },[])
  return (
    <div>
      <ComponentToPrint ref={componentRef}  TkeluarId={TkeluarId} Buyer={Buyer} Items={Items}/>
      <ReactToPrint
        trigger={() => <button className='Print-Button'>PRINT</button>}
        content={() => componentRef.current}
      />
    </div>
  );
};
const mapStateToProps = (state)=>({
    tkeluar : state.tkeluar
  })

export default connect(mapStateToProps,{getTkeluarId})(Example) ;
