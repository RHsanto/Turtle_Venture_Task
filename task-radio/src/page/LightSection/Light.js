import React from 'react';

const Light = () => {
  const handleOn=()=>{
    document.getElementById('bulbImg').src='/images/on-bulb.png'
  }
  const handleOff=()=>{
    document.getElementById('bulbImg').src='/images/off-bulb.png'
  }
  return (
    <div>
      <div >
    <button class="on-btn" 
     onclick={handleOn} >Turn on the light</button>
  
    <img id="bulbImg" src="/images/off-bulb.png" alt='img'/>
  
  <button class="off-btn" 
  onclick={handleOff}>
  Turn off the light</button>
  </div>
    </div>
  );
};

export default Light;