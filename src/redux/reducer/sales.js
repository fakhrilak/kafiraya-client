import {
GET_SALES_SUCCESS,
GET_SALES_FAIL,
POST_SALES_SUCCESS,
POST_SALES_FAIL,
EDIT_SALES_FAIL,
EDIT_SALES_SUCCESS,
DELET_SALES_SUCCESS,
DELET_SALES_FAIL,
GET_SALES_ID_SUCCESS,
GET_SALES_ID_FAIL
}from '../action/types'
const initialState = {
    sales:[],
    loading: true,
    error:null,
    salesId:[],
    massageSales:false
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SALES_SUCCESS:
            return{
                ...state,
                loading: false,
                sales : payload,
                error : false
            }
        case GET_SALES_FAIL:
            return{
                ...state,
                massageSales:payload.massage
            }
        case POST_SALES_SUCCESS:
            return{
                ...state,
                massageSales:payload.massage
            }
        case POST_SALES_FAIL:
            return{
                ...state,
                massageSales:payload.massage
            }
        case GET_SALES_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                salesId:payload,
                error:null
            }
        case EDIT_SALES_SUCCESS:
            return{
                ...state,
                massageSales:payload.massage
            }
        case EDIT_SALES_FAIL:
            return{
                ...state,
                massageSales:payload.massage
            }
        case GET_SALES_ID_FAIL:
            return{
                ...state,
                massageSales:payload.massage
            }
        case DELET_SALES_SUCCESS:
            return{
                ...state,
                massageSales:payload.massage
            }
        case DELET_SALES_FAIL:
            return{
                ...state,
                massageSales:payload.massage
            }
        default:
            return state;
    }
  }