import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Feature, Home } from './component'
import {About,Contact,Blog} from './pages/index';





function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path = "home" element={<Home/>}/>
      <Route path = "contact" element={<Contact/>}/>
      <Route path = "about" element={<About/>}/>
      <Route path = "blog" element={<Blog/>}/>
     

    </Routes>
    <Feature/>
    
    </>
  )
}

export default App;







