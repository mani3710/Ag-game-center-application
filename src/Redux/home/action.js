import {Linking} from 'react-native';
import {REQUEST_DATA,REQUEST_FAILURE,REQUEST_SUCCESS,SET_SELECTED_GAME,GET_COMPLETE_GAME_DATA} from './type';

const fetchGameRequest =()=>{
    return{
        type:REQUEST_DATA
    }
}
const requestSuccess = games =>{
    return{
        type:REQUEST_SUCCESS,
        payload:games
    }
}
const requestFailure = error =>{
    return{
        type:REQUEST_FAILURE,
        payload:error
    }
}
export const fetchGame = ()=>{
  return (dispatch)=>{
      dispatch(fetchGameRequest());
      fetch(`https://api.rawg.io/api/games?page_size=50`)
      .then(res=>res.json())
      .then((responseJson)=>{
          dispatch(requestSuccess(responseJson.results)); 
      }).catch(error=>{
          dispatch(requestFailure(error));
      })
  }
}
export const setSelectedGame = (game)=>{
    return {
        type:SET_SELECTED_GAME,
        payload:game
    }
  }
 const callSite=(url1)=>{
       
    var url = url1;
    debugger;
    console.log("url",url);
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
          Linking.openURL(url);
        } else {
          console.log("Don't know how to open URI: " + url);
        }
        
      });

}
  export const callWebsites = (url)=>{
    return (dispatch)=>{
        dispatch(callSite(url));
        
    }
  }
  
const fetchCompleteSuccess =(data)=>{
    return{
        type:GET_COMPLETE_GAME_DATA,
        payload:data
    }
}
  export const fetchCompleteGamaData = (id)=>{
    return (dispatch)=>{
        dispatch(fetchGameRequest);
        fetch(`https://api.rawg.io/api/games/${id}`)
        .then(res=>res.json())
        .then((responseJson)=>{
            console.log("json",responseJson);
            dispatch(fetchCompleteSuccess(responseJson)); 
        }).catch(error=>{
            dispatch(requestFailure(error));
        })
    }
  }

