import './model2.css';
import { Suspense, useRef, useState, useEffect } from 'react'
import { CSSProperties } from 'react';
import { RiseLoader } from 'react-spinners';
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Shadow, useGLTF } from '@react-three/drei'
import styles, { layout } from '../../style';
import { Environment } from "@react-three/drei";
import { angleToRadians } from "./angle";

import  gsap from 'gsap';






export default function Model2(props) {

 const meshRef = useRef(null);

  

 useEffect(() => { 
  if(!!meshRef.current){

    console.log(meshRef.current)
  
    gsap.from(meshRef.current.position, {
       
      y:4,
      duration:2, 
      ease:'power2.out', 
    }) 
    

     
  }        


 },[meshRef.current])

//  useFrame((state) => {

//   if (!meshRef.current) {
//     return;
// }

// meshRef.current.rotation.y += 0.01;
//  })

  


  return (
    <>






      <div className="product-canvas2 md:ml-14 ">


        <Canvas camera={{ position: [0, 0, 5], fov: 100 }} shadows >
          <Html>

          </Html>
 
          <Suspense fallback={null}>


            <OrbitControls enablePan={false} enableRotate={true} enableZoom={false} minPolarAngle={angleToRadians(60)} maxPolarAngle={angleToRadians(80)} />

            <mesh  ref={meshRef} position={[0, 1.5, 0]} rotation={[-(angleToRadians(80)), 0, 0]} castShadow>
              <boxGeometry attach="geometry" />
              <meshStandardMaterial attach={"material"} />
            </mesh>


            {/* floor */}
            <mesh rotation={[-(angleToRadians(57)), 0, 0]} receiveShadow>
              <planeGeometry args={[6, 6]} />
              <meshStandardMaterial color={"#161716"} />
            </mesh>


            {/* spotLight */}
           
            <spotLight args={["#ffffff", 1, 10, angleToRadians(45), 0.5]} position={[1, 5, -0.]} castShadow />
            <ambientLight args={["#ffffff", 0.5]} />
            {/* <Environment  background>
              <mesh>
                <sphereGeometry args={[50, 100, 100]} />
                <meshBasicMaterial color={" #061e00 "} side={THREE.BackSide} />
              </mesh>
            </Environment> */}
 





          </Suspense>


        </Canvas>

      </div>





    </>
  )
}