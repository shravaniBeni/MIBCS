
import { BrowserRouter, Route, Routes } from  "react-router";
import './App.css'
import Projects from "./pages/Projects"
import Home from "./pages/Home"
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route element={<Home/>} path="/" />
       <Route element={ <Projects/>} path="/projects" />
     </Routes>  
     </BrowserRouter>
  )
}

export default App
