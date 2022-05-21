
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/common/Navbar';
import RadioWidget from './page/Radio_Widget/RadioWidget';
import SignIN from './page/Task_4_API_Server/Authentication/SignIN';
import SignUp from './page/Task_4_API_Server/Authentication/SignUp';
import AddStation from './page/Task_4_API_Server/Station/AddStation';
import AllStation from './page/Task_4_API_Server/Station/AllStation';
import { gapi } from 'gapi-script';
// here use client id
const clientId="997390170447-rkpk3l9lltfi7d9qbtcukksodou5sc75.apps.googleusercontent.com"

function App() {
  // here use function for oauth2.0
 useEffect(()=>{
   function start(){
     gapi.client.init({
      clientId:clientId,
      scope:""
     })
   };
   gapi.load("client:auth2",start)
 })
  
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<RadioWidget/>} />
          <Route path='/sign-in' element={ <SignIN/>} />
          <Route path='/sign-up' element={ <SignUp/>} />
          <Route path='/all-station' element={ <AllStation/>} />
          <Route path='/add-station' element={ <AddStation/>} />
        </Routes>
      </BrowserRouter>
     
    
  
    </div>
  );
}

export default App;

