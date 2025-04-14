import {Environment, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { Frog_peasant } from "./Frog_peasant";
import { degToRad } from "three/src/math/MathUtils.js";
import { Character } from "./Character";
import {motion} from "framer-motion";
import { Fatty } from "./Fatty";

export const HomeExperience = (props) => {
    const {section} = props;
    const [animationFatty, setFattyAnimation] = useState("look-around");

    const [animationToad, setToadAnimation] = useState("idle");

    return(
        <>
        {/* <group rotation-y={degToRad(-30)} position-x={3.55} position-y={-0.6}>
      <Frog_peasant scale={0.6} color={'yellow'} animation={animationFatty}/>
      </group>
       <Environment preset="sunset" /> */}

        {/* <ambientLight intensity={1} /> */}
       
        <motion.group
         rotation-y={degToRad(-60)}  
         position-x={3} 
         position-y={-1.5}
         >
        <Character scale={1.5} color={'yellow'} animation={animationFatty} />
        </motion.group>
        

        <motion.group
         rotation-y={degToRad(25)}  
         position-x={3} 
         position-y={-14.5}
         rotation-z={degToRad(5)}  
         >
        <Frog_peasant scale={1.5}  color={'yellow'} animation={animationToad} />
        </motion.group>
        
        </>
    );
};