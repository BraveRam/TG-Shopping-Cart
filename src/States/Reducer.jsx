export const reducer = (state, action)=>{
  switch(action.type){
    case "ADD_TO_CART":
      return {
        ...state, cartItems: state.cartItems.map(item=>item.id === action.payload ? {...item, quantity: item.quantity >= 0 ? item.quantity + 1 : item.quantity = 1} : item), modalOpen: false
      }
    case "REMOVE_FROM_CART":
      return {
        ...state, cartItems: state.cartItems.map(item=>item.id === action.payload ? {...item, quantity: 0} : item)
      }
    case "DECREASE":
      return {
        ...state, cartItems: state.cartItems.map(item=>item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
      }
    case "TOTAL_ITEMS":
      return {
        ...state, totalQuantity: state.cartItems.reduce((total, item)=>{
          return total + item.quantity;
        }, 0)
      }
    case "TOTAL_PRICE":
      return {
        ...state, totalPrice: state.cartItems.reduce((total, item)=>{
          return total + (item.quantity * item.price);
        }, 0)
      }
    case "CLEAR_CART":
      return {
        ...state, cartItems: state.cartItems.map(item=>({...item, quantity: 0}))
      }
    case "OPEN_MODAL":
      return {
        ...state, modalOpen: true
      }
    case "CLOSE_MODAL":
      return {
        ...state, modalOpen: false
      }
    case "PURCHASE":
      return {
        ...state, modalOpen: false, cartItems: state.cartItems.map(item=>({...item, quantity: 0}))
      }
    default:
      return state;
  }
}