import logo from './logo.svg';
import './App.css';
import { Search } from './components/Search';
import SearchResult from './components/SearchResult';
import { Routes, Route } from 'react-router-dom';
import ShowDetail from './components/ShowDetail';
import Booking from './components/Booking';

function App() {
  return (
    <Routes>
      <Route exact path = '/' element={<Search />}></Route>
      <Route exact path = '/result' element={<SearchResult />}></Route>
      <Route exact path = '/detail' element={<ShowDetail />}></Route>
      <Route exact path = '/book' element={<Booking/>}></Route>
    </Routes>
  );
}

export default App;
