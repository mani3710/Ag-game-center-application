import {
    REQUEST_CATEGORY_DATA,
    REQUEST_CATEGORY_FAILURE,
    REQUEST_CATEGORY_SUCCESS,
    SET_SELECTED_CATEGORY,
    REMOVE_OLD_DATA_CATEGORY
} from './type';
const initialState = {
    data: [],
    selectedCategory: "card",
    pageNo: 1,
    isShowSpinner: false
}
const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_CATEGORY_DATA:
            return {
                ...state,
                isShowSpinner: true
            }
            break;
        case REQUEST_CATEGORY_SUCCESS:
            return {
                ...state,
                isShowSpinner: false,
                data: state.data.concat(action.payload),
                error: "",
                pageNo: state.pageNo + 1

            }
            break;
        case REQUEST_CATEGORY_FAILURE:
            return {
                ...state,
                isShowSpinner: false,
                error: action.payload
            }
            break;
        case SET_SELECTED_CATEGORY:
            return {
                ...state,
                selectedCategory: action.payload
            }
            break;
        case REMOVE_OLD_DATA_CATEGORY:
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

export default categoryReducer;