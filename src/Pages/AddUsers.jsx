import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    let[values,setValues] = useState({name:"",username:"",email:""})
    let navigate = useNavigate();
    let change = (e) =>{
        setValues({...values,[e.target.name]:e.target.value});
    } 
    function adduser(e){
        e.preventDefault()
        axios.post("http://localhost:2020/users",values)
        .then(()=>{
            navigate("/")
        }).catch(err=>console.log(err))
    }
  return (
    <div className='main'>
        <h2>Add a New User</h2>
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
            <button onClick={adduser}>AddUser</button>
        </form>
    </div>
  )
}

export default AddUsers