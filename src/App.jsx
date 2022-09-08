import './App.css';
import { Navbar } from './component'
import Three from './component/three/model';
import Model2 from './component/model/Model2';
import { Feature, CTA, Brand, Article } from './component';





function App() {
  
  return (
    <><div className='body_color '>
      <Navbar />
      
          <Three />
      

    </div>
      {/* ==========================section-2-============================================== */}
      <div className='ml-1 mr-1'>

        
        <CTA />
        <Brand />
        <Model2/>
        <Article />

        <Feature />
        
      </div>
    </>
  )
}

export default App;






