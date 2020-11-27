import React,{useEffect, useState} from 'react'
import Modal  from "../Modal/Modal";
import {connect} from "react-redux";
import {editSatuan,getSatuanId} from "../../redux/action/satuan"
import {editCategory,getCategoryId}from "../../redux/action/category"
import {editSales,getSalesId} from "../../redux/action/sale"
import { editItem } from '../../redux/action/Item';

const Edit = ({
    satuan:{satuanId,satuan},
    getCategoryId,
    getSalesId,
    getSatuanId,
    modal,
    editSatuan,
    code,
    editCategory,
    editSales,
    category:{categoryId,category},
    sales:{salesId,sales},
    setModal,
    item:{itemId,namaSales,namaCategory,namaSatuan,idSatuan,idCategory,idSales},
    editItem
}) => {
    const [formData, setFormData] = useState({
        nama: "",
        phone:"",
        pt:"",
        alamat:"",
        email:"",
        kode:"",

        namabarang:"",
        SalesId:idSales,
        CategoryId:idCategory,
        SatuanId:idSatuan,
        stock:"",
        beli:"",
        jual:"",
      });

    useEffect(()=>{
        getSatuanId()
        getSalesId()
        getCategoryId()
    },[])
    let {nama,phone,pt,alamat,email,    kode,
        namabarang,SalesId,CategoryId,SatuanId,stock,beli,jual} = formData;
    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log("cek id",idCategory)
    const handleEdit = (id)=>{
        if (code === "satuan"){
            editSatuan(id,nama)
        }else if(code === "category"){
            editCategory(id,nama)
        }else if(code === "seles"){
            if (nama === ""){
                nama = salesId.nama
            }if(phone === ""){
                phone = salesId.phone
            }if(pt === ""){
                pt = salesId.pt
            }if(alamat === ""){
                alamat= salesId.alamat
            }if(email === ""){
                email = salesId.email
            }if(kode === ""){
                kode = salesId.kode
            }
            console.log("cek edit",namaCategory)
            editSales(id,nama,phone,pt,alamat,email,kode)
        }else if(code === "Item"){
            if(namabarang ===""){
                namabarang = itemId.namabarang
            }if(SalesId === 0){
                SalesId = idSales
            }if(CategoryId === 0){
                CategoryId = idCategory
            }if(SatuanId === 0){
                SatuanId = idSatuan
            }if(beli === ""){
                beli = itemId.beli
            }if(jual === ""){
                jual = itemId.jual
            }if(kode === ""){
                kode = itemId.kode
            }if (stock === ""){
                stock = itemId.stock
            }
            editItem(id,
                namabarang,
                SalesId,
                CategoryId,
                SatuanId,
                beli,
                jual,
                kode,
                stock)
        }
    }
    let trigerNama = null
    let trigerId = null 
    if(code === "category" ){
        trigerNama = categoryId.nama
        trigerId = categoryId.id
    }else if(code === "satuan"){
        trigerNama = satuanId.nama
        trigerId = satuanId.id
    }else if(code === "seles"){
        trigerId = salesId.id
        trigerNama = salesId.nama
    }else if(code === "Item"){
        trigerId = itemId.id
    }
  return satuanId == null ? (<></>):(
    <div onDoubleClick={()=>setModal(!modal)}>
      <Modal show={modal} >
          {code !== "Item" && <div className = "Form-input">
              <input
            type={trigerNama}
            placeholder={trigerNama}
            value={nama}
            name="nama"
            onChange={(e) => onChange(e)}
            className='custom-input'
            /> 
          </div>}                
            {code === "seles" && 
            <div>
                <div className = "Form-input">
                    <input
                    type={salesId.phone}
                    placeholder={salesId.kode}
                    value={kode}
                    name="kode"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type={salesId.phone}
                    placeholder={salesId.phone}
                    value={phone}
                    name="phone"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type={salesId.pt}
                    placeholder={salesId.pt}
                    value={pt}
                    name="pt"
                    onChange={(e) => onChange(e)}
                    className='custom-input' 
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type={salesId.phone}
                    placeholder={salesId.alamat}
                    value={alamat}
                    name="alamat"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type={salesId.pt}
                    placeholder={salesId.email}
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    className='custom-input' 
                    />
                </div>          
            </div>
        }
        {code === "Item" && 
            <div>
                <div className = "Form-input">
                    <input
                    type="text"
                    placeholder= {itemId.namabarang}
                    value={namabarang}
                    name="namabarang"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type="text"
                    placeholder={itemId.kode}
                    value={kode}
                    name="kode"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type="text"
                    placeholder={itemId.beli}
                    value={beli}
                    name="beli"
                    onChange={(e) => onChange(e)}
                    className='custom-input' 
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type="text"
                    placeholder={itemId.jual}
                    value={jual}
                    name="jual"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
                </div>
                <div className = "Form-input">
                    <input
                    type="text"
                    placeholder={itemId.stock}
                    value={stock}
                    name="stock"
                    onChange={(e) => onChange(e)}
                    className='custom-input' 
                    />
                </div>
                <div style={{paddingTop:20,paddingBottom:20,display:"flex"}}>
                <div className= "wrapper-select">
                   <select
                 name="SalesId"
                 className="custom-select"
                 onChange={(e) => {
                   onChange(e);
                 }}
                 >
                   
                   <option >{namaSales}</option>                                     
                    {sales.map((sales) => (
                       <option value={sales.id} key={sales.id}>
                         {sales.nama}
                       </option>
                     ))} 
                 </select> 
                </div>
                <div className= "wrapper-select">
                    <select
                 name="CategoryId"
                 className="custom-select"
                 onChange={(e) => {
                   onChange(e);
                 }}
                 >
                   <option >{namaCategory}</option>
                    {category.map((category) => (
                       <option value={category.id} key={category.id}>
                         {category.nama}
                       </option>
                     ))} 
                 </select>
                </div>
                 <div className= "wrapper-select">
                    <select
                    name="SatuanId"
                    className="custom-select"
                    onChange={(e) => {
                    onChange(e);
                    }}
                    >
                    <option >{namaSatuan}</option>
                        {satuan.map((satuan) => (
                        <option value={satuan.id} key={satuan.id}>
                            {satuan.nama}
                        </option>
                        ))} 
                    </select>
                 </div>
                 </div>     
            </div>
}
            <div className = "Form-input">
               <button
                className='btn-submit'
                onClick={()=>handleEdit(trigerId)}
            >
            EDIT
            </button> 
            </div>           
      </Modal>
    </div>
  )
}
const mapStateToProps = (state)=>({
    satuan: state.satuan,
    category : state.category,
    sales : state.sales,
    item :state.item
})
export default connect(mapStateToProps,{editSatuan,
    editCategory,
    editSales,
    getCategoryId,
    getSalesId,
    getSatuanId,
    editItem
})(Edit) ;
