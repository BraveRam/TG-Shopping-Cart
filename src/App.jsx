import { ImSpinner } from "react-icons/im";
import { AppProvider } from "./States/Context";
import { Navbar } from "./Components/Navbar";
import { Products } from "./Components/Products";
import { Footer } from "./Components/Footer";
import { memo, useEffect, useState } from "react"
import { Router } from "./Routes/Route";
import { useTgContext } from "./States/TgContext";

export const App = memo(()=>{
  const { state } = useTgContext()
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
     setTimeout(()=>{
       setLoading(false)
     }, 1000)
  }, [])
  if(loading){
    return <div className="flex items-center justify-center h-screen">
      <h1 className="text-7xl animate-spin text-blue-600"><ImSpinner/></h1>
    </div>
  }
  if(!state.isInitialized){
    return <h1 className="text-center text-2xl font-extrabold">Open the bot in Telegram</h1>
  }
  return (
    <div className="bg-black text-white">
      <AppProvider>
        <Navbar/>
        <Router/>
        <Footer/>
      </AppProvider>
    </div>
    )
})