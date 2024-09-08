import { Cart } from "./Cart";
import { useGlobalContext } from "../States/Context";
import { data } from "../Data.js"
import { Modal } from "./Modal";

export function CartPage(){
  const { cart, dispatch } = useGlobalContext()
  if(cart.totalQuantity > 0){
    return (
      <div className="pb-10 relative">
      <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto mt-20 shadow-md mb-[-20px]">
        {
          cart.cartItems.map(item=><Cart {...item} dispatch={dispatch}/>)
        }
      </div>
      <Modal isOpen={cart.modalOpen} title={"Purchase🎉"} isFlex={false} isSmall={false}>
        <h1 className="text-center font-light">You've successfully purchased your products:)</h1>
        <button className="px-[20px] py-[5px] bg-green-500 rounded outline-0 text-white font-bold mt-2" onClick={()=>dispatch({type: "PURCHASE"})}>Thank You</button>
       </Modal>
      <button className="block bg-amber-600 py-[7px] px-[20px] rounded outline-0 text-white font-bold fixed bottom-5 left-1/2 transform -translate-x-1/2 z-[100]" onClick={()=>dispatch({type: "OPEN_MODAL"})}>Pay Checkouts<br></br>$ {cart.totalPrice.toFixed(0)}</button>
      </div>
      )
  }
  return (
     <div className="w-[90%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto mt-20 shadow-md mb-3">
        <h1 className="text-3xl text-orange-600 text-center mt-30 font-extrabold mx-auto">Empty Cart</h1>
     </div>
    )
}