import {
    GET_SATUAN_SUCCESS,
    GET_SATUAN_FAIL,
    POST_SATUAN_SUCCESS,
    POST_SATUAN_FAIL,
    EDIT_SATUAN_SUCCESS,
    EDIT_SATUAN_FAIL,
    DELET_SATUAN_SUCCES,
    DELET_SATUAN_FAIL,
    GET_SATUAN_ID_FAIL,
    GET_SATUAN_ID_SUCCESS
}from "../action/types"

const initialState = {
    satuan:[],
    satuanId:[],
    loading: true,
    error:null,
    massageSatuan:false
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_SATUAN_SUCCESS:
            return{
                ...state,
                loading: false,
                satuan : payload,
                error : false
            }
        case GET_SATUAN_FAIL:
            return{
                ...state,
                massageSatuan:payload.massage,
            }
        case GET_SATUAN_ID_SUCCESS:
            return{
                ...state,
                satuanId:payload,
                loading:false,
                error:false
            }
        case EDIT_SATUAN_SUCCESS:
            return{
                ...state,
                massageSatuan:payload.massage,
            }
        case EDIT_SATUAN_FAIL:
            return{
                ...state,
                massageSatuan:payload.massage
            }
        case DELET_SATUAN_SUCCES:
            return{
                ...state,
                massageSatuan:payload.massage
            }
        case POST_SATUAN_SUCCESS:
            return{
                ...state,
                massageSatuan:payload.massage
            }
        case POST_SATUAN_FAIL:
            return{
                ...state,
                massageSatuan:payload.massage,
            }
        case DELET_SATUAN_FAIL:
            return{
                ...state,
                massageSatuan:payload.massage
            }
        case GET_SATUAN_ID_FAIL:
            return{
                ...state,
                massageSatuan:payload.massage
            }
        default:
            return state;
    }
  }