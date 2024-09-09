export function Modal({ title, children, isOpen, isFlex, isSmall }) {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }

  return (
    isOpen && 
    <div className="fixed inset-0 bg-black w-[100%] h-screen mx-auto block overflow-hidden z-[1000]">
      <div className={isSmall ? "fixed right-0 left-0 top-[15rem] bottom-0 bg-black border-[1px] border-white z-10 p-3 rounded text-center h-[150px] w-[300px] mx-auto" : "fixed right-0 left-0 inset-0 top-[15rem] z-10 bottom-0 bg-black border-[1px] border-white p-3 rounded text-center h-[180px] w-[300px] mx-auto"}>
        <h1 className="font-extrabold mt-5">{title}</h1>
        {isFlex ? (
          <div className="flex items-center justify-center mt-2">
            {children}
          </div>
        ) : (
          <div className="mt-2 pb-8">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
