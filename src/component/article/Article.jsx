import React from 'react';
import './article.css';
import styles from '../../style';


const Article = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} m-1 sm:flex-row flex-col explore-1 rounded-[20px] box-shadow`} >
      <div>
        <h2 className={styles.heading2} >
          Explore
        </h2>
        <p className={`${styles.paragraph}max-w-[470px] mt-5`} >
          We have build some amazing experiences which you must try.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <button type="button" className={`py-2 px-2 font-poppins font-medium text-[18px] text-white  bg-gradient-to-tl from-green-300 via-blue-500 to-purple-600 shadow-xl rounded-[10px] outline-none ${styles}`}>
    Get Started
  </button>
      </div>
    </section>
  )
}

export default Article
