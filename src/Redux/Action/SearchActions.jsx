import {SearchTypes} from "./../ActionTypes";


export const SearchActions = (body) => {
  return (dispatch)=>{
    try{
        dispatch({type:SearchTypes?.SEARCHED_DATA,payload:body})
        console.log("search action body",body)
    }
    catch(error){
      console.log(error)
    }
  }
}
