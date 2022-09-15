import './App.css';
import { Navbar } from './component'
import Three from './component/three/model';
import Model2 from './component/model/Model2';
import { Feature, CTA, Brand, Article } from './component';





function App() {
  
  return (
    <><div className='body_color md:ml-[25px] md:mr-[25px] '>
      <Navbar />
      
      
          <Three />
      

    </div>
      {/* ==========================section-2-============================================== */}
      <div className='ml-1 mr-1'>

        
        <CTA />
        <Model2/>
        <Brand />
        
        <Article />

        <Feature />
        
      </div>
    </>
  )
}

export default App;







