import { Canvas } from "@react-three/fiber";
import { HomeExperience } from "./HomeExperience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./Interface";
import { useState } from "react";
import ScrollManager from "./ScrollManager";
import { MotionConfig } from "framer-motion";
import { Menu } from "./Menu";
import { UI } from "./UI";

export const HomePage =()=>{
    const [section, setSection] = useState(0);
    const {menuOpened, setMenuOpened} = useState(false);

    return(
        <>
        <MotionConfig transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 5,
            restDelta: 0.0001,
        }} >
        <Canvas shadows camera={{ position: [0, 3, 8], fov: 42 }}>
            <color attach="background" args={["grey"]} />
            <ambientLight intensity={1}  />
            <directionalLight position={[1, 0, 1]} intensity={1} />
            <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection}/>
            <Scroll>
            <HomeExperience section ={section}/>
            </Scroll>
             
                <Scroll html>
                <Interface/>
                </Scroll>
            </ScrollControls>
        </Canvas>
        {/* <Menu  onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}/> */}

        </MotionConfig>
        <UI/>
        

        </>
    );
};