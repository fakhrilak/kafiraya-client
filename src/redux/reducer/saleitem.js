import{
    POST_SALEITEM_SUCCESS,
    POST_SALEITEM_FAIL,
    GET_SALEITEM_SUCCESS,
    GET_SALEITEM_FAIL,
    EDIT_SALEITEM_FAIL,
    EDIT_SALEITEM_SUCCESS,
    DELET_SALEITEM_SUCCESS,
    DELET_SALEITEM_FAIL
}from"../action/types"
const initialState = {
    loading: true,
    error:true,
    massageSaleItem:false,
    saleitem:[]
  };

export default function (state = initialState, action) {
const { type, payload } = action;
switch (type) {
    case POST_SALEITEM_SUCCESS:
        return{
            ...state,
            massageSaleitem:payload.massage,
            error:false
        }
    case POST_SALEITEM_FAIL:
        return{
            ...state,
            massageSaleItem:payload.massage,
            error:false
        }
    case EDIT_SALEITEM_SUCCESS:
        return{
            ...state,
            massageSaleItem:payload.massage
        }
    case EDIT_SALEITEM_FAIL:
        return{
            ...state,
            massageSaleItem:payload.massage
        }
    case EDIT_SALEITEM_SUCCESS:
        return{
            ...state,
            massageSaleItem:payload.massage
        }
    case EDIT_SALEITEM_FAIL:
        return{
            ...state,
            massageSaleItem:payload.massage
        }
    case GET_SALEITEM_FAIL:
        return{
            ...state,
            massageSaleItem:payload
        }
    case GET_SALEITEM_SUCCESS:
        return{
            ...state,
            saleitem:payload.data
        }
    default:
        return state;
}
}