import {Linking} from 'react-native';
import {FETCH_SEARCH_DATA,FETCH_SEARCH_FAILURE,FETCH_SEARCH_SUCCESS} from './type';

const fetchSearchData =()=>{
    return{
        type:FETCH_SEARCH_DATA
    }
}
const fetchSearchSuccess = games =>{
    return{
        type:FETCH_SEARCH_SUCCESS,
        payload:games
    }
}
const fetchSearchFailure = error =>{
    return{
        type:FETCH_SEARCH_FAILURE,
        payload:error
    }
}
export const fetchSearchGameData = (gameText)=>{
  return (dispatch)=>{
      dispatch(fetchSearchData());
      fetch(`https://api.rawg.io/api/games?search=${gameText}`)
      .then(res=>res.json())
      .then((responseJson)=>{
          console.log("respo",responseJson.results);
          dispatch(fetchSearchSuccess(responseJson.results)); 
      }).catch(error=>{
          dispatch(fetchSearchFailure(error));
      })
  }
}

  
