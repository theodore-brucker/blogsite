import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Bio from "./pages/Bio";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}> 
        
        <Route path='home' element={<Home/>}/>
        <Route path='bio' element={<Bio/>}/>
        <Route path='portfolio' element={<Portfolio/>}/>
        <Route path='blog' element={<Blog/>}/>

      </Route> 
    </Routes>
  );
}

export default App;