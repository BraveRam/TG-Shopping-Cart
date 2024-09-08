import { useGlobalContext } from "../States/Context";
import { Link, NavLink } from "react-router-dom";

export function Navbar(){
  const { cart } = useGlobalContext()
  return (
     <div className="w-[90%] md:w-[60%] lg:w-[60%] xl:w-[50%] rounded h-[20px] bg-black border-[1px] border-white flex items-center justify-between p-6 overflow-clip fixed left-0 right-0 top-1 m-auto z-50">
       <Link to="/" className="font-bold text-white animate-pulse">Shopping Cart</Link>
       <Link className="relative animate-pulse" to="/cart">
         <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#fff"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"/></svg>
        <p className="absolute bottom-4 left-7 bg-white text-black rounded-full py-[2px] px-[10px] font-bold">{cart.totalQuantity}</p>
       </Link>
     </div>
    )
}