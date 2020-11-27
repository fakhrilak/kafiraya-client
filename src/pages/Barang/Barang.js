import React,{useState} from 'react'
import Beli from "./BeliBarang"
import Jual from "./JualBarang"
const Barang_Jual = () => {
  const [slide,setSlide] = useState(false)
  return (
    <div>
      {slide &&<Beli slide={slide} setSlide={setSlide}/>}
      {!slide && <Jual slide={slide} setSlide={setSlide}/>}
    </div>
  )
}
export default (Barang_Jual)
