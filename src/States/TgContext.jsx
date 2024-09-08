import { createContext, useContext, useReducer, useEffect } from "react";
import { tgReducer } from "./TgReducer";
import axios from "axios";
import TelegramWebAppWrapper from "./TgWebAppClass";

const TgContext = createContext();

export function TgProvider({children}){
  const [state, dispatch] = useReducer(tgReducer, {
    isInitialized: false,
    TG: window.Telegram?.WebApp || ""
  })
  
  useEffect(()=>{
    const initialize = ()=>{
      if(state.TG.initData && state.TG.initDataUnsafe && state.TG.initDataUnsafe.user){  
        const tg = new TelegramWebAppWrapper(state.TG)
        dispatch({type: "SET_IS_INITIALIZED"})
        tg.expand()
        const userId = tg.initDataUnsafe.user.id;
        const initData = tg.initData;
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
