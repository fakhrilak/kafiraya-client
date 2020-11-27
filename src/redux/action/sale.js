import{
GET_SALES_SUCCESS,
GET_SALES_FAIL,
POST_SALES_SUCCESS,
POST_SALES_FAIL,
EDIT_SALES_SUCCESS,
EDIT_SALES_FAIL,
GET_SALES_ID_FAIL,
GET_SALES_ID_SUCCESS,
DELET_SALES_SUCCESS,
DELET_SALES_FAIL
}from "./types"

import { API, setAuthToken } from "../../config/api";

export const getSales =()=>async(dispatch)=>{
    try{
        let res = await API.get('/sales');
		dispatch({
			type: GET_SALES_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_SALES_FAIL,
			payload:err.response.data.error
		});
    }
}

export const postSales =(nama,phone,pt,alamat,email,kode)=>async(dispatch)=>{
	const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		nama,
		phone,
		pt,
		alamat,
		email,
		kode
	  });
	try{
		let res = await API.post('/sales',body,config)
		dispatch({
			type: POST_SALES_SUCCESS,
			payload: res.data
		});
	}catch(err){
		dispatch({
			type: POST_SALES_FAIL,
			payload: err.response.data.error
		});
	}   
    
}
export const getSalesId=(id)=>async(dispatch)=>{
	try {
		let res = await API.get(`/sales/${id}`);
		dispatch({
			type: GET_SALES_ID_SUCCESS,
			payload: res.data.data
		});
	} catch (err) {
		dispatch({
			type: GET_SALES_ID_FAIL,
			payload: err.response.data.error
		});
	}
}
export const editSales =(id,nama,phone,pt,alamat,email,kode)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = JSON.stringify({
		nama,
		phone,
		pt,
		alamat,
		email,
		kode
	  });
	  
	  try {
		const res = await API.patch(`/sales/${id}`,body,config);
		dispatch({
		  type: EDIT_SALES_SUCCESS,
		  payload: res.data
		});
		dispatch(getSales())
	  } catch (err) {
		dispatch({
		  type: EDIT_SALES_FAIL,
		  payload: err.response.data.error
		});
	  }
}

export const deletSales =(id)=>async(dispatch)=>{
    try {
		let res = await API.delete(`/sales/${id}`);
		dispatch({
			type: DELET_SALES_SUCCESS,
			payload: res.data
		});
		dispatch(getSales())
	} catch (err) {
		dispatch({
			type: DELET_SALES_FAIL,
			payload: err.response.data.error
		});
	}
}