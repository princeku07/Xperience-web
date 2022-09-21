import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Home } from './component'
import {About,Contact,Blog,Projects} from './pages/index';





function App() {
  
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path = "home" element={<Home/>}/>
      <Route path = "contact" element={<Contact/>}/>
      <Route path = "about" element={<About/>}/>
      <Route path = "blog" element={<Blog/>}/>
      <Route path = "projects" element={<Projects/>}/>

    </Routes>
    
    </>
  )
}

export default App;







