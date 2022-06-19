
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

function App() {
    

  return (
   
    <div className="App">
       <BrowserRouter>
      <div className='main'>

      <Routes>
           <Route path='/fourth' element={<Pickup/>} />
           <Route path='/fifth' element={<Auction/>} />
           <Route path='/sixth' element={<Quiz/>} />
           <Route path='/first' element={<User_home/>} />
           <Route path='/second' element={<Auction_ground/>} />
           <Route path='/third' element={<Feed/>} />
           <Route path='/Prof' element={<Profile/>} />
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
