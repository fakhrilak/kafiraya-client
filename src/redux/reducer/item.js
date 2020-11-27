import {
    GET_ITEM_SUCCESS,
    GET_ITEM_FAIL,
    POST_ITEM_SUCCESS,
    POST_ITEM_FAIL,
    EDIT_ITEM_SUCCESS,
    EDIT_ITEM_FAIL,
    DELET_ITEM_FAIL,
    DELET_ITEM_SUCCESS,
    GET_ITEM_ID_FAIL,
    GET_ITEM_ID_SUCCESS
}from "../action/types"

const initialState = {
    item:[],
    loading: true,
    error:null,
    itemId:[],
    namaSales:[],
    namaCategory:[],
    namaSatuan:[],
    idSales:0,
    idCategory:0,
    idSatuan:0,
    massageItem:false,
    status:false
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_ITEM_SUCCESS:
            return{
                ...state,
                loading: false,
                item : payload,
                error : false
            }
        case GET_ITEM_FAIL:
        case GET_ITEM_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                itemId:payload,
                namaSales: payload.sales.nama,
                namaCategory:payload.category.nama,
                namaSatuan:payload.satuan.nama,
                idSales : payload.sales.id,
                idCategory : payload.category.id,
                idSatuan : payload.satuan.id,
                error:null
            }
        case POST_ITEM_SUCCESS:
            return{
                ...state,
                massageItem: payload.massage,
                status:true
            }
        case POST_ITEM_FAIL:
            return{
                ...state,
                massageItem: payload.massage,
                status:false
            }
        case EDIT_ITEM_FAIL:
            return{
                ...state,
                massageItem:payload.massage,
                status:false
            }
        case EDIT_ITEM_SUCCESS:
            return{
                ...state,
                massageItem:payload.massage,
                status: true
            }
        case DELET_ITEM_SUCCESS:{
            return{
                ...state,
                massageItem:payload.massage,
            }
        }
        default:
            return state;
    }
  }