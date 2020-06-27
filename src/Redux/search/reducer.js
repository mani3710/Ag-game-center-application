import {
    FETCH_SEARCH_DATA,
    FETCH_SEARCH_FAILURE,
    FETCH_SEARCH_SUCCESS
} from './type';
const initialState={
    data:[],
    isShowSpinner:false,
    error:""
}
const searchReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_SEARCH_DATA:
           return {
                ...state,
                isShowSpinner:true
            }
        case FETCH_SEARCH_SUCCESS:
            return{
                ...state,
                data:action.payload,
                isShowSpinner:false,
                error:""
            }
            case FETCH_SEARCH_FAILURE:
                return{
                    ...state,
                    data:[],
                    isShowSpinner:false,
                    error:action.payload,

                    
                }
        default:
            return{...state}
    }
}
export default searchReducer;