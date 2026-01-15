import "../styling/global.css"
import "../styling/body.css"
import { useState } from "react";
import {useNavigate} from "react-router-dom"

export default function Body() {
    const [GrpName,setGrpName] = useState("");
    const [Member,setMember] = useState("");
    const [Total,setTotal] = useState("");
    const [WPaid,setWPaid] = useState("");  
    
    const navigate = useNavigate();

    const handclick = ()=>{
        navigate("/next",{
            state: {
                GroupName : GrpName,
                EnterMember: Member,
                TotalAmount: Total,
                WhoPaidTotalAmount: WPaid,
            },
        });  
    };
     
    return(
        
        <div className="expense">
            <h1>Split Group Expenses Easily With Friends.</h1>
            <p>Who owes whom? Easily track and split shared expenses with Cashinator.</p>
            <p> The smart expense tracker makes splitting costs and bills easy—perfect
                for group trips, sailing adventures, shared households,
                or your next vacation with friends.
            </p>

            {/* INPUT FORM */}
            
            <input type="text" placeholder="The OG'$" value={GrpName} onChange={(e)=>setGrpName(e.target.value)}/>
            <input type="text" placeholder="Adi Jain" value={Member} onChange={(e)=>setMember(e.target.value)}/>
            <input type="Number" placeholder="₹ 1000/-" value={Total} onChange={(e)=>setTotal(e.target.value)}/>
            <input type="text" placeholder="Aneesh" value={WPaid} onChange={(e)=>setWPaid(e.target.value)}/>

            <button type="button" id="btn" onClick={handclick}>Let's go!</button>
        
            {/* <button type="button" id="btn">Let's go!</button> */}
        </div> 
        );

};