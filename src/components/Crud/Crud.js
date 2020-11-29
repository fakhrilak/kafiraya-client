import React,{useEffect, useState ,useRef} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faInbox, faPlus, faSms, faTrash } from '@fortawesome/free-solid-svg-icons'
import "./Crud.css";
import DropDown from "../DropMassage/DropMassage"
import {connect} from "react-redux"
import Form from "../Form/Form"
const Crud = ({
  Tambah,
  setTambah,
  form,
  code,
  setDelet,
  Delet,
  setEdit,
  Edit,
  item:{massage},
  refresh,
  setRefresh,
  setCode
}) => {

  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (prevScrollY.current === currentScrollY && !goingUp) {
        setGoingUp(true);
      }else{
        setGoingUp(false)
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const HandleTambah = ()=>{
    setTambah(!Tambah)
    setEdit(false)
    setDelet(false)
  }
  const HandleEdit=()=>{
    setEdit(!Edit)
    setTambah(false)
    setDelet(false)
  }
  const HandleDelet=()=>{
    setDelet(!Delet)
    setEdit(false)
    setTambah(false)
  }
  return (
    <div>
      <div className="Ciontainer-CRUD"
      >
        <div className="Crud">
          <FontAwesomeIcon 
          icon={faPlus} 
          style={{color:'green'}} 
          onClick={()=>HandleTambah()}/>
        </div>
        <div className="Crud">
          <FontAwesomeIcon 
          icon={faEdit} 
          style={{color:'orange'}}
          onClick={()=>HandleEdit()}
          />
        </div>
        <div className="Crud">
          <FontAwesomeIcon 
          icon={faTrash} 
          style={{color:'red'}} 
          onClick={()=>HandleDelet()}/>
        </div>
        <div className="Handle-Massage"> 
          <div className="Massage-Icon">
            <FontAwesomeIcon 
              icon={faInbox} 
              style={{color:'black'}}
              onClick={()=>setGoingUp(!goingUp)}
              />
            {goingUp && <div>
              <DropDown code={code}/>
            </div>} 
          </div>                
        </div>
      </div> 
      {code === "Beli" || code === "Detail" || code === "AddItemTrans" || code === "Pelanggan" ||
       code === "Kasir" || code === "AddItemTranskeluar" || code === "DetailTkeluar"?
      (null):(<Form Tambah={Tambah} form={form} code={code} setTambah={setTambah}
        refresh={refresh} setRefresh={setRefresh}
      />)}
      
    </div>
  )
}

const mapStateToProps = (state)=>({
  item : state.item
})
export default connect(mapStateToProps,{})(Crud) ;
