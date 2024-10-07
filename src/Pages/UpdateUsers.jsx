import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom';

const UpdateUsers = () => {
    let[values,setValues] = useState({name:"",username:"",email:""})
    let navigate = useNavigate();
    let change = (e) =>{
        setValues({...values,[e.target.name]:e.target.value});
    } 
    let { id } = useParams();
    useEffect(()=>{
        axios.get("http://localhost:2020/users/" + id)
        .then(res=>setValues(res.data))  
    },[])
    function update(e){
        e.preventDefault()
        axios.put("http://localhost:2020/users/" + id,values)
       .then(()=>{
        navigate("/")
       }).catch(err=>console.log(err));
    }
  return (
    <div className='main'>
        <h2>Update your Details</h2>
        <form action="">
            <input type="text" placeholder='name' 
            name="name"
            value={values.name}
            onChange={change}
            />
            <br /><br />
            <input type="text" placeholder='username' 
            name="username"
            value={values.username}
            onChange={change}
            />
            <br /><br />
            <input type="email" placeholder='email address' 
            name='email'
            value={values.email}
            onChange={change}
            />
            <br /><br />
            <button onClick={update}>UpdateUser</button>
        </form>
    </div>
  )
}

export default UpdateUsers