import {
    REQUEST_CATEGORY_DATA,
    REQUEST_CATEGORY_SUCCESS,
    REQUEST_CATEGORY_FAILURE,
    SET_SELECTED_CATEGORY,
    REMOVE_OLD_DATA_CATEGORY
} from './type';

const fetchCategoryData =()=>{
    return{
        type:REQUEST_CATEGORY_DATA
    }
}
const fetchCategorySuccess =(data)=>{
    return{
        type:REQUEST_CATEGORY_SUCCESS,
        payload:data
    }
}
const fetchCategoryFailure =(error)=>{
    return{
        type:REQUEST_CATEGORY_FAILURE,
        payload:error
    }
}

export const fetchCategoryGameData = (pageNo,cat)=>{
    console.log("page no",`https://api.rawg.io/api/games?page_size=50&page=${pageNo}&genres=${cat}`);
    return (dispatch)=>{
        dispatch(fetchCategoryData());
        fetch(`https://api.rawg.io/api/games?page_size=50&page=${pageNo}&genres=${cat}`)
        .then(res=>res.json())
        .then((responseJson)=>{
            dispatch(fetchCategorySuccess(responseJson.results)); 
        }).catch(error=>{
            dispatch(fetchCategoryFailure(error));
        })
    }
  }
  export const setSelectedCategory = (cat)=>{
    return{
        type:SET_SELECTED_CATEGORY,
        payload:cat
    }
  }

  export const removeOldDataCategory=()=>{
      return{
          type:REMOVE_OLD_DATA_CATEGORY,
      }
  }