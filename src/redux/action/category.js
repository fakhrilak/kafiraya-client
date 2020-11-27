import { API, setAuthToken } from '../../config/api';
import {
GET_CATEGORY_SUCCESS,
GET_CATEGORY_FAIL,
POST_CATEGORY_SUCCESS,
POST_CATEGORY_FAIL,
EDIT_CATEGORY_FAIL,
EDIT_CATEGORY_SUCCESS,
DELET_CATEGORY_SUCCESS,
DELET_CATEGORY_FAIL,
GET_CATEGORY_ID_SUCCESS,
GET_CATEGORY_ID_FAIL
} from "../action/types"


export const getCategory =()=>async(dispatch)=>{
    try{
        let res = await API.get('/category');
		dispatch({
			type: GET_CATEGORY_SUCCESS,
			payload: res.data.data
		});
    }catch(err){
        dispatch({
			type: GET_CATEGORY_FAIL,
			payload: err.response.data.error
		});
    }
}

export const postCategory =(nama)=>async(dispatch)=>{
	const config = {
		headers: {
		  "Content-Type": "application/json",
		},
	  };
	  const body = JSON.stringify({
		nama
	  });
	try{
		let res = await API.post('/category',body,config)
		dispatch({
			type: POST_CATEGORY_SUCCESS,
			payload: res.data
		});
	}catch(err){
		dispatch({
			type: POST_CATEGORY_FAIL,
			payload: err.response.data.error
		});
	}   
}
export const getCategoryId = (id)=>async(dispatch)=>{
	try {
		const res = await API.patch(`/category/${id}`);
		dispatch({
		  type: GET_CATEGORY_ID_SUCCESS,
		  payload: res.data.data
		});
	  } catch (err) {
		dispatch({
		  type: GET_CATEGORY_ID_FAIL,
		  payload: err.response.data.error
		});
	  }
}
export const editCategory =(id,nama)=>async(dispatch)=>{
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      const body = JSON.stringify({
        nama
	  });
	  
	  try {
		const res = await API.patch(`/category/${id}`,body,config);
		dispatch({
		  type: EDIT_CATEGORY_SUCCESS,
		  payload: res.data
		});
		dispatch(getCategory())
	  } catch (err) {
		dispatch({
		  type: EDIT_CATEGORY_FAIL,
		  payload: err.response.data.error
		});
	  }
}

export const deletCategory =(id)=>async(dispatch)=>{
	try {
		let res = await API.delete(`/category/${id}`);
		dispatch({
			type: DELET_CATEGORY_SUCCESS,
			payload: res.data
		});
		dispatch(getCategory())
	} catch (err) {
		dispatch({
			type: DELET_CATEGORY_FAIL,
			payload: err.response.data.error
		});
	}
    
}