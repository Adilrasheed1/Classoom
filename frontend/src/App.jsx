import { Classroom } from "./pages/Classroom"
import { JoiningPage } from "./pages/JoiningPage"

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
 
  return (
    <div>
      <BrowserRouter>
  <Routes>
    <Route path="/" element={ <JoiningPage/>}/>
    <Route path="/Class" element={ <Classroom/>}/>
  </Routes>
     </BrowserRouter>

    </div>
  )
}

export default App
