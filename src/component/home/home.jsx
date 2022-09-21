import './home.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Three from '../three/model'
import Model2 from '../model/Model2';
import Navbar from '../navbar/Navbar';
import { Feature, CTA, Brand, Article } from '../index';






function Home() {
  
  return (
    <><div className='body_color md:ml-[25px] md:mr-[25px] '>
<Navbar/>
          <Three />
    </div>
      {/* ==========================section-2-============================================== */}
      <div className='ml-1 mr-1'>
      <Model2/>
        <CTA />
        
        <Brand /> 
        <Article />
        

      </div>
    </>
  )
}

export default Home;







