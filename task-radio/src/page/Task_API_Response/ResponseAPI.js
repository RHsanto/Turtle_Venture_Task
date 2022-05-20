import React, { useEffect, useState } from 'react';

const ResponseAPI = () => {
  const [info,setInfo]=useState([]);

  useEffect(()=>{
    fetch('https://gorest.co.in/public/v1/users')
    .then(response=>response.json())
    .then(data=>setInfo(data.data))
  })
  return (
    <div>
     {info.map(data=>
      <h1>{data?.name}</h1>
      )}
    </div>
  );
};

export default ResponseAPI;