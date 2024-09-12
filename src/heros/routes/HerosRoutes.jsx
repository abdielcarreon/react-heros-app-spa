import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { DcPages, HeroPage, MarvelPages, SearchHero } from "../pages"

export const HerosRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
          <Routes> 
            <Route path="marvel" element={<MarvelPages />}/> 

            <Route path="dc" element={<DcPages />}/>    

            <Route path="search" element={<SearchHero />}/>
            {/* :id name setted by programer */}
            <Route path="hero/:id" element={<HeroPage />}/>    
            
            {/* Redirection path --> '/' */}
            <Route path="/" element={<Navigate to="/marvel" />}/>  
          </Routes>
      </div>
      
    </>
  )
}

