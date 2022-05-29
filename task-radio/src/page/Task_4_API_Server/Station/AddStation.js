import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';

const AddStation = () => {
  const {user}=useFirebase()
  // here use hook from and add new radio station
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data => {
    console.log(data);
    data.email=user?.email
    axios.post('https://whispering-thicket-90342.herokuapp.com/all-station',data)
    .then(res =>{
      console.log(res);
      if(res.data.insertedId){
        alert('Radio Station Add Successfully');
        reset();
      }
    })
  
};
  return (
    <div>
     <div className="container">
       <div className="row">
         <div className="col-lg-6 mx-auto">
         <div className='shadow mt-5 '>
   <h2 className=' text-light bg-primary p-2 '>Add a New Station  !</h2>
    <form className='pb-5' onSubmit={handleSubmit(onSubmit)}>
   
          <div class="form-floating mt-5 m-3">
               <input type="text" {...register("name", { required: true })} class="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label for="floatingInput">Enter Station Name</label>
           </div>
          <div class="form-floating m-3">
               <input type="tel" {...register("radio", { required: true })} class="form-control" id="floatingInput" placeholder="name@example.com"/>
               <label for="floatingInput">Enter Station Number</label>
           </div>
      <button className= ' btn btn-success px-5 py-2' type="submit" >Submit</button>
     
    </form>
        
  </div>
         </div>
       </div>
     </div>
    </div>
  );
};

export default AddStation;