import Navbar from './components/Navbar'
import './App.css';
import SearchBar from './components/SearchBar';
import Display from './components/SearchFeed';
import { Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SearchBar/>
      <Routes>
    <Route path='search/movie/:searchTerm' element={<Display/>} />
      
      </Routes>
      
    </div>
  );
}

export default App;
