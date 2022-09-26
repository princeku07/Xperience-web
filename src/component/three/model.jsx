import './model.css';
import { Suspense, useRef, useState, useEffect } from 'react'
import { CSSProperties } from 'react';
import { RiseLoader } from 'react-spinners';
import { Canvas } from '@react-three/fiber'
import { Html, OrbitControls, useGLTF } from '@react-three/drei'
import { angleToRadians } from '../model/angle';
import styles,{layout} from '../../style';
import Typewriter from "typewriter-effect";


function Model({ ...props }) {
 
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.gltf')
  return (
    <group ref={group} {...props} dispose={null} scale={3}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} material-color={props.customColors.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={props.customColors.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={props.customColors.soul} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={props.customColors.soul} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} material-color={props.customColors.stripes} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} material-color={props.customColors.soul} />
    </group>
  )
}




export default function Three(props) {


  const [mesh, setMesh] = useState("#ffffff")
  const [stripes, setStripes] = useState("#ffffff")
  const [soul, setSoul] = useState("#ffffff")
  const [laces, setLaces] = useState("#ffffff")
  const [inners, setInner] = useState("#ffffff")
  // const override: CSSProperties = {
  //   display: "block",
  //   margin: "0 auto",
  //   borderColor: "red",
  // };
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {

      setLoading(false)

    }, 2800)
  }, []
  )

  return (
    <>





      <div className='flex flex-row justify-between  w-full md:ml-3  mr-3'>


        {/* <h1 className='flex-1 ml-4 font-bold 
           text-green-900 mt-1 text-l 
          md:text-green-900 md:text-2xl md:font-extrabold md:ml-20 md:mt-7'>
          We <br />
          Build
          Experience

        </h1> */}
        <h2 className={`${styles.heading2} ml-4 text-white mt-1 text-l 
          md:text-white md:text-[49px] md:font-extrabold md:ml-20 md:mt-7`} >We build, <br className='sm:block hidden'/> <Typewriter options={{
            autoStart:true,
            loop:true,
            delay: 200,
            strings: [
              "Experience"
            ],
          }}
          />  </h2>

      </div>
      <div className="product-canvas  ">
        {
          loading ?
            <RiseLoader className='ml-14 mt-14' color={' #ffffff  '}  loading={loading} size={8} />
            :

            <Canvas camera={{ position: [0, 0, 5], fov: 80 }} >
              <Html>

              </Html>

              <Suspense fallback={null}>

                <ambientLight intensity={0.3} />
                <directionalLight

                  position={[0, 10, 0]}
                  intensity={1.5}
                  shadow-mapSize-width={1024}
                  shadow-mapSize-height={1024}
                  shadow-camera-far={50}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                />


                <group>
                  <mesh rotation={[ 0, -(angleToRadians(20)),0]}>
                <Model customColors={{ mesh: mesh, stripes: stripes, soul: soul, laces: laces }}
                />


                  </mesh>
                </group>
                <OrbitControls enablePan={true}
                  enableZoom={true}
                  enableRotate={true} />


              </Suspense>


            </Canvas>
        }
      </div>

      <div className='color_picker ' >
        <div className='text-center color_choose'>
          <p className=' text-xs text-slate-300 font-bold 
            md:text-sm '>
            Paint your own
          </p>
        </div>

        <div className='colors' >
          <div >
            <input type="color" id="mesh" name="mesh"
              value={mesh}
              onChange={(e) => setMesh(e.target.value)} />
            <label htmlFor="mesh">Body</label>
          </div>

          <div>
            <input type="color" id="stripes" name="stripes"
              value={stripes}
              onChange={(e) => setStripes(e.target.value)} />
            <label htmlFor="stripes">Stripes</label>
          </div>
          <div>
            <input type="color" id="lace" name="lace"
              value={laces}
              onChange={(e) => setLaces(e.target.value)} />
            <label htmlFor="stripes">Lace</label>
          </div>

          <div>
            <input type="color" id="soul" name="soul"
              value={soul}
              onChange={(e) => setSoul(e.target.value)} />
            <label htmlFor="soul">Soul</label>
          </div>


        </div>

      </div>




    </>
  )
}