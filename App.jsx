import { Routes,Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx"
import Body from "./component/Body.jsx";
import Next from "./routes/Next.jsx";
import Result from "./routes/Result.jsx";

function App(){
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Body/>}/>
      <Route path="/Next" element={<Next/>}/>
      <Route path="/result" element={<Result/>}  />
    </Routes>
    </>
  )
}

export default App;
