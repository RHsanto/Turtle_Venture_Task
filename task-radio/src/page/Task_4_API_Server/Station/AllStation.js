import React, { useEffect, useState } from 'react';

const AllStation = () => {

  const[stations,setStations]=useState([])
  useEffect(()=>{
    fetch('http://localhost:8000/all-station')
    .then(res=>res.json())
    .then(data=>setStations(data))
  })
   // Here orders delete
   const handleDelete = id =>{
     console.log(id);
    const proceed = window.confirm('Are you sure , you want to delete ?');
    if(proceed){
      const url =`http://localhost:8000/all-station/${id}`
      fetch(url,{
          method: 'DELETE'
      })
          .then(res => res.json())
          .then(data =>{
              if(data){
               alert('Deleted successfully')
               const remaining = stations.filter(station => station._id !== id)
               setStations(remaining)
              }
          })
  }
    
  }
  var id = 1;
  return (
    <div>
     <div className="container mt-5">
       <div className="row">
         <div className="col-lg-8 mx-auto">
              <div className=" info">
              <div className="div">No</div>
              <div className="div">Name</div>
              <div className="div">Station</div>
              <div className="div">Edit</div>
              </div>
           {stations.map(station=>
            <div>
             
             <div className="station-table ">
               <div className="div">{id++}</div>
               <div className="div">{station.name}</div>
               <div className="div">{station.radio}</div>
               <div className="div ">
                 <button className='btn btn-success'>edit</button>
                 <button onClick={()=>handleDelete(station._id)} className='btn btn-danger ms-4'>delete</button>
               </div>
             </div>
            </div>)}
         </div>
       </div>
     </div>
    </div>
  );
};

export default AllStation;