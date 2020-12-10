import { API, setAuthToken } from '../../config/api';
import {getTkeluarId}from "./tkeluar"
import {
    POST_SALEITEM_SUCCESS,
    POST_SALEITEM_FAIL,
    GET_SALEITEM_SUCCESS,
    GET_SALEITEM_FAIL,
    EDIT_SALEITEM_FAIL,
    EDIT_SALEITEM_SUCCESS,
    DELET_SALEITEM_SUCCESS,
    DELET_SALEITEM_FAIL
} from "./types"

export const postSaleItem =(ItemId,beli,banyak,TkeluarId)=> async(dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
        ItemId,
        beli,
        banyak,
        TkeluarId
	  });
    try{
        let res = await API.post('/sale',body,config);
        dispatch({
			type: POST_SALEITEM_SUCCESS,
			payload: res.data
        });
        dispatch(getTkeluarId(TkeluarId))
    }catch(err){
        dispatch({
            type:POST_SALEITEM_FAIL,
            payload: err.response.data.error
        })
        console.log(err.response.data.error)
    }
}

export const editSaleItem =(id)=>async(dispatch)=>{
    try{
        let res = await API.post(`/sale${id}`);
        dispatch({
            type: EDIT_SALEITEM_SUCCESS,
			payload: res.data
        })
    }catch(err){
        dispatch({
            type:EDIT_SALEITEM_FAIL,
            payload: err.response.data.error
        })
    }
}

export const deletSaleItem =(id)=>async(dispatch)=>{
    try{
        let res = await API.post(`/sale${id}`);
        dispatch({
            type: DELET_SALEITEM_SUCCESS,
			payload: res.data
        })
    }catch(err){
        dispatch({
            type:DELET_SALEITEM_FAIL,
            payload: err.response.data.error
        })
    }
}

export const getSaleItem =()=>async(dispatch)=>{
    try{
        let res = await API.get(`/sale`);
        dispatch({
            type: GET_SALEITEM_SUCCESS,
			payload: res.data
        })
    }catch(err){
        dispatch({
            type:GET_SALEITEM_FAIL,
            payload: err.response.data.error
        })
    }
}