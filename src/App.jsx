import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Forum from './components/Forum/Forum';
import SignIn from './components/Forum/SignIn/SignIn';
import SignUp from './components/Forum/SignUp/SignUp';
import Header from './components/Header/Header';
import Portfolio from './components/Main/Category/Portfolio/Portfolio';
import Main from './components/Main/Main';
import Maqolalar from './components/Maqolalar/Maqolalar';
import Nasr from './components/Nasr/Nasr';
import NasrBook from './components/Nasr/NasrCategory/NasrBook/NasrBook';
import Nazm from './components/Nazm/Nazm';
import Profile from './components/Profile/Profile';
import Setting from './components/Setting/Setting';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='nasr' element={<Nasr />} />
        <Route path='nazm' element={<Nazm />} />
        <Route path='maqolalar' element={<Maqolalar />} />
        <Route path='forum' element={<Forum />} />
        <Route path='portfolio/:id' element={<Portfolio />} />
        <Route path='book/:id' element={<NasrBook />} />
        <Route path='forum/signup' element={<SignUp />} />
        <Route path='forum/signin' element={<SignIn />} />
        <Route path="profile" element={<Profile />} />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
