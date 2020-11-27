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

const initialState = {
    Tkeluar:[],
    loading: true,
    error:null,
    massageTkeluar:false,
    TkeluarId:[],
    Buyer:[],
    Items:[]
  };

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_TKELUAR_SUCCESS:
            return{
                ...state,
                Tkeluar:payload,
                loading:false,
            }
        case GET_TKELUAR_FAIL:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        case POST_TKELUAR_SUCCESS:
            return{
                ...state,
                massageTkeluar:payload.massage,
            }
        case POST_TKELUAR_FAIL:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        case GET_TKELUAR_ID_SUCCESS:
            return{
                ...state,
                TkeluarId:payload.data,
                Buyer:payload.data.buyer,
                Items:payload.data.Saleitems
            }
        case EDIT_TKELUAR_SUCCESS:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        case EDIT_TKELUAR_FAIL:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        case GET_TKELUAR_ID_FAIL:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        case DELET_TKELUAR_SUCCESS:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        case DELET_TKELUAR_FAIL:
            return{
                ...state,
                massageTkeluar:payload.massage
            }
        default:
            return state;
    }
  }