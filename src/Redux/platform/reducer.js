import {
    REQUEST_PLATFORM_DATA,
    REQUEST_PLATFORM_SUCCESS,
    REQUEST_PLATFORM_FAILURE,
   
    REMOVE_OLD_DATA_PLATFORM
} from './type';
const initialState = {
    data: [],
   
    pageNo: 1,
    isShowSpinner: false
}
const platformReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PLATFORM_DATA:
            return {
                ...state,
                isShowSpinner: true
            }
            break;
        case REQUEST_PLATFORM_SUCCESS:
            return {
                ...state,
                isShowSpinner: false,
                data: state.data.concat(action.payload),
                error: "",
                pageNo: state.pageNo + 1

            }
            break;
        case REQUEST_PLATFORM_FAILURE:
            return {
                ...state,
                isShowSpinner: false,
                error: action.payload
            }
            break;
        
        case REMOVE_OLD_DATA_PLATFORM:
            return {
                ...state,
                data:[],
                pageNo:1
            }
            break;
        default:
            return { ...state };
    }

}

export default platformReducer;