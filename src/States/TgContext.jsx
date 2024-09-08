import { createContext, useContext, useReducer, useEffect } from "react";
import { tgReducer } from "./TgReducer";
import axios from "axios";
import TelegramWebAppWrapper from "./TgWebAppClass";

const TgContext = createContext();

export function TgProvider({children}){
  const [state, dispatch] = useReducer(tgReducer, {
    isInitialized: false,
    TG: new TelegramWebAppWrapper(window.Telegram?.WebApp || "")
  })
  
  useEffect(()=>{
    const tg = state.TG;
    alert(JSON.stringify(state.TG.initData))
    const initialize = ()=>{
      if(tg.initData && tg.initDataUnsafe && tg.initDataUnsafe.user){  
        dispatch({type: "SET_IS_INITIALIZED"})
        tg.expand()
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
