import { Modal } from "./Modal";

export function Cart({id, image, productName, price, quantity, dispatch}){
  return (
     quantity > 0 && <div className="flex items-center justify-between">
       <img className="w-[200px] h-[130px] rounded shadow-md" src={image} alt={productName}/>
       <div className="flex items-center justify-center flex-col mr-5">
        <h1 className="font-light text-center">{productName}</h1>
        <h1 className="font-extrabold">$ {(price * quantity).toFixed(0)}</h1>
        <h1 className="font-bold">x{quantity}</h1>
        <button className="bg-black border-[1px] border-white px-[7px] rounded text-white outline-0 my-2 text-2xl" onClick={()=>dispatch({type: "REMOVE_FROM_CART", payload: id})}>×</button>
       </div>
     </div>
    )
}