import React from 'react';
import './Radio.css'
import { FiPower } from 'react-icons/fi';
import { MdArrowBackIosNew } from 'react-icons/md';
const RadioWidget = () => {

  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className=" box">
            <div className="d-flex align-items-center justify-content-between p-3 box-header">
              <MdArrowBackIosNew className='fs-2'/>
              <h2>STATIONS</h2>
             <FiPower className='fs-2'/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioWidget;