import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "../styling/next.css"
import { useNavigate } from 'react-router-dom';

export default function Next() {

    const navigate = useNavigate();

    const [GrpName,setGrpName] = useState("");
    const [Member,setMember] = useState("");
    const [Names,setNames] = useState([]);
    const [editIdx,seteditIdx] = useState(null);
    const [Total,setTotal] = useState("");
    const [WPaid,setWPaid] = useState(""); 
    
    useEffect(() => {
        const savedNames = JSON.parse(localStorage.getItem("Names"));
        if(savedNames){
            setNames(savedNames);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem("Names",JSON.stringify(Names));
    },[Names]);

    const AddNames = ()=>{
        if(!Member.trim() === "") return;

        if(Names.includes(Member) && editIdx === null) {
            alert("This name has already been taken");
            return;
        }

        if (editIdx != null) {

            const updatedNames = [...Names];
            updatedNames[editIdx] = Member;
            setNames(updatedNames);
            seteditIdx(null);
        } else {
            setNames([...Names,Member]);
        }

        setMember("");
    };

    const deleteName = (index) => {
        const filteredNames = Names.filter((_,i) => i != index);
        setNames(filteredNames);
    }

    const editName = (index) => {
        setMember(Names[index]);
        seteditIdx(index);
    };

    return(
        <div className='data'>
            <div className='content'>
                <label htmlFor="grp">Enter Group Name: </label>
                <input type="text" id='grp' placeholder="eg: The OG'$" value={GrpName} onChange={(e)=>setGrpName(e.target.value)}/>
            </div>

            <div className='names'>
                <label htmlFor="mmbr" >Add Members: </label>
                <input type="text" id='mmbr' placeholder="eg: Adi Jain" value={Member} onChange={(e)=>setMember(e.target.value)}
                    onKeyDown={(e)=>{
                    if(e.key==="Enter"){
                        AddNames();
                    }
                 }}/>

                <button className='btn' type='button' onClick={AddNames}>Add</button>
                
                <div className="Add">
                <ul className='member-name'>
                    {Names.map((n,index)=>(
                        <li key={index}>
                            {n}
                            <button className='btn' type='button' onClick={()=>editName(index)}>Edit</button>
                            <button className='btn' type='button' onClick={()=>deleteName(index)}>Delete</button>
                        </li>
                    ))}
                </ul>
                </div>
            </div>

            <div className='content'>
                <label htmlFor="money">Enter Amount: </label>
                <input type="Number" id='money' placeholder="eg: ₹ 1000/-" value={Total} onChange={(e)=>setTotal(e.target.value)}/>
            </div>

            <div className='content'>
                <label htmlFor="WPaid">Who Paid Total Amount: </label>
                <input type="text" id='WPaid' placeholder="eg: Aneesh Banglinti" value={WPaid} onChange={(e)=>setWPaid(e.target.value)}/>
            </div>

            <button type='button' className='click' onClick={() => navigate("/result",{
               state:{ 
                groupName: GrpName,
                members: Names,
                totalAmount: Total,
                paidBy: WPaid,
               },
             })
            }
            >Split Money</button>
        </div>
    );
}

