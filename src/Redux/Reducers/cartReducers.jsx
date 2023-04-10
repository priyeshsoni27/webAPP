import { CartActions } from "../ActionTypes"
const intitalState={
    products:[]
}

const cartInitalState={
    addedTOCart:[]
}

export const cartReducers=(state=intitalState,action)=>{

    switch(action.type){
        case CartActions.FETCH_DETAILS:
            return {    
                ...state, products:action.payload
            };
       
        default:
            return {
            ...state
        }

    }
}



export const AddtoCartReducer=(state=cartInitalState,action)=>{
    switch(action.type){
        case CartActions.Add_TO_Cart:
            return{
                ...state,
                addedTOCart: [...state.addedTOCart, action.payload]
           
            }

            default:
                return {
                ...state
            }
    
        }
    }

