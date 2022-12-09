import './home.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Three from '../three/model'
import Model2 from '../model/Model2';
import Navbar from '../navbar/Navbar';

import {  CTA, Brand, Article,Collection } from '../index';
import Building from '../building/globe';






function Home() {
  
  return (
    <><div className='body_color md:ml-[25px] md:mr-[25px] '>
<Navbar/>

<Building/>
    </div>
      {/* ==========================section-2-============================================== */}
      <div className='ml-1 mr-1'>
        <Collection/>
      <CTA />
      
        <Brand /> 
        <Article />
        

      </div>
    </>
  )
}

export default Home;







