
import React, { useEffect, useState } from 'react';

const AllStation = () => {
  const[editStation,setEditStation]=useState({})
  const[updateName,setUpdateName]=useState("")
  const[updateRadio,setUpdateRadio]=useState("")
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
          })}

  }
  var id = 1;
   
  const handleEdit=(station)=>{
    setEditStation(station);
  }

  const handleUpdate=(id)=>{
 
   if(updateName === editStation.name && updateRadio === editStation.radio){
       alert("You are no changed")
   }
   console.log(updateName,updateRadio);
   console.log(id);
   const data = {name:updateName,radio:updateRadio }
   const url = `http://localhost:8000/all-station/${id}`
   fetch(url,{
     method: "PUT",
     headers: {"content-type": "application/json"},
     body:JSON.stringify(data)

   })
  .then(res=> res.json())
  .then(data=>{
     console.log(data);
     alert('Radio Station Update Success')
    window.location.reload()
  })
  }

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
                 <button onClick={()=>handleEdit(station)} 
                 className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">
                   Edit    </button>        
         <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">Edit Radio Station</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <div class="form-floating mt-5 m-3">
        <input type="text" defaultValue={editStation?.name} 
        class="form-control" id="floatingInput" onChange={e=>setUpdateName(e.target.value)}
        />
       
       
    </div>
   <div class="form-floating m-3">
        <input type="tel" defaultValue={editStation?.radio} 
         class="form-control" id="floatingInput"  onChange={e=>setUpdateRadio(e.target.value)}
         />
     
    </div>
              </div>


      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={()=>handleUpdate(editStation?._id)}>Save changes</button>
      </div>
    </div>
  </div>
</div>
              
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