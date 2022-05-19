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
            <div className="list-item ">
            <div class="accordion accordion-flush " id="accordionFlushExample">
  <div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingOne">
      <div class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </div>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div class="accordion-item ">
    <h2 class="accordion-header" id="flush-headingTwo">
      <div class="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </div>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingThree">
      <div class="accordion-button collapsed " type="button"
       data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
        aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </div>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" 
    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>

</div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioWidget;