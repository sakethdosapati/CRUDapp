import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import { useNavigate,Link } from 'react-router-dom'

const GetUsers = () => {
    let [state,setState] = useState([])
    let [thead,setThead] = useState([])
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:2020/users")
        .then(res =>{
            setState(res.data);
            setThead(Object.keys(res.data[0]).slice(0,4))     
        })
        .catch(err => console.log(err))
    },[state])
    function deletes(id){
        axios.delete(`http://localhost:2020/users/${id}`)
        .then(()=>{
            navigate("/")
        }).catch(err => console.log(err))
    }
  return (
    <table border={1}>
         <caption>
            <strong>CRUD OPERATIONS</strong>
            <button id='add' style={{marginLeft:"30px"}} onClick={() =>navigate("/add")}>Add+</button>
         </caption>
         <thead>
            <tr>
                {thead.map((x,ind) => <th key={ind}>{x}</th>)}
                <th>Operations</th>
            </tr>
         </thead>
         <tbody>
            {state.map(res =>{
                return(
                    <tr key={res.id}>
                        <td>{res.id}</td>
                        <td>{res.name}</td>
                        <td>{res.username}</td>
                        <td>{res.email}</td>
                        <td>
                            <Link to={`/edit/${res.id}`}><button id='edit'>EDIT</button></Link>
                            <button onClick={()=>deletes(res.id)} id='delete'>DELETE</button>
                        </td>
                    </tr>
                )
            })}
         </tbody>
    </table>
  )
}

export default GetUsers