import React, { Suspense,useRef } from "react";
import { ReactDOM } from "react";
import '../building/globe.css'
import Three from "../three/model";
import { Html, OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { act, useThree } from "@react-three/fiber";
import { Canvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { angleToRadians } from '../model/angle';
import { useEffect,useState } from "react";
import styles,{layout} from '../../style';
import { RiseLoader } from 'react-spinners';
import Typewriter from "typewriter-effect";


//--------------------Building-Model-------------------------//
function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/earthfinal.glb')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
     actions.globe.play();
  });
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Volume" />
        <group name="Volume001" />
        <group name="Volume002" />
        <group name="Volume003" />
        <group name="Volume004" />
        <group name="Volume005" />
        <group name="Volume006" />
        <group name="Volume007" />
        <group name="Icosphere" position={[0.16, 0.09, -0.21]} rotation={[-0.49, 0.03, -0.05]} scale={1.07}>
          <mesh name="Icosphere_1" geometry={nodes.Icosphere_1.geometry} material={materials['Material.002']} />
          <mesh name="Icosphere_2" geometry={nodes.Icosphere_2.geometry} material={materials['Material.001']} />
          <mesh name="Icosphere_3" geometry={nodes.Icosphere_3.geometry} material={materials['Material.015']} />
          <mesh name="Icosphere_4" geometry={nodes.Icosphere_4.geometry} material={materials['Material.016']} />
          <mesh name="Icosphere_5" geometry={nodes.Icosphere_5.geometry} material={materials['Material.017']} />
          <mesh name="Icosphere_6" geometry={nodes.Icosphere_6.geometry} material={materials['Material.026']} />
          <mesh name="Icosphere_7" geometry={nodes.Icosphere_7.geometry} material={materials['Material.007']} />
          <mesh name="Icosphere_8" geometry={nodes.Icosphere_8.geometry} material={materials['Material.003']} />
          <mesh name="Icosphere_9" geometry={nodes.Icosphere_9.geometry} material={materials['Material.006']} />
          <mesh name="Icosphere_10" geometry={nodes.Icosphere_10.geometry} material={materials['Material.005']} />
          <mesh name="Icosphere_11" geometry={nodes.Icosphere_11.geometry} material={materials['Material.008']} />
          <mesh name="Icosphere_12" geometry={nodes.Icosphere_12.geometry} material={materials['Material.009']} />
          <mesh name="Icosphere_13" geometry={nodes.Icosphere_13.geometry} material={materials['Material.018']} />
          <mesh name="Icosphere_14" geometry={nodes.Icosphere_14.geometry} material={materials['Material.019']} />
          <mesh name="Icosphere_15" geometry={nodes.Icosphere_15.geometry} material={materials['Material.020']} />
          <mesh name="Icosphere_16" geometry={nodes.Icosphere_16.geometry} material={materials['Material.010']} />
          <mesh name="Icosphere_17" geometry={nodes.Icosphere_17.geometry} material={materials['Material.012']} />
          <mesh name="Icosphere_18" geometry={nodes.Icosphere_18.geometry} material={materials['Material.013']} />
          <mesh name="Icosphere_19" geometry={nodes.Icosphere_19.geometry} material={materials['Material.014']} />
          <mesh name="Icosphere_20" geometry={nodes.Icosphere_20.geometry} material={materials['Material.024']} />
          <mesh name="Icosphere_21" geometry={nodes.Icosphere_21.geometry} material={materials['Material.025']} />
        </group>
        <group name="Plane" position={[0.36, 0.98, 0.49]} rotation={[0.34, 0.19, -0.18]} scale={[0.37, 0.09, -0.05]}>
          <mesh name="Plane033" geometry={nodes.Plane033.geometry} material={materials['Material.021']} />
          <mesh name="Plane033_1" geometry={nodes.Plane033_1.geometry} material={materials['Material.022']} />
          <mesh name="Plane033_2" geometry={nodes.Plane033_2.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="Icosphere002" geometry={nodes.Icosphere002.geometry} material={nodes.Icosphere002.material} position={[-0.65, 1.17, -0.6]} rotation={[1.04, -1.34, -0.18]} scale={[-0.21, -0.13, 0.41]} />
        <mesh name="Icosphere003" geometry={nodes.Icosphere003.geometry} material={nodes.Icosphere003.material} position={[-0.98, 1.32, 0.06]} rotation={[-2.87, 0.62, -0.09]} scale={[-0.17, -0.15, 0.32]} />
        <mesh name="Icosphere004" geometry={nodes.Icosphere004.geometry} material={nodes.Icosphere004.material} position={[-0.08, 1.51, -0.12]} rotation={[2.94, -1.14, 0.31]} scale={[-0.3, -0.25, 0.59]} />
        <mesh name="Icosphere005" geometry={nodes.Icosphere005.geometry} material={nodes.Icosphere005.material} position={[0.19, 1.03, 1.11]} rotation={[1.04, -1.34, -0.18]} scale={[-0.29, -0.17, 0.56]} />
        <mesh name="Icosphere006" geometry={nodes.Icosphere006.geometry} material={nodes.Icosphere006.material} position={[-1.27, 0.54, 0.77]} rotation={[1.13, -0.21, 0.53]} scale={[-0.21, -0.12, 0.4]} />
        <mesh name="Icosphere007" geometry={nodes.Icosphere007.geometry} material={nodes.Icosphere007.material} position={[-0.4, -0.09, 1.35]} rotation={[2.61, -1.07, 0.51]} scale={[-0.31, -0.19, 0.61]} />
        <mesh name="Icosphere008" geometry={nodes.Icosphere008.geometry} material={nodes.Icosphere008.material} position={[-1.23, 0.22, -0.04]} rotation={[-1.67, 0.18, 2.13]} scale={[-0.31, -0.19, 0.61]} />
        <mesh name="Icosphere009" geometry={nodes.Icosphere009.geometry} material={nodes.Icosphere009.material} position={[1.52, 0.26, 0.59]} rotation={[-0.93, -0.05, -2.19]} scale={[-0.29, -0.17, 0.56]} />
        <group name="propellor" position={[0.1, 1.55, 0.74]} rotation={[Math.PI / 2, 0, 0]} scale={[0.56, 0.14, -0.08]}>
          <mesh name="Plane044" geometry={nodes.Plane044.geometry} material={materials['Material.021']} />
          <mesh name="Plane044_1" geometry={nodes.Plane044_1.geometry} material={materials['Material.022']} />
          <mesh name="Plane044_2" geometry={nodes.Plane044_2.geometry} material={materials['Material.023']} />
        </group>
        <mesh name="Icosphere010" geometry={nodes.Icosphere010.geometry} material={nodes.Icosphere010.material} position={[0.51, 1.23, -1.05]} rotation={[2.61, -1.07, 0.51]} scale={[-0.31, -0.19, 0.61]} />
        <mesh name="Icosphere011" geometry={nodes.Icosphere011.geometry} material={nodes.Icosphere011.material} position={[1.37, 0.81, -0.49]} rotation={[0.25, 0.13, -1.2]} scale={[-0.31, -0.19, 0.61]} />
      </group>
    </group>
  )
}


