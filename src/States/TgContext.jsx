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
    const TGD = state.TG;
    const initialize = ()=>{
      if(TGD.initData && TGD.initDataUnsafe && TGD.initDataUnsafe.user){  
        dispatch({type: "SET_IS_INITIALIZED"})
        const tg = new TelegramWebAppWrapper(TGD)
        tg.expand()
        tg.showMainButton()
        tg.setMainButtonText("Checkouts")
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
