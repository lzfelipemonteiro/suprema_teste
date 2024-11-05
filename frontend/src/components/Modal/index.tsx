/* eslint-disable @typescript-eslint/no-explicit-any */
export const Modal = ({isOpen, setIsOpenModel}: any) => {
  return (
    <div className={`
      absolute
      top-0
      left-0
    `}>
      <div>Modal</div>
      <div>isOpen: {isOpen}</div>
      <button className={`
        bg-red-500
        py-2
        px-4
        rounded-md
        mt-4
        `} onClick={() => setIsOpenModel(false)}>Close Modal</button>
    </div>
  );
}