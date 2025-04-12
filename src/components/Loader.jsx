import { Html } from "@react-three/drei";

export const Loader = ()=>{
    return(
        <Html>
        <div className="flex justify-center items-center">
        <div className="loader animate-spin w-12 h-12 border-t-4 border-blue-500 rounded-full"></div>
        </div>
        </Html>
    )
};