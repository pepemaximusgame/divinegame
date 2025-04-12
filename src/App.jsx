import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Suspense } from "react";
import { Loader } from "./components/Loader";
import { UI } from "./components/UI";

function App() {
  return (
   <>
    <Canvas shadows camera={{ position: [0, 0, 8], fov: 42 }}>
      <Suspense fallback={<Loader />}>
            <color attach="background" args={["#171720"]} />
          <fog attach="fog" args={["#171720",10,30]} />
          <ambientLight intensity={0.5}  />
          <directionalLight position={[10, 10, 5]} intensity={1} />
            
              <ScrollControls pages={5} damping={0.5}>
              <Experience />
              <Scroll html>
                <h1 className="text-red-500">Hello maximus</h1>
                
                </Scroll>
              </ScrollControls>

            <EffectComposer>
              <Bloom mipmapBlur intensity={1.2}/>
            </EffectComposer>
      </Suspense>
     
    </Canvas>
    <UI/>
    </>
  );
}

export default App
