import { CartActions } from "../ActionTypes";
import axios from "axios";

export const cartActions=()=>{
    return async(dispatch)=>{
        try{
            console.log("heloooo")
            const response=await axios.get('https://fakestoreapi.com/products')
            dispatch({type:CartActions.FETCH_DETAILS,payload:response.data})
        }
        catch(error){
            dispatch({type:CartActions.Add_TO_Cart_Faliure,error})
        }
    }

}


export const cartDetails=(body)=>{
    return async(dispatch)=>{
        try{
            dispatch({type:CartActions.Add_TO_Cart,payload:body})
            console.log("kjhgfds",body)

        }catch(error){
            dispatch({type:CartActions.Error_In_Cart,error})
        }
    }

}