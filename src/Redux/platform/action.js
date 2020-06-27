import {
    REQUEST_PLATFORM_DATA,
    REQUEST_PLATFORM_SUCCESS,
    REQUEST_PLATFORM_FAILURE,
   
    REMOVE_OLD_DATA_PLATFORM
} from './type';

const fetchCategoryData =()=>{
    return{
        type:REQUEST_PLATFORM_DATA
    }
}
const fetchCategorySuccess =(data)=>{
    return{
        type:REQUEST_PLATFORM_SUCCESS,
        payload:data
    }
}
const fetchCategoryFailure =(error)=>{
    return{
        type:REQUEST_PLATFORM_FAILURE,
        payload:error
    }
}

export const fetchPlatformGameData = (pageNo,id)=>{
    console.log("page no",`https://api.rawg.io/api/games?page_size=50&page=${pageNo}&platforms=${id}`);
    return (dispatch)=>{
        dispatch(fetchCategoryData());
        fetch(`https://api.rawg.io/api/games?page_size=50&page=${pageNo}&platforms=${id}`)
        .then(res=>res.json())
        .then((responseJson)=>{
            dispatch(fetchCategorySuccess(responseJson.results)); 
        }).catch(error=>{
            dispatch(fetchCategoryFailure(error));
        })
    }
  }


  export const removeOldDataPlatform=()=>{
      return{
          type:REMOVE_OLD_DATA_PLATFORM,
      }
  }