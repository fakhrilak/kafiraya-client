import{
    POST_TMASUK_SUCCESS,
    POST_TMASUK_FAIL,
    GET_TMASUK_FAIL,
    GET_TMASUK_SUCCESS,
    EDIT_TMASUK_FAIL,
    EDIT_TMASUK_SUCCESS,
    DELET_TMASUK_FAIL,
    DELET_TMASUK_SUCCESS,
    GET_TMASUK_ID_SUCCESS,
    GET_TMASUK_ID_FAIL
} from "../action/types";

const initialState = {
    Tmasuk:[],
    loading: true,
    error:null,
    massageTmasuk:false,
    TmasukId:[],
    Sales:[],
    Items:[]
  };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_TMASUK_SUCCESS:
            return{
                ...state,
                Tmasuk:payload,
                loading:false,
            }
        case GET_TMASUK_FAIL:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        case POST_TMASUK_SUCCESS:
            return{
                ...state,
                massageTmasuk:payload.massage,
            }
        case POST_TMASUK_FAIL:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        case GET_TMASUK_ID_SUCCESS:
            return{
                ...state,
                TmasukId:payload.data,
                Sales:payload.data.sales,
                Items:payload.data.Buyitems
            }
        case EDIT_TMASUK_SUCCESS:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        case EDIT_TMASUK_FAIL:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        case GET_TMASUK_ID_FAIL:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        case DELET_TMASUK_SUCCESS:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        case DELET_TMASUK_FAIL:
            return{
                ...state,
                massageTmasuk:payload.massage
            }
        default:
            return state;
    }
  }