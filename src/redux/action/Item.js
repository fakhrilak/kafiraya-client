import { API, setAuthToken } from '../../config/api';

import {
    GET_ITEM_SUCCESS,
    GET_ITEM_FAIL,
    POST_ITEM_SUCCESS,
    POST_ITEM_FAIL,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAIL,
    DELET_ITEM_FAIL,
	DELET_ITEM_SUCCESS,
	GET_ITEM_ID_SUCCESS,
	GET_ITEM_ID_FAIL
} from "./types"

export const getItem =()=>async(dispatch)=>{
    try{
        let res = await API.get('/item');
		dispatch({
			type: GET_ITEM_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_ITEM_FAIL,
			payload: err.response.data.error.massage
		});
    }
}

export const postItem =(
	namabarang,
	SaleId,
	CategoryId,
	SatuanId,
	beli,
	jual,
	kode
	)=>async(dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		namabarang,
		SaleId,
		CategoryId,
		SatuanId,
		stock:"0",
		beli,
		jual,
		kode
	  });
	try{
		let res = await API.post('/item',body,config)
		dispatch({
			type: POST_ITEM_SUCCESS,
			payload: res.data
		});
	}catch(err){
		dispatch({
			type: POST_ITEM_FAIL,
			payload: err.response.data.error
		});
	}
}
export const getItemId =(id)=>async(dispatch)=>{
	try{
		let res = await API.get(`/item/${id}`)
		dispatch({
			type: GET_ITEM_ID_SUCCESS,
			payload: res.data.data
		});
	}catch(err){
		dispatch({
			type: GET_ITEM_ID_FAIL,
			payload: err.response.data.error.massage
		});
	}
}
export const editItem =(
	id,
	namabarang,
	SaleId,
	CategoryId,
	SatuanId,
	beli,
	jual,
	kode,
	stock
)=>async(dispatch)=>{
	const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = JSON.stringify({
		namabarang,
		SaleId,
		CategoryId,
		SatuanId,
		beli,
		jual,
		kode,
		stock
	  });
	  
	  try {
		const res = await API.patch(`/item/${id}`,body,config);
		dispatch({
		  type: EDIT_ITEM_SUCCESS,
		  payload: res.data
		});
		dispatch(getItem())
	  } catch (err) {
		dispatch({
		  type: EDIT_ITEM_FAIL,
		  payload: err.response.data.error.massage
		});
	  }
}

export const deletItem =(id)=>async(dispatch)=>{
    try {
		let res = await API.delete(`/item/${id}`);
		dispatch({
			type: DELET_ITEM_SUCCESS,
			payload: res.data
		});
		dispatch(getItem())
	} catch (err) {
		dispatch({
			type: DELET_ITEM_FAIL,
			payload: err.response.data.error.massage
		});
	}
}