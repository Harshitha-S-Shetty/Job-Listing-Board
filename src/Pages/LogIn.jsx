import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await JSON.parse(localStorage.getItem("JobList")) || [];
    const filteredUsers = users.filter((user) => {return  user.email === email && user.password === password});
    console.log(filteredUsers);
    
    if (filteredUsers.length > 0) {
      alert('Login successful!'); 
      nav("/");
    } else {
      alert('Invalid email or password. Please try again.');
    }
  };
 

  return (
    <div style={{backgroundImage:"url('https://media.istockphoto.com/id/1331579485/vector/background-curved-light-blue.jpg?s=612x612&w=0&k=20&c=Wslr-PIxcQDoxXmzC7_w8rbFM9_s_5Jz99tE3ftNM1A=')", backgroundSize: "cover"}}>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height: '90vh'}}>
        <h4 style={{color:"gray", marginBottom:"20px", fontWeight:"lighter"}}>Login</h4>
        <div className="form-floating mb-2 mt-3" style={{width: 300}}>
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} value={email}/>
          <label htmlFor="floatingInput">Email Address</label>
        </div>
        <div className="form-floating mb-2 mt-3" style={{width: 300}}>
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="mb-1 mt-2 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" className="btn btn-primary btn-sm mt-3" style={{width: 300}}>Login</button>
        <p className='mt-3' style={{fontSize:"13px"}}>Don't have an account?<Link to="/registerjob" style={{textDecoration:"none", marginLeft: "5px"}}>Signup</Link></p>
      </form>
    </div>
  );
}

export default LogIn 