import './model2.css';
import { Suspense, useRef, useState, useEffect } from 'react'
import { CSSProperties } from 'react';
import { RiseLoader } from 'react-spinners';
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, Shadow, useGLTF } from '@react-three/drei'
import styles, { layout } from '../../style';
import { Environment } from "@react-three/drei";
import { angleToRadians } from "./angle";
import "@google/model-viewer/dist/model-viewer";
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





<div className='m-6 p-4 '>
    


       
        <model-viewer src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              ios-src="https://modelviewer.dev/shared-assets/models/Astronaut.usdz"
              alt="A 3D model of an astronaut"
              ar
              auto-rotate
              camera-controls></model-viewer>

</div>
    





    </>
  )
}