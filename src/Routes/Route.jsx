import { Routes, Route } from "react-router-dom";
import { Products } from "../Components/Products";
import { CartPage } from "../Components/CartPage";

export function Router(){
  return (
     <Routes>
       <Route path="/" element={<Products/>}/>
       <Route path="/cart" element={<CartPage/>}/>
       <Route path="*" element={<Products/>}/>
     </Routes>
    )
}