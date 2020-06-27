import {FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS,FETCH_REQUEST} from './type';

const fetchRequest =()=>{
    return{
        type:FETCH_REQUEST
    }
}
const fetchDataSuccess =(data)=>{
    return{
        type:FETCH_DATA_SUCCESS,
        payload:data
    }
}
const fetchDataFailure =(error)=>{
    return{
        type:FETCH_DATA_FAILURE,
        payload:error
    }
}

export const fetchListGameData = (pageNo)=>{
    console.log("page no",`https://api.rawg.io/api/games?page_size=50&page=${pageNo}`);
    return (dispatch)=>{
        dispatch(fetchRequest());
        fetch(`https://api.rawg.io/api/games?page_size=50&page=${pageNo}`)
        .then(res=>res.json())
        .then((responseJson)=>{
            dispatch(fetchDataSuccess(responseJson.results)); 
        }).catch(error=>{
            dispatch(fetchDataFailure(error));
        })
    }
  }