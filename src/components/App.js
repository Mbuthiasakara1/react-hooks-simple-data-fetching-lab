// create your App component here
import React, { useEffect, useState } from "react";

function App(){
 const [image,setImage]=useState('')
  const[loading,setLoading]=useState(true)

  useEffect(() =>
    fetch('https://dog.ceo/api/breeds/image/random')
  .then(r=>r.json())
  .then(data =>{
    setImage(data.message)
    setLoading(false)
  }
    
  )
)
return (
  <>
    {loading ? <p>Loading...</p> : <img src={image} alt="A Random Dog"/>}
  </>
);
}

export  default App