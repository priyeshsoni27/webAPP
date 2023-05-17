// import SearchTypes from "../ActionTypes/searchActionsType"
import { SearchTypes } from "../ActionTypes"


const initialState={
  sortedData :[]
}
// item?.category.startsWith(action.payload.queryEntered)
const SearchData = (state=initialState,action) => {
  console.log("filterdata in reducer",action.payload?.queryEntered)
  switch(action.type){
    case SearchTypes?.SEARCHED_DATA:
      return{
        ...state,
        sortedData:action?.payload?.productList?.filter(
          (item)=>item?.category?.startsWith(action.payload?.queryEntered)
          )
      }
      default:
        return {...state}
        
      }
    }

export default SearchData