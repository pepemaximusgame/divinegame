import { Html } from "@react-three/drei";

export const Loader = ()=>{
    return(
        <Html>
        <div className=" relative w-24 h-24  flex justify-center items-center">
        <div className="absolute loader animate-spin
         w-12 h-12 border-t-4  border-red-500 
         rounded-full"></div>
      <img className="w-12 h-19 z-10" src="images/pepeHigh.png"></img>
        </div>
        </Html>
    )
};