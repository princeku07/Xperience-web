import React, { Suspense,useRef } from "react";
import { ReactDOM } from "react";
import '../building/building.css'
import Three from "../three/model";
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { useThree } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";


//--------------------Building-Model-------------------------//
 function Model(props) {
    const { nodes, materials } = useGLTF('/building.glb')
    const Camera = () => {
      const camera = useRef()
      const { aspect, size, setDefaultCamera } = useThree()
      const pixelToThreeUnitRatio = 1
      const planeDistance = 0
      const cameraDistance = 500
      const distance = cameraDistance - planeDistance
      const height = size.height / pixelToThreeUnitRatio
      const halfFovRadians = Math.atan((height / 2) / distance)
      const fov = 2 * halfFovRadians * (180/Math.PI)
      useEffect(() => void setDefaultCamera(camera.current), [])
      return <perspectiveCamera
        ref={camera}
        aspect={aspect}
        fov={fov}
        position={[0, 0, cameraDistance]}
        onUpdate={self => self.updateProjectionMatrix()}
      />
    }
    
    return (
      <group {...props} dispose={null}>
        <group position={[-9.4, 22.76, 5.9]} rotation={[1.95, 0, 0]} scale={1}>
          <pointLight intensity={.10} decay={1} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-10.83, 27.44, 15.15]}>
          {/* <pointLight intensity={0.10} decay={1} color="#ff5406" rotation={[-Math.PI / 2, 0, 0]} /> */}
        </group>
        <pointLight intensity={0.05} decay={1} rotation={[-Math.PI / 2, 0, 0]} />
        <group position={[-4.77, 14.63, -20.47]}>
          <pointLight intensity={0.20} decay={1} color="#23057C" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-1.06, 14.88, -8.39]}>
          <pointLight intensity={0.20} decay={1} color="#23057C" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-19.57, 15.01, -6.5]}>
          <pointLight intensity={0.20} decay={1} color="#23057C" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <group position={[-16.98, 14.48, -19.91]}>
          <pointLight intensity={0.20} decay={2} color="#ff8801" rotation={[-Math.PI / 2, 0, 0]} />
        </group>
        <mesh  geometry={nodes['BuildingMesh-01105001'].geometry} material={materials['Material.002']} position={[-15.1, -0.9, 0]} rotation={[0, -3, 1.60]} scale={0.02}  />
      </group>
    )
  }


export default function Building(){


    return (
        <div className="Building">

        
       <Canvas camera={{fov:60,position: [0,5,20]}}>
        
        <Suspense fallback = {null}>
            
            

            <OrbitControls enablePan={false}
                  enableZoom={true}
                  enableRotate={true} 
                 />
                 <pointLight intensity={0.20} decay={2} color="#ff8801" position={[120.1, -10.9, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                  <Model/>
                 
        </Suspense>
       </Canvas>
       </div>
    )
}