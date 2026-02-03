import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import Service from "./pages/Service"
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Dashboard from "./pages/Dashboard"
function App(){
  return( 
    <>
   <BrowserRouter>
    <div className="min-h-screen flex flex-col">
  <Header/>
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>

          <Route path="/Dashboard" element={<ProtectedRoutes><Dashboard/></ProtectedRoutes>}/>
        </Routes>
      </main>
  <Footer/>
  </div>
  </BrowserRouter>
    </>
    
  )
}

export default App;