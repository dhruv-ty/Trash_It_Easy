
import './App.css';
import NavBar from './Components/Navbar'
import Pickup from './Pages/Pickup';
import Home from './Pages/User_home';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Pickup_2 from './Pages/Pickup_2';
import Pickup_suc from './Pages/Pickup_suc';
import Auction from './Pages/Auction';
import Profile from './Pages/Profile';
import Quiz from './Pages/Quiz';
import Final_score from './Pages/Final_score';
function App() {
    

  return (
    <BrowserRouter>
    <div className="App">
      <div className='main'>

      <Routes>
           <Route path='/first' element={<Home/>} />
           <Route path='/second' element={<Pickup/>} />
           <Route path='/third' element={<Quiz/>} />
           <Route path='/Prof' element={<Profile/>} />
           <Route path='/quiz_final' element={<Final_score/>}/>
      </Routes>
      
      <div className='navbar' ></div>
    </div>
    
    <NavBar/>

    </div>

    </BrowserRouter>
  );
}

export default App;
