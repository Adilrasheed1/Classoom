

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { UserDashboard } from "./pages/UserDashboard"
import SignupPage from "./pages/SignupPage"

function App() {
 
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="userDashboard" element={<UserDashboard/>}/>
        <Route path="signup" element={<SignupPage/>}/>

        
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
