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
     }, 3000)
  }, [])
  if(loading){
    return <div className="flex items-center justify-center h-screen">
      <h1 className="animate-spin text-white">
        <svg xmlns="http://www.w3.org/2000/svg" height="88px" viewBox="0 -960 960 960" width="88px" fill="#e8eaed"><path d="M196-331q-20-36-28-72.5t-8-74.5q0-131 94.5-225.5T480-798h43l-80-80 39-39 149 149-149 149-40-40 79-79h-41q-107 0-183.5 76.5T220-478q0 29 5.5 55t13.5 49l-43 43ZM476-40 327-189l149-149 39 39-80 80h45q107 0 183.5-76.5T740-479q0-29-5-55t-15-49l43-43q20 36 28.5 72.5T800-479q0 131-94.5 225.5T480-159h-45l80 80-39 39Z"/></svg>
      </h1>
    </div>
  }
  if(!state.isInitialized){
    return <h1 className="text-center text-2xl font-extrabold mt-5">Open the bot in Telegram</h1>
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