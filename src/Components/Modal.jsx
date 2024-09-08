export function Modal({title, children, isOpen, isFlex, isSmall}){
  return (
    isOpen && 
     <div className={isSmall ? "fixed right-0 left-0 top-[15rem] bottom-0 bg-white border-[1px] border-black p-3 rounded text-center h-[150px] w-[90%] mx-auto" : "fixed right-0 left-0 top-[15rem] bottom-0 bg-white border-[1px] border-black p-3 rounded text-center h-[180px] w-[90%] mx-auto"}>
       <h1 className="font-extrabold mt-5">{title}</h1>
       {
         isFlex ? <div className="flex items-center justify-center mt-2">
         {children}
       </div> : <div className="mt-2 pb-8">
         {children}
       </div>
       }
     </div>
    )
}