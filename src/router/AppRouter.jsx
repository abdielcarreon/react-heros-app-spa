import { Routes, Route } from "react-router-dom";


import { LoginPages } from '../auth';
import { HerosRoutes } from "../heros/routes/HerosRoutes";
// import { SearchHero } from "../heros";
import PrivateRoute from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = () => {
    
  return (
    <> 
    
        <Routes>
        {/* Any route bring with "login" gonna be directing toward login */}
            <Route
              path="login/*"
              element={
                <PublicRoute>
                  {/* <LoginPages /> */}
                  <Routes>
                    {/* Any route --> /*, in "login*/}
                      <Route path="/*" element={<LoginPages />}/>  
                  </Routes>
                </PublicRoute>
              }
            />

            <Route path="/*" element= {
              <PrivateRoute>  
                    <HerosRoutes />
                </PrivateRoute>
                }
                />

            

            {/* <Route path="/*" element={<HerosRoutes />}/>   */}

        </Routes>
        
    </>
  )
}

export default AppRouter
