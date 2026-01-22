import React from 'react'
import {useLocation,useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import "../styling/result.css"


export default function Result() {

    const location = useLocation();
    const navigate = useNavigate();

    const {groupName , members=[] , totalAmount , paidBy} = 
      location.state || {};

      useEffect(()=>{
        if(!location.state){
        navigate("/",{replace:true});
        } 
      },[location,navigate]);

      if(!location.state) return null;

      if (members.length === 0) {
      return <p className='noFound'>No members found</p>;
  }

      const total = Number(totalAmount);
      const perPerson = (total/members.length).toFixed(2) ; 

      const owes = members.filter((name) => name !== paidBy);


    return(
        <div className='end'>
            <div className="card">
            <h1>💰 Expense Result</h1>
            <p><strong>Group:</strong> {groupName}</p>

            <p><strong>Total Amount:</strong> ₹{total}</p>

            <p><strong>Members: </strong>{members.length}</p>

            <p><strong>Each Pays : </strong>₹{perPerson}</p>

            <p><strong>Paid By:</strong> {paidBy}</p>
            </div>
        
            <h2>Who owes whom</h2>
            
            {owes.map((name,index)=>(
                <div className='result-card' key={index}>
                    <p>
                        <strong>{name}</strong> owes <strong>{paidBy}</strong> ₹{perPerson}
                    </p>
                </div>
            ))}

            <button onClick={() => navigate("/")}>⬅ Go Home</button>
        </div>
    );
}
