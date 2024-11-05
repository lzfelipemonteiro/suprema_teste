/* eslint-disable @typescript-eslint/no-explicit-any */


export const Input = ({id, label, slug, description, structure} : any) => {
  return (
    <div className="w-full bg-transparent flex flex-col">
      <p
        className="text-xl font-bold"
      >{label}</p>
      <input 
        type="text" 
        placeholder={description}
        className="text-black p-2 rounded-md mt-1 flex-1"
      />
    </div>
  );
}