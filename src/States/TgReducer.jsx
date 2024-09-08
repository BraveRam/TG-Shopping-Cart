export const tgReducer = (state, action)=>{
  switch(action.type){
    case "SET_IS_INITIALIZED":
      return {
        ...state, isInitialized: true
      }
    case "UNSET_IS_INITIALIZED":
      return {
        ...state, isInitialized: false
      }
  }
}