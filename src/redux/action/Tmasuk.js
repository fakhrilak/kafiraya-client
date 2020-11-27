import{
POST_TMASUK_SUCCESS,
POST_TMASUK_FAIL,
GET_TMASUK_FAIL,
GET_TMASUK_SUCCESS,
EDIT_TMASUK_FAIL,
EDIT_TMASUK_SUCCESS,
DELET_TMASUK_FAIL,
DELET_TMASUK_SUCCESS,
GET_TMASUK_ID_FAIL,
GET_TMASUK_ID_SUCCESS
}from "./types"

import { API, setAuthToken } from "../../config/api";

export const getTmasuk = ()=>async(dispatch)=>{
    try{
        let res = await API.get('/tin');
		dispatch({
			type: GET_TMASUK_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_TMASUK_FAIL,
			payload: err.response.data.error
		});
    }
}

export const getTmasukId = (id)=>async(dispatch)=>{
    try{
        let res = await API.get(`/tin/${id}`);
		dispatch({
			type: GET_TMASUK_ID_SUCCESS,
			payload: res.data
		});
    }catch(err){
        dispatch({
			type: GET_TMASUK_ID_FAIL,
			payload: err.response.data.error
		});
    }
}

export const editTmasuk = (id,bayar,total)=>async(dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		bayar,
		total
	  });
	try{
		let res = await API.patch(`/tin/${id}`,body,config)
		dispatch({
			type: EDIT_TMASUK_SUCCESS,
			payload: res.data
        });
        dispatch(getTmasuk())
	}catch(err){
		dispatch({
			type: EDIT_TMASUK_FAIL,
			payload: err.response.data.error
		});
	}
}

export const postTmasuk = (id)=>async(dispatch)=>{

    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		SaleId:id
	  });
	try{
		let res = await API.post('/tin',body,config)
		dispatch({
			type: POST_TMASUK_SUCCESS,
			payload: res.data
        });
        dispatch(getTmasuk())
	}catch(err){
		dispatch({
			type: POST_TMASUK_FAIL,
			payload: err.response.data.error
		});
	}
}

export const deletTmasuk = (id)=>async(dispatch)=>{
	try{
		let res = await API.delete(`/tin/${id}`)
		dispatch({
			type: DELET_TMASUK_SUCCESS,
			payload: res.data
		});
		dispatch(getTmasuk())
	}catch(err){
		dispatch({
			type: DELET_TMASUK_FAIL,
			payload: err.response.data.error
		});
	}
}