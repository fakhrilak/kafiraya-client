import React,{useEffect, useState} from 'react'
import Modal from "../Modal/Modal"
import {postCategory,getCategory} from "../../redux/action/category";
import {postSales,getSales} from "../../redux/action/sale";
import {postSatuan,getSatuan} from "../../redux/action/satuan";
import {postItem} from "../../redux/action/Item"
import {connect} from "react-redux"
const Form = ({form,
  Tambah,
  code,
  postItem,
  getSales,
  getSatuan,
  postCategory,
  getCategory,
  postSales,
  postSatuan,
  sales:{sales,statussales},
  category:{category},
  satuan:{satuan},
  item:{status},
  setTambah}) => {
    const [formData, setFormData] = useState({
        Nama: "",
        PT: "",
        Phone: "",
        Barcode: "",
        Harga_Jual:"",
        Harga_Beli:"",
        Satuan:"",
        Category:"",
        Suplier:"",
        Alamat:"",
        Email:"",
        Kode:""
      });
    useEffect(()=>{
      getCategory()
      getSatuan()
      getSales()
    },[])
      const {Nama,Phone,PT,Barcode,Harga_Beli,Harga_Jual,Satuan,Category,Suplier,Alamat,Kode,Email} = formData;
      
      const Change =(nama)=>{
        if(nama==="Nama"){
          return Nama
        }else if(nama === "Phone"){
          return Phone
        }else if(nama === "PT"){
          return PT
        }else if(nama === "Barcode"){
          return Barcode
        }else if(nama === "Harga_Beli"){
          return Harga_Beli
        }else if(nama === "Harga_Jual"){
          return Harga_Jual
        }else if(nama === "Satuan"){
            return Satuan
        }else if(nama === "Category"){
            return Category
        }else if(nama === "Suplier"){
            return Suplier
        }else if(nama === "Alamat"){
            return Alamat
        }else if(nama === "Kode"){
            return Kode
        }else if (nama === "Email"){
            return Email
        }
      }
      const onChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const onSubmite = (e) =>{
        e.preventDefault();
        if (code === "category"){
          postCategory(Nama)
        }else if(code === "seles"){
          postSales(Nama,Phone,PT,Alamat,Email,Kode)
        }else if(code === "satuan"){
          postSatuan(Nama)
        }else if(code === "Item"){
          postItem(Nama,Suplier,Category,Satuan,Harga_Beli,Harga_Jual,Barcode)
        }
        if(status||statussales){
          setFormData({
            Nama: "",
            PT: "",
            Phone: "",
            Barcode: "",
            Harga_Jual:"",
            Harga_Beli:"",
            Satuan:"",
            Category:"",
            Suplier:"",
            Alamat:"",
            Email:"",
            Kode:""
          })
        }      
    }
    
  return (
    <div className="modal" onDoubleClick={()=>setTambah(!Tambah)}>
        <form onSubmit={(e) => onSubmite(e)}>
      <Modal show={Tambah}>
        {form.map((form)=>(
          <>
            <h1>{form.Judul}</h1>
            {form.type == "Input" ? 
            (<div className='form-group'>
                  <input
                    type={form.value}
                    placeholder={form.value}
                    value={Change(form.value)}
                    name={form.value}
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
              </div>): form.type == "Button" ? (
                <div className='form-submit'>
                <button
                  className='btn-submit'
                >
                    {form.text}
                </button>
              </div>
              ):form.type == "Dropdown" ?(
                <div className="select-input">                 
                  <div>
                    <select
                      name="Category"
                      className="custom-select"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      >
                        <option value="" disabled selected>Select Category</option>
                        {category.map((category) => (
                            <option value={category.id} key={category.id}>
                              {category.nama}
                            </option>
                          ))} 
                      </select>
                    </div>
                    <div>
                      <select
                        name="Satuan"
                        className="custom-select"
                        onChange={(e) => {
                          onChange(e);
                        }}
                        >
                          <option value="" disabled selected>Select Satuan</option>
                          {satuan.map((category) => (
                              <option value={category.id} key={category.id}>
                                {category.nama}
                              </option>
                            ))} 
                      </select>
                    </div>                    
                    <div>
                    <select
                    name="Suplier"
                    className="custom-select"
                    onChange={(e) => {
                      onChange(e);
                    }}
                    >
                      <option value="" disabled selected>Select Suplier</option>
                        {sales.map((category) => (
                          <option value={category.id} key={category.id}>
                            {category.nama}
                          </option>
                        ))} 
                    </select>
                    </div>                   
                </div>
              ):null}
          </>
        ))}   
      </Modal>
      </form>
    </div>
  )
}

const mapStateToProps = (state)=>({
  category : state.category,
  satuan : state.satuan,
  sales : state.sales,
  item : state.item
})
export default connect(mapStateToProps,{
  postCategory,
  postSales,
  postSatuan,
  postItem,
  getCategory,
  getSatuan,
  getSales,
  getCategory
})(Form) ;
