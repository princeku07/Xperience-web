import React from 'react';
import './brand.css';
import { apple,bill,google } from '../../assets';
import styles,{layout} from '../../style';
const Brand = () => {
  return (
    <section id='poduct' className={layout.sectionReverse} >
<div className={layout.sectionImgReverse} >
  
  <img src={bill} alt="benefits" className='w-[100%] h-[100%] relative z-[5] ' />

   </div>
   <div className={layout.sectionInfo} >

    <h2 className={styles.heading2} >
      Real World
      <br className='sm:block hidden' /> Use Cases
    </h2>
    <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
      Development in hardwares increased scope of Virtual Reality as it takes lot's of power. Companies like Google, MicroSoft, FaceBook, Apple are in race to get first handed with the hardware technology. <br />
      It  has its use cases in Medical , Defence, Education and much more fields to be explored.
    </p>
<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>

  <img src={apple} alt="apple_store" className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'/>

  <img src={google} alt="apple_store" className='w-[128px] h-[42px] object-contain  cursor-pointer'/>

</div>
   </div>

    </section>
  )
}

export default Brand