import React from 'react';
import './feature.css'
import styles from '../../style';
import Button from '../button';
import { footerLinks, socialMedia } from '..';
import { logo } from '../../assets';


const Feature = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`} >
        <div className='flex-1 flex flex-col justify-start ml-1 mr-10'>
          <img src={logo} alt="xperience" className='w-[266px] h-[72px] object-contain' />

          <p className={`${styles.paragraph} mt-4 max-w-[310px] `} >
            We are into software development side of Agumented and Virtual Realtiy.
            
            
          </p>
          <p className='cursor-pointer text-white hover:text-blue-400 '>
          email:xperiencelabss@gmail.com
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
              <h4 className=" font-medium text-[18px] ml-1 leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className='list-none ml-1 mt-4' >
                {footerlink.links.map((link, index) =>
                  <li key={link.name} className="font-normal ml-1 text-[16px] leading-[24px] text-white hover:text-blue-400 cursor-pointer ">
                    {link.name}
                  </li>

                )}
              </ul>
            </div>
          ))}

        </div>

      </div>

<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#fefeff]">
  <p className=" font-medium text-[18px] leading-[27px] text-white ml-1">

  Copyright Ⓒ 2022 Xperience. All Rights Reserved.
      </p>

      <div className="flex flex-row  md:mt-0 mt-6 mr-3">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
)
  
}

export default Feature