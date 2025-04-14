//https://gltf.pmnd.rs/

import React, { useRef,useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
//import { rgbShift } from 'three/examples/jsm/tsl/display/RGBShiftNode.js';

export function Character({animation,color, ...props}) {

  const group = useRef()
  const { nodes, materials, animations } = useGLTF("models/toad_warrior.glb");
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    console.log('Loaded Materials:', materials);
    actions[animation]?.reset().fadeIn(0.24).play();
    return () => actions?.[animation]?.fadeOut(0.24);
  }, [animation]);

  useEffect(() => {
    if (materials['frog-mat']) {
      materials['frog-mat'].color = new THREE.Color(color);
      materials['frog-mat'].needsUpdate = true; // Important for the change to take effect
    }
  }, [materials, color]); // Re-run if materials load or color prop changes



  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.368}>
          <group name="toad-warriorfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="root"
                  position={[-1.773, -1.593, 6.503]}
                  rotation={[-1.597, 0.018, -0.002]}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_65"
                      geometry={nodes.Object_65.geometry}
                      material={materials['frog-mat']}
                      skeleton={nodes.Object_65.skeleton}
                      morphTargetDictionary={nodes.Object_65.morphTargetDictionary}
                      morphTargetInfluences={nodes.Object_65.morphTargetInfluences}
                      castShadow
                      receiveShadow
                    />
                    <group
                      name="Object_64"
                      position={[-1.773, -1.593, 6.503]}
                      rotation={[-1.597, 0.018, -0.002]}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </group>
                <group
                  name="default"
                  position={[-1.773, -1.593, 6.503]}
                  rotation={[-1.597, 0.018, -0.002]}
                  castShadow
                  receiveShadow
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('models/toad_warrior.glb');
