import React, { useEffect } from 'react'
import "./signup.css";
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
function SignUp() {
    
const[name,setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const navigate=useNavigate();
useEffect(()=>{
    const auth=localStorage.getItem('user');
    if(auth){
        navigate('/');
    }
})
const collectData=async(e)=>{
    console.log(name,email,password);
    let result= await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{
            'Content-Type':'application/json'
        },
    })
   let results=await result.json();
    console.warn(results);
    if(results){
        localStorage.setItem("user",JSON.stringify(results))
        navigate('/');
    }
}
    return (

        <div className='signup'>
            <form>
            <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} style={{"border":"2px solid pink"}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="name" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label" >Email address</label>
                    <input type="email" className="form-control" style={{"border":"2px solid pink"}} value={email}  onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail11" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" autoComplete="on" className="form-control" style={{"border":"2px solid pink"}} value={password} onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" />
                </div>
                <button onClick={collectData} type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp