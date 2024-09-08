import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { TgProvider } from "./States/TgContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <TgProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
   </TgProvider>
  </StrictMode>,
)
