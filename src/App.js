
import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Report from './Report/Report';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className='Layout'>
      <Header />
        <Router>
          <Routes>
            <Route path='/' element={<Report />} />
            <Route path='/reports' element={<Report />} />
            <Route path='/accounts' element={<Report />} />
            <Route path='/payroll' element={<Report />} />
            <Route path='/advisor' element={<Report />} />
            <Route path='/contact' element={<Report />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
