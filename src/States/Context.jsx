import { useContext, createContext, useReducer, useEffect } from "react";
import { reducer } from "./Reducer";
import { data } from "../Data.js"

const AppContext = createContext(null)

export function AppProvider({children}){
  const [cart, dispatch] = useReducer(reducer, { cartItems: JSON.parse(localStorage.getItem("Carts.App")) || data, totalQuantity: 0, totalPrice: 0, modalOpen: false });
  
  useEffect(()=>{
    dispatch({type: "TOTAL_ITEMS"})
  }, [cart.cartItems])
  localStorage.clear()
  useEffect(()=>{
    localStorage.setItem("Carts.App", JSON.stringify(cart.cartItems))
  }, [cart.cartItems])
  
  useEffect(()=>{
    dispatch({type: "TOTAL_PRICE"})
  }, [cart.cartItems])
  return (
     <AppContext.Provider value={{cart, dispatch}}>
        {children}
     </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
  return useContext(AppContext)
}