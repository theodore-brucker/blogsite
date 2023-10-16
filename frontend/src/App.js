import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Experience from "./pages/Experience";
import Repositories from "./pages/Repositories";
import Blog from "./pages/Blog";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>     
        <Route path='home' element={<Home/>}/>
        <Route path='experience' element={<Experience/>}/>
        <Route path='repositories' element={<Repositories/>}/>
        <Route path='blog' element={<Blog/>}/>
      </Route> 
    </Routes>
  );
}

export default App;