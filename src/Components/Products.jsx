import { Product } from "./Product";
import { Modal } from "./Modal";
import { useGlobalContext } from "../States/Context";
import { data } from "../Data.js"

export function Products(){
  const { cart, dispatch } = useGlobalContext()
  if(cart.totalQuantity > 0){
    return (
     <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto mt-30 shadow-md relative">
        {
          cart.cartItems.map(item=><Product {...item} dispatch={dispatch}/>)
       }
       <Modal isOpen={cart.modalOpen} title={"Clear cart?"} isFlex={true} isSmall={true}>
        <button className="px-[10px] py-[5px] bg-black border-[1px] border-white rounded outline-0 mr-3 text-white font-bold" onClick={()=>dispatch({type: "CLOSE_MODAL"})}>Nope</button>
        <button className="px-[10px] py-[5px] bg-black border-[1px] border-white rounded outline-0 text-white font-bold" onClick={()=>dispatch({type: "CLEAR_CART"})}>Yeah</button>
       </Modal>
       <button className="block bg-black py-[10px] px-[30px] rounded outline-0 text-white font-bold fixed bottom-5 left-1/2 transform -translate-x-1/2 border-2 border-white z-[100]" onClick={()=>dispatch({type: "OPEN_MODAL"})}>Clear Cart</button>
     </div>
    )
  }
  return (
    <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto mt-20 shadow-md">
        {
          cart.cartItems.map(item=><Product {...item} dispatch={dispatch}/>)
       }
     </div>
    )
}