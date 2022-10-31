import React from 'react';
import './cta.css'
import { features } from '../index';
import styles,{layout} from '../../style';
import Button from '../button';


const FeatureCard = ({icon ,title,content,index} )=> (
  <div className={`flex flex-row p-2 m-1 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>

<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
  <img src={icon} alt="icon"  className='w-[50%] h-[50%] object-contain '/>
</div>
<div className="flex-1 flex flex-col ml-3" >
  <h4 className='font-semibold text-white text-[18px} leading-[23px] mb-1'>
    {title}
  </h4>
  <p className='font-normal text-dimwhite text-[15px] leading-[23px] mb-1 mt-1'>
{content}
  </p>
</div>
  </div>
)

const CTA = () => {
  return (
    <>
   
    <section id='feature' className={layout.section} >

      <div className={`${layout.sectionInfo} m-9`} >
        <h2 className={styles.heading2} >Integrating <br className='sm:block hidden' /> Digital Objects   </h2>
        <p className={`${styles.paragraph} max-w-[500px]`}> We integrate digital objects into real world as well as build fully imersive digital experience through VR headset, As of now we can use our smartphone for Agumented experiences as today's smartphones are much powerful. Use our app to create and place digital objects into real world locations and save it as landmark. You can share it with your friends and also make discoverable for everyone. </p>
        <Button styles="mt-10 bg-blue"/>

      </div>
      
    </section>
    </>
  )
}

export default CTA