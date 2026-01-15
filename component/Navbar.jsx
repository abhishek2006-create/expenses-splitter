import "../styling/global.css"
import "../styling/nav.css"
import splitImg from "../assets/split.png"

export default function Navbar(){
  
    return(
        <>
        <div className="Navbar">
            <img src={splitImg} alt="logo" />
            <h1>Expense Splitter</h1>
            <div>
            </div>
        </div>
        </>
    );
}