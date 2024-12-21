import { Routes, Route, Link } from 'react-router-dom';
import DigitalClock from './pages/DigitalClock';
import CountdownTimer from './pages/CountdownTimer';
import LocalTime from './pages/LocalTime';
function App() {
  return (
    <div>
      <header className='bg-green-400 p-5 text-white flex justify-between'>

        <Link to="/">DigitalClock</Link>
        <Link to="/CountdownTimer">CountdownTimer</Link>
        <Link to="/LocalTime">LocalTime</Link>
        
     
      </header>
      <Routes>
        <Route path="/" element={<DigitalClock />} />
        <Route path="/CountdownTimer" element={<CountdownTimer />} />
        <Route path="/LocalTime" element={<LocalTime />} />
      </Routes>
    </div>
  );
}

export default App;
