import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar.jsx"
import Body from "./component/Body.jsx"
import NextPage from "./component/NextPage.jsx";
// import Footer from "./component/Footer.jsx"

function App(){
 return(
  <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route path="/" element={<Body />} /> 
      <Route path="/next" element={<NextPage />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
