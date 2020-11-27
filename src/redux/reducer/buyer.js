import{
    DELET_BUYER_FAIL,
    EDIT_BUYER_SUCCESS,
    GET_BUYER_FAIL,
    GET_BUYER_ID_FAIL,
    GET_BUYER_SUCCESS,
    GET_BUYER_ID_SUCCESS,
    DELET_BUYER_SUCCES,
    EDIT_BUYER_FAIL,
    POST_BUYER_FAIL,
    POST_BUYER_SUCCESS,
    EDIT_BUYITEM_FAIL,
    DELET_BUYITEM_FAIL
    }from "../action/types"

const initialState = {
    loading: true,
    error:true,
    massageBuyer:false,
    buyer:[],
    buyerId:[],
};
    
export default function (state = initialState, action) {
const { type, payload } = action;
switch (type) {
    case GET_BUYER_SUCCESS:
        return{
            ...state,
            buyer:payload.data,
            error:false,
            loading:false,
        }
    case GET_BUYER_FAIL:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case POST_BUYER_SUCCESS:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case POST_BUYER_FAIL:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case GET_BUYER_ID_SUCCESS:
        return{
            ...state,
            buyerId:payload.data
        }
    case GET_BUYER_ID_FAIL:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case EDIT_BUYER_SUCCESS:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case EDIT_BUYITEM_FAIL:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case DELET_BUYER_SUCCES:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    case DELET_BUYITEM_FAIL:
        return{
            ...state,
            massageBuyer:payload.massage
        }
    default:
        return state;
    }
}