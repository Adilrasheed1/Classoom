

import {BrowserRouter,Routes,Route} from "react-router-dom"
import { UserDashboard } from "./pages/UserDashboard"
import SignupPage from "./pages/SignupPage"
import SigninPage from "./pages/SigninPage"
import { SendMoney } from "./pages/SendMoney"
function App() {
 
  return (
    <div>
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
