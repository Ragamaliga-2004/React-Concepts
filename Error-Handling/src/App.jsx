import axios from "axios";
import { useState,useEffect } from "react";
import React from 'react'

const App = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios.get("https://jsonplaceholder.typicode.com/posts/3000")
    .then((response)=>{
      setData(response.data)
    })
    .catch((error)=>{
      if (error.response){
        setError(`Server Error: ${error.response.status}`);
      }
      else if(error.request){
        setError("Network Error");
      }
      else{
        setError(error.message);
      }
    }).finally(()=>setLoading(false))
  }, [])

  if (loading) return <p>Loading</p>
  if (error) return <p style={{color:"darkred"}}>{error}</p>
  
  return (
    <div>
      <p>Post Details</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App