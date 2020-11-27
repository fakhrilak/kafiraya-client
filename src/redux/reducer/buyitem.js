import{
    POST_BUYITEM_SUCCESS,
    POST_BUYITEM_FAIL,
    GET_BUYITEM_SUCCESS,
    GET_BUYITEM_FAIL,
    EDIT_BUYITEM_FAIL,
    EDIT_BUYITEM_SUCCESS,
    DELET_BUYITEM_SUCCESS,
    DELET_BUYITEM_FAIL
}from "../action/types"


const initialState = {
    loading: true,
    error:true,
    massageBuyItem:false,
    itemterbeli : [],
    sales:[],
    item:[]
  };

export default function (state = initialState, action) {
const { type, payload } = action;
switch (type) {
    case POST_BUYITEM_SUCCESS:
        return{
            ...state,
            massageBuyItem:payload.massage,
            error:false
        }
    case POST_BUYITEM_FAIL:
        return{
            ...state,
            massageBuyItem:payload.massage,
            error:false
        }
    case EDIT_BUYITEM_SUCCESS:
        return{
            ...state,
            massageBuyItem:payload.massage
        }
    case EDIT_BUYITEM_FAIL:
        return{
            ...state,
            massageBuyItem:payload.massage
        }
    case EDIT_BUYITEM_SUCCESS:
        return{
            ...state,
            massageBuyItem:payload.massage
        }
    case EDIT_BUYITEM_FAIL:
        return{
            ...state,
            massageBuyItem:payload.massage
        }
    case GET_BUYITEM_SUCCESS:
        return{
            ...state,
            itemterbeli:payload.data,
            item:payload.data
        }
    case GET_BUYITEM_FAIL:
        return{
            ...state,
            massageBuyItem:payload.massage
        }
    default:
        return state;
}
}