import {
GET_SATUAN_SUCCESS,
GET_SATUAN_FAIL,
POST_SATUAN_SUCCESS,
POST_SATUAN_FAIL,
EDIT_SATUAN_SUCCESS,
EDIT_SATUAN_FAIL,
GET_SATUAN_ID_SUCCESS,
GET_SATUAN_ID_FAIL,
DELET_SATUAN_SUCCES,
DELET_SATUAN_FAIL
}from "../action/types"
import { API, setAuthToken } from "../../config/api";

export const getSatuan =()=>async(dispatch)=>{
    try{
        let res = await API.get('/satuan');
		dispatch({
			type: GET_SATUAN_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_SATUAN_FAIL,
			payload: err.response.data.error
		});
    }
}

export const postSatuan =(nama)=>async(dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		nama
	  });
	try{
		let res = await API.post('/satuan',body,config)
		dispatch({
			type: POST_SATUAN_SUCCESS,
			payload: res.data
		});
	}catch(err){
		dispatch({
			type: POST_SATUAN_FAIL,
			payload: err.response.data.error,
		});
	}  
}

export const editSatuan =(id,nama)=>async(dispatch)=>{
	const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = JSON.stringify({
        nama
	  });
	  
	  try {
		const res = await API.patch(`/satuan/${id}`,body,config);
		dispatch({
		  type: EDIT_SATUAN_SUCCESS,
		  payload: res.data
		});
		dispatch(getSatuan())
	  } catch (err) {
		dispatch({
		  type: EDIT_SATUAN_FAIL,
		  payload: err.response.data.error,
		});
	  }
    
}
export const getSatuanId =(id)=>async(dispatch)=>{
	try{
        let res = await API.get(`/satuan/${id}`);
		dispatch({
			type: GET_SATUAN_ID_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_SATUAN_ID_FAIL,
			payload: err.response.data.error
		});
    }
}
export const deletSatuan =(id)=>async(dispatch)=>{
    try {
		let res = await API.delete(`/satuan/${id}`);
		dispatch({
			type: DELET_SATUAN_SUCCES,
			payload: res.data
		});
		dispatch(getSatuan())
	} catch (err) {
		dispatch({
			type: DELET_SATUAN_FAIL,
			payload: err.response.data.error
		});
	}
}