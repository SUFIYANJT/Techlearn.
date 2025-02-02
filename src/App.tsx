import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Page/Home';
import Courses from './Page/Programs';


const App = () => {
  return (
    <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/programs' element={<Courses/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
