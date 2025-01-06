import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import './Form.css'

export default function Createuse(){
    let [name,setName]=useState("");
    let [age,setAge]=useState("");
    let [email,setEmail]=useState("");

    const submit = (e) => {
        e.preventDefault();
        console.log({ name, age, email });
        axios.post("https://backend-1-hrz0.onrender.com/api/fetch", { name, age, email })
            .then(res => {
                console.log(res.data);
            })
            .catch(error => {
                console.error(error);
            });
    };
    return(
        <div>
            <h1>CreateUser</h1>
            <form onSubmit={submit}>
                <label for="name">Name</label>
                <input type="text" value={name} placeholder="Enter a name" onChange={(e)=>setName(e.target.value)}></input>
                <label for="age">Age</label>
                <input type="text" value={age} placeholder="Enter a age" onChange={(e)=>setAge(e.target.value)}></input>
                <label for="email">Email</label>
                <input type="text" value={email} placeholder="Enter a email" onChange={(e)=>setEmail(e.target.value)}></input>
                <button type="submit">SUBMIT</button>
            </form>
            <button>
                <Link to='/'>Back</Link>
            </button>
        </div>
    )
}