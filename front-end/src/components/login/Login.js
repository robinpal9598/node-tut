import { React, useState } from 'react'
import "./login.css";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleLogin = async () => {
        console.log(email, password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        let results = await result.json();
        console.warn(results);
        if (results.name) {
            localStorage.setItem("user", JSON.stringify(results));
            navigate('/');
        }
        else {
            alert("Enter the correct credentials")
        }
        // if(results){
        //     localStorage.setItem("user",JSON.stringify(results))
        //     navigate('/');
        // }
    }



    return (
        <div className='login'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputPassword1" />
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login