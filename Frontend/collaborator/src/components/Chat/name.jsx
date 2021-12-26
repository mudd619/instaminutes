import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Name(){

    const [inp,setInp] = useState("");

    const navigate = useNavigate()

    const handleInp = (e)=>{
        setInp(e.target.value)
    }

    const handleSubmit = ()=>{
        if(inp.length === 0){
            return alert("Enter Valid Name")
        }
        localStorage.setItem("name",JSON.stringify(inp));
        navigate("/chat")

    }

    return<>
    <h1 style={{textAlign:"center",marginTop:"5%"}}>Text Site</h1>
     <div style={{display:"flex",justifyContent:"center",marginTop:"8%"}}>
        <TextField onChange={handleInp} id="outlined-basic" label="Enter your name" variant="outlined" />
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
    </div>
    </>
}

export {Name}