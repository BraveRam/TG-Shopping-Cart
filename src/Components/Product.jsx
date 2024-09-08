export function Product({id, image, productName, price, quantity, dispatch}){
  return (
     <div className="w-full bg-white shadow-lg rounded">
       <img className="rounded w-full h-[230px] bg-cover bg-center" src={image} alt={productName}/>
       <div className="flex items-center justify-between p-3">
         <h1 className="font-bold">{productName}</h1>
         <h1 className="font-bold">$ {price}</h1>
       </div>
       {quantity > 0 && <div className="grid grid-cols-8 w-[85%] mx-auto my-2">
         <button className="col-span-2 bg-blue-600 p-[7px] rounded text-white outline-0 font-extrabold text-2xl" onClick={()=>dispatch({type: "DECREASE", payload: id})}>—</button>
         <h1 className="col-span-4 text-center mt-2 font-bold"><span className="text-2xl">{quantity}</span> Items</h1>
         <button className="col-span-2 bg-blue-600 p-[7px] rounded text-white outline-0 font-extrabold text-2xl" onClick={()=>dispatch({type: "ADD_TO_CART", payload: id})}>+</button>
       </div>}
       {quantity === 0 && <button className="w-full bg-blue-600 p-[10px] rounded text-white outline-0 my-2" onClick={()=>dispatch({type: "ADD_TO_CART", payload: id})}>Add To Cart</button>}
       {quantity > 0 &&
       <button className="w-full bg-red-600 p-[7px] rounded text-white outline-0 my-2" onClick={()=>dispatch({type: "REMOVE_FROM_CART", payload: id})}>Remove</button> }
     </div>
    )
}