import "../styling/global.css"
import "../styling/body.css"
import { useNavigate } from "react-router-dom";
// import "../routes/Next.jsx"

export default function Body(){

    const navigate = useNavigate();

    return(
    <>
    <div className="expense">
        <h1>Split Group Expenses Easily With Friends.</h1>
        <p>Who owes whom? Easily track and split shared expenses with Cashinator.</p>
        <p> The smart expense tracker makes splitting costs and bills easy—perfect
            for group trips, sailing adventures, shared households,
            or your next vacation with friends.
        </p>
        
        <button type="button" onClick={()=> navigate("/next")}>let's go!</button>
        
    </div>
    </>
    );
};
