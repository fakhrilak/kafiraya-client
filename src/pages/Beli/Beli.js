import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getTmasuk,postTmasuk,deletTmasuk} from "../../redux/action/Tmasuk";
import {getSales} from "../../redux/action/sale"
import Crud from "../../components/Crud/Crud";
import {connect} from "react-redux";
import {Head} from "./DataBeli";
import Modal from "../../components/Modal/Modal"
import dayjs from "dayjs"
import "./Beli.css"
import {useHistory} from "react-router-dom"
import {faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const Beli = ({getTmasuk,tmasuk:{Tmasuk},getSales,sales:{sales},postTmasuk,deletTmasuk}) => {
    const [Tambah,setTambah]= useState(false)
    const [Delet,setDelet] =useState(false)
    const [Edit,setEdit] =useState(false)
    const [formData, setFormData] = useState({SalesId:""})
    const code = "Beli"
    const {SalesId} = formData
    const history = useHistory()
    useEffect(()=>{
        getTmasuk()
        getSales()
    },[])

    const ChangeFormat=(x)=>{
        let day = dayjs(x).format('DD/MM/YYYY')
        return day
    }

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmite = (e) =>{
        e.preventDefault();
        postTmasuk(SalesId);
        getSales();
    }

    const HandleDelet =(id)=>{
        deletTmasuk(id)
    }

    const HandleEdit = (id)=>{

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
        <div>
            <div className="Heading">

            </div>   
        <div className = "outtable">
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
                    
                    {Tmasuk.map((tmasuk)=>(
                        <tr >
                            {Delet && <td><FontAwesomeIcon 
                            icon={faTrash} 
                            style={{color:'red'}}
                            onClick={()=>HandleDelet(tmasuk.id)}                          
                            /></td>}                                                 
                            <td>{tmasuk.id}</td>
                            <td onClick={()=> history.push(`/tin/${tmasuk.id}`)}>{tmasuk.sales.nama}</td>
                            <td onClick={()=> history.push(`/tin/${tmasuk.id}`)}>{tmasuk.sales.pt}</td>
                            <td onClick={()=> history.push(`/tin/${tmasuk.id}`)}>{tmasuk.total}</td>
                            <td onClick={()=> history.push(`/tin/${tmasuk.id}`)}>{tmasuk.bayar}</td>
                            <td onClick={()=> history.push(`/tin/${tmasuk.id}`)}>{tmasuk.sisa}</td>
                            <td onClick={()=> history.push(`/tin/${tmasuk.id}`)}>{ChangeFormat(tmasuk.createdAt)}</td>
                        </tr>
                    ))}               
                </tbody>
            </table>
        </div>          
            <Modal show={Tambah}>
                <form onSubmit={(e) => onSubmite(e)}>
                    <div className="Modal-Sales">
                    <div>
                        <select
                        name="SalesId"
                        className="Select-Beli"
                        onChange={(e) => {
                            onChange(e);
                          }}
                        >
                        <option value="" disabled selected>Select Suplier</option>
                            {sales.map((sales) => (
                                <option value={sales.id} key={sales.id}>
                                    {sales.nama}{", "}{sales.pt}
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
    tmasuk : state.tmasuk,
    sales : state.sales
  })

export default connect(mapStateToProps,{getTmasuk,getSales,postTmasuk,deletTmasuk})(Beli) ;