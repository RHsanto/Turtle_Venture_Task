
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './page/common/Navbar';
import RadioWidget from './page/Radio_Widget/RadioWidget';
import SignIN from './page/Task_4_API_Server/Authentication/SignIN';
import SignUp from './page/Task_4_API_Server/Authentication/SignUp';
import AddStation from './page/Task_4_API_Server/Station/AddStation';
import AllStation from './page/Task_4_API_Server/Station/AllStation';



function App() {

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

