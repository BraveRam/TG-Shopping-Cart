import { createContext, useContext, useReducer, useEffect } from "react";
import { tgReducer } from "./TgReducer";
import axios from "axios";

const TgContext = createContext();

export function TgProvider({children}){
  const [state, dispatch] = useReducer(tgReducer, {
    isInitialized: false,
    TG: window.Telegram?.WebApp || ""
  })
  
  useEffect(()=>{
    const tg = state.TG;
    const initialize = ()=>{
      if(tg.initData && tg.initDataUnsafe && tg.initDataUnsafe.user){  
        dispatch({type: "SET_IS_INITIALIZED"})
        tg.expand()
        tg.headerColor = "#000"
      } else{
        dispatch({type: "UNSET_IS_INITIALIZED"})
      }
    }
    initialize();
  }, [])
  
  
  return (
     <TgContext.Provider value={{state, dispatch}}>
      {children}
     </TgContext.Provider>
    )
}

export function useTgContext(){
  return useContext(TgContext)
}
