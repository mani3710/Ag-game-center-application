import { REQUEST_DATA, REQUEST_FAILURE, REQUEST_SUCCESS, SET_SELECTED_GAME, CALL_SITE, GET_COMPLETE_GAME_DATA } from './type';
const initialState = {
    pageNo: 1,
    data: [],
    isShowSpinner: false,
    errorMessage: "",
    selectedGameData: {},
    completedGameData: {}
}
const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_DATA:
            return {
                ...state,
                isShowSpinner: true
            }
            break;
        case REQUEST_SUCCESS:
            return {
                ...state,
                isShowSpinner: false,
                data: action.payload,
                errorMessage: "",
                pageNo: state.pageNo + 1
            }
            break;
        case REQUEST_FAILURE:
            return {
                ...state,
                isShowSpinner: false,
                errorMessage: action.payload,
            }
            break;
        case SET_SELECTED_GAME:
            return {
                ...state,
                selectedGameData: action.payload
            }
            break;
        case GET_COMPLETE_GAME_DATA:
            return {
                ...state,
                completedGameData:action.payload,
                isShowSpinner:false

            }
            break;
        default:
            return {
                ...state
            }

    }

}

export default homeReducer;