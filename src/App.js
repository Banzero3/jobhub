import Applypage from './Applypage.js';
import logo from './logo.svg';
import SearchPage from './SearchPage.js'; // Correct import

import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
      <Route path='/' exact Component={SearchPage}/>
      <Route path='/Applypage' exact Component={Applypage}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