export default function Building(){
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {

      setLoading(false)

    }, 3000)
  }, []
  )

    return (
      <>
      <div className='flex flex-row justify-between  w-full md:ml-3  mr-3'>

<h2 className={`${styles.heading2} ml-4 text-white mt-1 text-l 
  md:text-white md:text-[49px] md:font-extrabold md:ml-20 md:mt-7`} >We build, <br className='sm:block hidden'/> <Typewriter options={{
    autoStart:true,
    loop:true,
    delay: 100,
    strings: [
      "Experience"
    ],
  }}
  />  </h2>

</div>
        <div className="Building">
        {
            loading ?
            <RiseLoader className='ml-14 mt-14' color={' #ffffff  '}  loading={loading} size={8} />
            :
        

            <Canvas camera={{ fov: 50, zoom: 1, near: 1, far: 1000 }}>
        
        <Suspense fallback = {null}>
            
            

            <OrbitControls enablePan={false}
                  enableZoom={true}
                  enableRotate={true} 
                 />
                 <directionalLight

                  position={[0, 10, 0]}
                  intensity={0.2}
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                  />
                 <pointLight intensity={0.5} decay={2} color="#FFBC74" position={[100.1, -10.9, 0]} rotation={[-Math.PI / 2, 0, 0]} />
                 <mesh rotation={[ 0, -(angleToRadians(280)),0.1]}>
                  <Model/>
                  </mesh>
                 
        </Suspense>
       </Canvas>
}
       </div>
       </>
    )
}