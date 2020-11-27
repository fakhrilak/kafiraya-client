import { API, setAuthToken } from '../../config/api';

import{
DELET_BUYER_FAIL,
EDIT_BUYER_SUCCESS,
GET_BUYER_FAIL,
GET_BUYER_ID_FAIL,
GET_BUYER_SUCCESS,
GET_BUYER_ID_SUCCESS,
DELET_BUYER_SUCCES,
EDIT_BUYER_FAIL,
POST_BUYER_FAIL,
POST_BUYER_SUCCESS
} from "../action/types"


export const postBuyer =(nama,kode,alamat,email,phone)=>async(dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
        nama,
        kode,
        alamat,
        email,
        phone
	  });
    try{
        const res = await API.post('/buyer',body,config)
        dispatch({
            type:POST_BUYER_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type:POST_BUYER_FAIL,
            payload: err.response.data.error
        })
    }
}
export const getBuyer =()=>async(dispatch)=>{
    try{
        const res = await API.get('/buyer')
        dispatch({
            type: GET_BUYER_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: GET_BUYER_FAIL,
            payload: err.response.data.error
        })
    }
}

export const getBuyerId =(id)=>async(dispatch)=>{
    
    try{
        const res = await API.get(`/buyer/${id}`)
        dispatch({
            type: GET_BUYER_ID_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: GET_BUYER_ID_FAIL,
            payload: err.response.data.error
        })
    }
}

export const editBuyer =(id,nama,kode,alamat,email,phone)=>async (dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
        nama,
        kode,
        alamat,
        email,
        phone
	  });
    try{
        const res = await API.patch(`/buyer/${id}`,body,config)
        dispatch({
            type: EDIT_BUYER_SUCCESS,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: EDIT_BUYER_FAIL,
            payload: err.response.data.error
        })
    }
}

export const deletBuyer=(id)=>async(dispatch)=>{
    try{
        const res = await API.delete(`/buyer/${id}`)
        dispatch({
            type: DELET_BUYER_SUCCES,
            payload: res.data
        })
        dispatch(getBuyer())
    }catch(err){
        dispatch({
            type: DELET_BUYER_FAIL,
            payload: err.response.data.error
        })
    }
}