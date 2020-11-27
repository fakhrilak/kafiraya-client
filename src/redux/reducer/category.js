import{
GET_CATEGORY_SUCCESS,
GET_CATEGORY_FAIL,
POST_CATEGORY_SUCCESS,
POST_CATEGORY_FAIL,
EDIT_CATEGORY_FAIL,
EDIT_CATEGORY_SUCCESS,
DELET_CATEGORY_SUCCESS,
DELET_CATEGORY_FAIL,
GET_CATEGORY_ID_FAIL,
GET_CATEGORY_ID_SUCCESS
}from "../action/types"

const initialState = {
    category:[],
    categoryId:[],
    loading: true,
    error:null,
    massageCategory:false,
    status:false
  };

  export default function (state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                category : payload,
                error : false
            }
        case GET_CATEGORY_FAIL:
            return{
                ...state,
                massageCategory:payload.massage
            }
        case GET_CATEGORY_ID_SUCCESS:
            return{
                ...state,
                loading:false,
                error:null,
                categoryId:payload
            }
        case POST_CATEGORY_SUCCESS:
            return{
                ...state,
                massageCategory:payload.massage,
                status:false
            }
        case POST_CATEGORY_FAIL:
            return{
                ...state,
                massageCategory:payload.massage,
                status: false
            }
        case EDIT_CATEGORY_SUCCESS:
            return{
                ...state,
                massageCategory:payload.massage,
                status: false
            }
        case EDIT_CATEGORY_FAIL:
            return{
                ...state,
                massageCategory:payload.massage,
                status: false
            }
        case DELET_CATEGORY_SUCCESS:
            return{
                ...state,
                massageCategory:payload.massage,
                status:false
            }
        case DELET_CATEGORY_FAIL:
            return{
                ...state,
                massageCategory:payload.massage,
                status:false
            }
        case GET_CATEGORY_ID_FAIL:
        default:
            return state;
    }
  }