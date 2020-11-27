import { 
    GET_TKELUAR_SUCCESS,
    GET_TKELUAR_FAIL,
    POST_TKELUAR_FAIL,
    POST_TKELUAR_SUCCESS,
    EDIT_TKELUAR_SUCCESS,
    EDIT_TKELUAR_FAIL,
    DELET_TKELUAR_SUCCESS,
	DELET_TKELUAR_FAIL,
	GET_TKELUAR_ID_SUCCESS,
	GET_TKELUAR_ID_FAIL
} from "../action/types"

import { API, setAuthToken } from "../../config/api";

export const getTkeluar = ()=>async(dispatch)=>{
    try{
        let res = await API.get('/tout');
		dispatch({
			type: GET_TKELUAR_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_TKELUAR_FAIL,
			payload: err.response.data.error
		});
    }
}

export const getTkeluarId = (id)=>async(dispatch)=>{
    try{
        let res = await API.get(`/tout/${id}`);
		dispatch({
			type: GET_TKELUAR_ID_SUCCESS,
			payload: res.data
		});
    }catch(err){
        dispatch({
			type: GET_TKELUAR_ID_FAIL,
			payload: err.response.data.error
		});
    }
}

export const editTkeluar = (id,bayar,total)=>async(dispatch)=>{
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
		let res = await API.patch(`/tout/${id}`,body,config)
		dispatch({
			type: EDIT_TKELUAR_SUCCESS,
			payload: res.data
        });
        dispatch(getTkeluarId(id))
	}catch(err){
		dispatch({
			type: EDIT_TKELUAR_FAIL,
			payload: err.response.data.error
		});
	}
}

export const postTkeluar = (id)=>async(dispatch)=>{

    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		BuyerId:id
	  });
	try{
		let res = await API.post('/tout',body,config)
		dispatch({
			type: POST_TKELUAR_SUCCESS,
			payload: res.data
        });
        dispatch(getTkeluar())
	}catch(err){
		dispatch({
			type: POST_TKELUAR_FAIL,
			payload: err.response.data.error
		});
	}
}

export const deletTkeluar = (id)=>async(dispatch)=>{
	try{
		let res = await API.delete(`/tout/${id}`)
		dispatch({
			type: DELET_TKELUAR_SUCCESS,
			payload: res.data
		});
		dispatch(getTkeluar())
	}catch(err){
		dispatch({
			type: DELET_TKELUAR_FAIL,
			payload: err.response.data.error
		});
	}
}