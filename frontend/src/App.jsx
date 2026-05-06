

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { UserDashboard } from "./pages/UserDashboard"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import { SendMoney } from "./pages/SendMoney"
import PlasmaWave from './PlasmaWave';

function App() {
 
  return (
    <div className="h-screen w-full fixed ">
       <div className="absolute inset-0 -z-10">
        <PlasmaWave
          colors={["#A855F7", "#06B6D4"]}
          speed1={0.05}
          speed2={0.05}
          focalLength={0.8}
          bend1={1}
          bend2={0.5}
          dir2={1.0}
          rotationDeg={0}
        />
      </div>

      <BrowserRouter>
      <Routes>
        <Route path="userDashboard" element={<UserDashboard/>}/>
        <Route path="signup" element={<SignupPage/>}/>
         <Route path="signin" element={<SigninPage/>}/>
         <Route path="send" element={<SendMoney/>}/>
        
      </Routes>
      </BrowserRouter>
       
    </div>
  )
}

export default App
