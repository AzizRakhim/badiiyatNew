import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Forum from './components/Forum/Forum';
import Header from './components/Header/Header';
import Portfolio from './components/Main/Category/Portfolio/Portfolio';
import Main from './components/Main/Main';
import Maqolalar from './components/Maqolalar/Maqolalar';
import Nasr from './components/Nasr/Nasr';
import NasrBook from './components/Nasr/NasrCategory/NasrBook/NasrBook';
import Nazm from './components/Nazm/Nazm';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='nasr' element={<Nasr />} />
        <Route path='nazm' element={<Nazm />} />
        <Route path='maqolalar' element={<Maqolalar />} />
        <Route path='forum' element={<Forum />} />
        <Route path='portfolio/:id' element={<Portfolio />} />
        <Route path='book/:id' element={<NasrBook />} />
      </Routes>
    </>
  );
}

export default App;
