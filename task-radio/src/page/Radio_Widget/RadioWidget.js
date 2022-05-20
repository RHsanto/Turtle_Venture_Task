import React, { useState } from 'react';
import './Radio.css'
import { FiPower ,FiMinusCircle,FiPlusCircle} from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
import imag from '../../img/radio.png'
const RadioWidget = () => {

const sampleData = [
  {id:"1", name:"Putin",radio:"66,4"},
  {id:"2", name:"Biden",radio:"101,6"},
  {id:"3", name:"Dog",radio:"99,4"},
  {id:"4", name:"Ballads",radio:"87,1"},
  {id:"5", name:"Maximum",radio:"142,4"},
]

const[info,setInfo]=useState({})

console.log(info.name);

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className=" box">
            <div className="d-flex align-items-center justify-content-between p-3 box-header">
              <MdArrowBackIosNew className='fs-2'/>
              <h2>STATIONS</h2>
             <FiPower className='fs-2'/>
            </div>
            <div className="list-item ">
    <div class="accordion accordion-flush " id="accordionFlushExample">
      {sampleData.map(data=>
        <div class="accordion-item " onClick={()=>setInfo(data)} >
        <div id={`flush-collapse${data.id}`} 
        class="accordion-collapse collapse"
        aria-labelledby={`flush-heading${data.id}`}
        data-bs-parent="#accordionFlushExample">
        <div class="accordion-body d-flex justify-content-between align-items-center">
          <FiMinusCircle className='fs-1'/>
            <img src={imag}alt="img" />  
         <FiPlusCircle className='fs-1'/>
          </div>
        </div>
        <h2 class="accordion-header" id={`flush-heading${data.id}`}>
          <div class="accordion-button collapsed d-flex justify-content-between"
           type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${data.id}`}
            aria-expanded="false" aria-controls={`flush-collapse${data.id}`}>
          <h3>{data.name} FM</h3>
          <h3>{data.radio}</h3>
          </div>
        </h2>
       
         </div>)}
     </div>
            </div>
            <div className="box-footer">
              <p >CURRENTLY PLAYING</p>
             <h3>{info.name} FM</h3>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioWidget;