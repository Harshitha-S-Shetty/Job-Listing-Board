import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [JobList, setJobList] = useState([]); // Define JobList state and its setter function
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("JobList")) || [];
    // Update the state with stored data
    setJobList(storedData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_data = {
      username: username,
      email: email,
      password: password
    };
    setJobList([...JobList, new_data]);
    localStorage.setItem("JobList", JSON.stringify([...JobList, new_data]));
    alert("Registration is Successful");
    navigate("/login");
  };

  return (
    <>
      <div style={{backgroundImage:"url('https://media.istockphoto.com/id/1331579485/vector/background-curved-light-blue.jpg?s=612x612&w=0&k=20&c=Wslr-PIxcQDoxXmzC7_w8rbFM9_s_5Jz99tE3ftNM1A=')", backgroundSize: "cover"}}>
        <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", height: '90vh'}}>
          <h4 style={{color:"gray", marginBottom:"20px", fontWeight:"lighter"}}>Register</h4>
          <div className="form-floating mb-2 mt-1" style={{width: 300}}>
            <input type="text" className="form-control" id="floatingUsername" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} value={username} />
            <label htmlFor="floatingUsername">Username</label>
          </div>
          <div className="form-floating mb-2 mt-3" style={{width: 300}}>
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)} value={email} />
            <label htmlFor="floatingInput">Email Address</label>
          </div>
          <div className="form-floating mb-2 mt-3" style={{width: 300}}>
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} value={password} />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary btn-sm mt-5" style={{width: 300}}>Register</button>
          <p className='mt-3' style={{fontSize:"13px"}}>Already have an account?<Link to="/login" style={{textDecoration:"none", marginLeft:"5px"}}>Login</Link></p>
        </form>
      </div>
    </>
  );
}

export default Register;