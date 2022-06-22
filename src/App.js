
import './App.css';
import NavBar from './Components/Navbar'
import Pickup from './Pages/Pickup';
import Home from './Pages/User_home';
import { BrowserRouter, Route, Routes,Switch} from 'react-router-dom'
import Pickup_2 from './Pages/Pickup_2';
import Pickup_suc from './Pages/Pickup_suc';
import Auction from './Pages/Auction';
import Profile from './Pages/Profile';
import Quiz from './Pages/Quiz';
import Final_score from './Pages/Final_score';
import Feed from './Pages/Feed';
import Auction_ground from './Pages/Auction_ground';
import Admin_home from './Pages/Admin_home';
import User_home from './Pages/User_home';
import Each_item from './Pages/Each_item';
import Logs from './Pages/Logs';
import Log1 from './Pages/Log1';
import Log2 from './Pages/Log2';
import Each_log from './Pages/Each_log';
import Auth from './Pages/signin';

function App() {
    

  return (
   
    <div className="App">
       <BrowserRouter>
      <div className='main'>

      <Routes>
      <Route path='/base' element={<Auth/>} />
           <Route path='/fourth' element={<Auction_ground/>} />
           <Route path='/fifth' element={<Auction/>} />
           <Route path='/sixth' element={<Logs/>} />
           <Route path='/first' element={<Admin_home/>} />
           <Route path='/second' element={<Each_item/>} />
           <Route path='/third' element={<Feed/>} />
           <Route path='/Prof' element={<Profile/>} />
           <Route path='/log0' element={<Each_log/>} />
           <Route path='/log1' element={<Log1/>} />
           <Route path='/log3' element={<Log2/>} />
           <Route path='/PsucK' element={<Pickup_suc/>} /> 
           <Route path='/each' element={<Each_item/>} />
           <Route path='/quiz_final' element={<Final_score/>}/>
           
      </Routes>
     
      <div className='navbar' ></div>
    </div>
    <NavBar/>
    </BrowserRouter>
    </div>

    
  );
}

export default App;
