import React,{useEffect, useState} from 'react'
import Crud from "../../components/Crud/Crud"
import Modal from "../../components/Modal/Modal"
import {connect} from "react-redux"
import {postBuyer,getBuyer,getBuyerId,editBuyer,deletBuyer} from "../../redux/action/buyer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faInbox, faPlus, faSms, faTrash } from '@fortawesome/free-solid-svg-icons'
const Pelanggan = ({postBuyer,getBuyer,buyer:{buyer,buyerId},getBuyerId,editBuyer,deletBuyer}) => {
    const [Tambah,setTambah]= useState(false)
    const [Delet,setDelet] =useState(false)
    const [Edit,setEdit] =useState(false)
    const [handeleshow,setHandleshow]=useState(false)
    const [namaa, setNamaa]=useState("")
    const [alamatt, setAlamatt]= useState("")
    const [phonee, setPhonee] =useState("")
    const [emaill,setEmaill]= useState("")
    const [kodee,setKodee]= useState("")
    const [formData, setFormData] = useState({
        nama:"",
        alamat:"",
        phone:"",
        email:"",
        kode:""
    })

    useEffect(()=>{
        getBuyer()
    },[])

    const{nama,alamat,phone,email,kode}=formData
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log(nama)

    const code = "Pelanggan"

    const onSubmite = (e) =>{
        e.preventDefault(e);
        if (Tambah === true){
            postBuyer(nama,kode,alamat,email,phone)
            setFormData({
                nama:"",
                alamat:"",
                phone:"",
                email:"",
                kode:""
            }) 
        }
    }

    
    const HandleDelet=(id)=>{
        deletBuyer(id)
    }

    const HandleEdit=(id)=>{
        getBuyerId(id)
        setHandleshow(!handeleshow)
    }

    const PushEdit=()=>{
 
            if(namaa === ""){
                    let a =  buyerId.nama
                    setNamaa(a)
                    console.log(buyerId.nama,"suuuuu")
            }
            else if(alamatt === ""){

                   setAlamatt(buyerId.alamat)            
            }
            else if(phonee === ""){
                    setPhonee(buyerId.phone)          
            }
            if(emaill === ""){
                    setEmaill (buyerId.email)
            }       
            if(kodee == ""){
                    setKodee(buyerId.kode) 
            }

            editBuyer(buyerId.id,namaa,kodee,alamatt,emaill,phonee)    
    }
  return (
    <div>
        <div>
            <Crud 
                Tambah={Tambah} 
                setTambah={setTambah} 
                setDelet={setDelet} 
                Delet={Delet}
                code={code}
                Edit={Edit}
                setEdit={setEdit}
            />
        </div>
        {Tambah && <Modal show={Tambah}>
            <div>
                <h1>Tambah Pembeli</h1>
            </div>
            <form onSubmit={(e) => onSubmite(e)}>
                <div className='form-group'>
                    <input
                        type="text"
                        value={nama}
                        name="nama"
                        onChange={(e) => onChange(e)}
                        placeholder="Nama"
                        className='custom-input'
                    />

                </div>
                <div className='form-group'>
                    <input
                        type="text"
                        value={kode}
                        name="kode"
                        onChange={(e) => onChange(e)}
                        placeholder="Kode"
                        className='custom-input'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type="email"
                        value={email}
                        name="email"
                        onChange={(e) => onChange(e)}
                        placeholder="Email"
                        className='custom-input'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type="text"
                        value={phone}
                        name="phone"
                        onChange={(e) => onChange(e)}
                        placeholder="Phone"
                        className='custom-input'
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        type="text"
                        value={alamat}
                        name="alamat"
                        onChange={(e) => onChange(e)}
                        placeholder="Alamat"
                        className='custom-textArea'
                    />
                </div>
                <div className='form-submit'>
                    <button className='btn-submit'>
                        TAMBAH
                    </button>
                </div>
                
            </form>
        </Modal>}
        <div>
        <div className = "outtable">
            <table>
                <thead>
                    <tr>
                        {Delet && <th>Hapus</th>}
                        {Edit && <th>Edit</th>}
                        <th className="Nama-barang">Nama</th>
                        <th className="namapt">Kode</th>
                        <th className="namapt">Email</th>
                        <th className="namapt">No.Hp</th>
                        <th className="namapt">Point</th>
                        <th className="namapt">Alamat</th>
                    </tr>
                </thead>
                  <tbody>  
                      {buyer.map((buyer)=>(
                         <tr>
                             {Delet && <td><FontAwesomeIcon 
                            icon={faTrash} 
                            style={{color:'red'}}
                            onClick={()=>HandleDelet(buyer.id)}
                            /></td>}
                            {Edit && <td><FontAwesomeIcon 
                            icon={faEdit} 
                            style={{color:'green'}}
                            onClick={()=>HandleEdit(buyer.id)}
                            /></td>} 
                              <td>{buyer.nama}</td>
                              <td>{buyer.kode}</td>
                              <td>{buyer.email}</td>
                              <td>{buyer.phone}</td>
                              <td>{buyer.point}</td>
                              <td>{buyer.alamat}</td>
                          </tr> 
                      ))}
                </tbody>
            </table>
            </div>
        </div>
        <div>
        <Modal show={handeleshow}>
            <div>
                <h1>Tambah Pembeli</h1>
            </div>
            <div>
                <div className='form-group'>
                    <input
                        type="text"
                        value={namaa}
                        onChange={e => setNamaa(e.target.value)}
                        placeholder={buyerId.nama}
                        className='custom-input'
                    />
                    
                </div>
                <div className='form-group'>
                    <input
                        type="text"
                        value={kodee}
                        onChange={e => setKodee(e.target.value)}
                        placeholder={buyerId.kode}
                        className='custom-input'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type="email"
                        value={emaill}
                        onChange={e => setEmaill(e.target.value)}
                        placeholder={buyerId.email}
                        className='custom-input'
                    />
                </div>
                <div className='form-group'>
                    <input
                        type="text"
                        value={phonee}
                        onChange={e => setPhonee(e.target.value)}
                        placeholder={buyerId.phone}
                        className='custom-input'
                    />
                </div>
                <div className='form-group'>
                    <textarea
                        type="text"
                        value={alamatt}
                        onChange={e => setAlamatt(e.target.value)}
                        placeholder={buyerId.alamat}
                        className='custom-textArea'
                    />
                </div>
                <div className='form-submit'>
                    <button className='btn-submit' onClick={()=>PushEdit()}>
                        TAMBAH
                    </button>
                </div>
                
            </div>
        </Modal>
        </div>
    </div>
  )
}

const mapStateToProps = (state)=>({
    buyer: state.buyer
})
export default connect(mapStateToProps,{postBuyer,getBuyer,getBuyerId,editBuyer,deletBuyer})(Pelanggan) ;
