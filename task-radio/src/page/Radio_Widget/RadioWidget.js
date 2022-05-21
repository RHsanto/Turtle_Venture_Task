import React, { useState } from 'react';
import './Radio.css'
import { FiPower ,FiMinusCircle,FiPlusCircle} from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
import imag from '../../img/radio.png'

const RadioWidget = () => {

  // here input all radio station list
const radioData = [
  {id:"1", name:"Putin FM",radio:"66,4"},
  {id:"2", name:"Biden FM",radio:"101,6"},
  {id:"3", name:"Dog FM",radio:"99,4"},
  {id:"4", name:"Ballads FM",radio:"87,1"},
  {id:"5", name:"Maximum FM",radio:"142,4"},
]

const[info,setInfo]=useState({})


  return (
    <div className='radio-section'>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mx-auto col-12">
            <h2>Listen and enjoy your favorite FM radio</h2>
            <div className=" box text-light mt-5">
              {/* box-header */}
            <div className="d-flex align-items-center justify-content-between
             py-3 px-4 box-header bg-primary">
              <MdArrowBackIosNew className='fs-2'/>
              <h2>STATIONS</h2>
             <FiPower className='fs-2'/>
            </div>
            {/* here radio station list */}
            <div className="radio-list ">
         <div className="accordion accordion-flush " id="accordionFlushExample">
          {radioData.map(data=>
         <div className="accordion-item " onClick={()=>setInfo(data)} >
          <div id={`flush-collapse${data.id}`} 
         className="accordion-collapse collapse"
         aria-labelledby={`flush-heading${data.id}`}
          data-bs-parent="#accordionFlushExample">
          <div className="accordion-body d-flex justify-content-between align-items-center">
          <FiMinusCircle className='fs-1'/>
            <img src={imag}alt="img" />  
         <FiPlusCircle className='fs-1'/>
          </div>
        </div>
        <h2 className="accordion-header" id={`flush-heading${data.id}`}>
          <div className="accordion-button collapsed d-flex justify-content-between"
           type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${data.id}`}
            aria-expanded="false" aria-controls={`flush-collapse${data.id}`}>
          <h3>{data.name} </h3>
          <h3>{data.radio}</h3>
          </div>
        </h2>
         </div>)}
         </div>
            </div>
            {/* box-footer */}
            <div className="box-footer ">
              <p className='text-light fw-bold m-0'>CURRENTLY PLAYING</p>
             <h3>{info.name}</h3>
            </div>
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default RadioWidget;