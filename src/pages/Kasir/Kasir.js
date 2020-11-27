import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "../../components/Modal/Modal"
import dayjs from "dayjs"
import "../Beli/Beli.css"
import {connect} from "react-redux";
import Crud from "../../components/Crud/Crud";
import {useHistory} from "react-router-dom"
import {getTkeluar,postTkeluar,deletTkeluar}from "../../redux/action/tkeluar"
import {getBuyer}from "../../redux/action/buyer"
import {faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import {Head} from "./DataKasir"
const Kasir = ({getBuyer,getTkeluar,tkeluar:{Tkeluar},buyer:{buyer},postTkeluar,deletTkeluar}) => {
    const [Tambah,setTambah]= useState(false)
    const [Delet,setDelet] =useState(false)
    const [Edit,setEdit] =useState(false)
    const [formData, setFormData] = useState({
        BuyerId:""
    })
    const code = "Kasir"
    useEffect(()=>{
        getTkeluar()
        getBuyer()
    },[])
    const {BuyerId} = formData
    const history = useHistory()
    const ChangeFormat=(x)=>{
        let day = dayjs(x).format('DD/MM/YYYY')
        return day
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmite = (e) =>{
        e.preventDefault();
        postTkeluar(BuyerId)
        getTkeluar()
    }

    const HandleDelet =(id)=>{
        deletTkeluar(id)
    }


  return (
    <div>
      <div>
            <Crud
            Tambah={Tambah}
            setTambah={setTambah}
            Delet={Delet}
            setDelet={setDelet}
            Edit={Edit}
            code={code}
            setEdit={setEdit}
            />
      </div>
      <div style={{marginLeft:"10%",marginRight:"10%",textAlignLast:"center"}}>
        <table>
            <thead>
                    <tr>
                        {Delet && <th>Hapus</th>}
                        {Head.map((head)=>(
                            <>                        
                            <th className={head.class}>{head.Judul}</th>
                            </>
                        ))}
                    </tr>
            </thead>
            <tbody>
            {Tkeluar.map((tmasuk)=>(
                        <tr >
                            {Delet && <td><FontAwesomeIcon 
                            icon={faTrash} 
                            style={{color:'red'}}
                            onClick={()=>HandleDelet(tmasuk.id)}                          
                            /></td>}                                                 
                            <td>{tmasuk.id}</td>
                            <td onClick={()=> history.push(`/tout/${tmasuk.id}`)}>{tmasuk.buyer.nama}</td>
                            <td onClick={()=> history.push(`/tout/${tmasuk.id}`)}>{tmasuk.buyer.point}</td>
                            <td onClick={()=> history.push(`/tout/${tmasuk.id}`)}>{tmasuk.total}</td>
                            <td onClick={()=> history.push(`/tout/${tmasuk.id}`)}>{tmasuk.bayar}</td>
                            <td onClick={()=> history.push(`/tout/${tmasuk.id}`)}>{tmasuk.sisa}</td>
                            <td onClick={()=> history.push(`/tout/${tmasuk.id}`)}>{ChangeFormat(tmasuk.createdAt)}</td>
                        </tr>
                    ))}                   
            </tbody>
            </table>                    
      </div>
      <div>
      <Modal show={Tambah}>
                <form onSubmit={(e) => onSubmite(e)}>
                    <div className="Modal-Sales">
                    <div>
                        <select
                        name="BuyerId"
                        className="Select-Beli"
                        onChange={(e) => {
                            onChange(e);
                          }}
                        >
                        <option value="" disabled selected>Select Pelanggan</option>
                            {buyer.map((buyer) => (
                                <option value={buyer.id} key={buyer.id}>
                                    {buyer.nama}
                                </option>
                            ))} 
                        </select>
                    </div>
                    <div className='Button-Beli'>
                        <button
                        >
                            SUBMIT
                        </button>
                    </div>
                    </div>
                </form>
            </Modal>
      </div>
    </div>
  )
}
const mapStateToProps = (state)=>({
    tkeluar : state.tkeluar,
    buyer : state.buyer
  })

export default connect(mapStateToProps,{getTkeluar,getBuyer,postTkeluar,deletTkeluar})(Kasir) ;
