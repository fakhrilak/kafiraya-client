import { API, setAuthToken } from '../../config/api';
import {getTmasukId}from "./Tmasuk"
import {
    POST_BUYITEM_SUCCESS,
    POST_BUYITEM_FAIL,
    GET_BUYITEM_SUCCESS,
    GET_BUYITEM_FAIL,
    EDIT_BUYITEM_FAIL,
    EDIT_BUYITEM_SUCCESS,
    DELET_BUYITEM_SUCCESS,
    DELET_BUYITEM_FAIL
} from "./types"

export const postBuyItem =(ItemId,beli,banyak,TmasukId)=> async(dispatch)=>{
    const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
        ItemId,
        beli,
        banyak,
        TmasukId
	  });
    try{
        let res = await API.post('/buy',body,config);
        dispatch({
			type: POST_BUYITEM_SUCCESS,
			payload: res.data
        });
        dispatch(getTmasukId(TmasukId))
    }catch(err){
        dispatch({
            type:POST_BUYITEM_FAIL,
            payload: err.response.data.error
        })
    }
}

export const editBuyItem =(id)=>async(dispatch)=>{
    try{
        let res = await API.post(`/buy${id}`);
        dispatch({
            type: EDIT_BUYITEM_SUCCESS,
			payload: res.data
        })
    }catch(err){
        dispatch({
            type:EDIT_BUYITEM_FAIL,
            payload: err.response.data.error
        })
    }
}

export const deletBuyItem =(id)=>async(dispatch)=>{
    try{
        let res = await API.post(`/buy${id}`);
        dispatch({
            type: DELET_BUYITEM_SUCCESS,
			payload: res.data
        })
    }catch(err){
        dispatch({
            type:DELET_BUYITEM_FAIL,
            payload: err.response.data.error
        })
    }
}

export const getBuyitem = ()=>async(dispatch)=>{
    try{
        let res = await API.get("/buy");
        dispatch({
            type: GET_BUYITEM_SUCCESS,
			payload: res.data
        })
    }catch(err){
        dispatch({
            type:   GET_BUYITEM_FAIL,
            payload: err.response.data.error
        })
    }
}