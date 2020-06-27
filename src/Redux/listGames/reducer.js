import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS, FETCH_REQUEST } from './type';
const initialState = {
    data:[],
    isShowSpinner: false,
    pageNo: 1,
    error: ""
}

const listGameReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {
                ...state,
                isShowSpinner: true
            }
            break;
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                isShowSpinner: false,
                data:state.data.concat(action.payload),
                error:"",
                pageNo: state.pageNo +1

            }
            break;
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                isShowSpinner: false,
                error:action.payload
            }
            break;
        default:
            return { ...state };
    }

}

export default listGameReducer;
