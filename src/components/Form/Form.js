import React,{useEffect, useState} from 'react'
import Modal from "../Modal/Modal"
import {postCategory,getCategory} from "../../redux/action/category";
import {postSales,getSales} from "../../redux/action/sale";
import {postSatuan,getSatuan} from "../../redux/action/satuan";
import {postItem,getItem} from "../../redux/action/Item"
import {connect} from "react-redux"
const Form = ({form,
  Tambah,
  code,
  postItem,
  getSales,
  getSatuan,
  getItem,
  postCategory,
  getCategory,
  postSales,
  postSatuan,
  sales:{sales,statussales},
  category:{category},
  satuan:{satuan},
  item:{status},
  refresh,
  setRefresh,
  setTambah}) => {
    const [rerender,setRerender] = useState(false)
    const [searchTerm, setSearchTerm] = React.useState("");
    const [searchResults, setSearchResults] = React.useState([]);
    const [searchTerm2, setSearchTerm2] = React.useState("");
    const [searchResults2, setSearchResults2] = React.useState([]);
    const [searchTerm3, setSearchTerm3] = React.useState("");
    const [searchResults3, setSearchResults3] = React.useState([]);
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
    },[rerender])
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
        setRerender(!rerender)
        if (code === "category"){
          postCategory(Nama)
          setFormData({
            Nama:""
          })
        }else if(code === "seles"){
          postSales(Nama,Phone,PT,Alamat,Email,Kode)
          setFormData({
            Nama: "",
            Phone: "",
            PT : "",
            Alamat: "",
            Email: "",
            Kode: ""
          })
        }else if(code === "satuan"){
          postSatuan(Nama)
          setFormData({
            Nama : "",
          })
        }else if(code === "Item"){
          postItem(Nama,Suplier,Category,Satuan,Harga_Beli,Harga_Jual,`${Barcode}`)
          setFormData({
            Nama : "",
            Barcode: +Barcode + +1,
            Harga_Beli: Harga_Beli,
            Harga_Jual: Harga_Jual,
            Satuan : Satuan,
            Suplier : Suplier,
            Category : Category
          })
          setRefresh(!refresh)
        }
        getItem()
    }
    const handleChange = event => {
      setSearchTerm(event.target.value); 
    };
    const handleChange2 = event => {
      setSearchTerm2(event.target.value); 
    };
    const handleChange3 = event => {
      setSearchTerm3(event.target.value); 
    };
    React.useEffect(() => {
      const results = category.filter(person =>
          person.nama.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
      }, [searchTerm]);
    React.useEffect(() => {
      const results = satuan.filter(person =>
          person.nama.toLowerCase().includes(searchTerm2)
      );
      setSearchResults2(results);
      }, [searchTerm2]);
    React.useEffect(() => {
      const results = sales.filter(person =>
          person.nama.toLowerCase().includes(searchTerm3)
      );
      setSearchResults3(results);
      }, [searchTerm3]);
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
                    <input
                    type="text"
                    placeholder="Search Barcode"
                    value={searchTerm}
                    onChange={handleChange}
                    />
                    <select
                      name="Category"
                      className="custom-select"
                      onChange={(e) => {
                        onChange(e);
                      }}
                      >
                        <option value="" disabled selected>Select Category</option>
                        {searchResults.map((category) => (
                            <option value={category.id} key={category.id}>
                              {category.nama}
                            </option>
                          ))} 
                      </select>
                    </div>
                    <div>
                      <input
                      type="text"
                      placeholder="Search Satuan"
                      value={searchTerm2}
                      onChange={handleChange2}
                      />
                      <select
                        name="Satuan"
                        className="custom-select"
                        onChange={(e) => {
                          onChange(e);
                        }}
                        >
                          <option value="" disabled selected>Select Satuan</option>
                          {searchResults2.map((category) => (
                              <option value={category.id} key={category.id}>
                                {category.nama}
                              </option>
                            ))} 
                      </select>
                    </div>                    
                    <div>
                    <input
                    type="text"
                    placeholder="Search Suplier"
                    value={searchTerm3}
                    onChange={handleChange3}
                    />
                    <select
                    name="Suplier"
                    className="custom-select"
                    onChange={(e) => {
                      onChange(e);
                    }}
                    >
                      <option value="" disabled selected>Select Suplier</option>
                        {searchResults3.map((category) => (
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
  getCategory,
  getItem
})(Form) ;
