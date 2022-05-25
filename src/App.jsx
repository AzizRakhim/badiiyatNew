import { useState } from 'react';
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
  let [saved, setSaved] = useState([]);
  let [name, setName] = useState("");
  let [lastName, setLastName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [isTrue, setIsTrue] = useState(true);

  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='nasr' element={<Nasr />} />
        <Route path='nazm' element={<Nazm />} />
        <Route path='maqolalar' element={<Maqolalar />} />
        <Route 
          path='forum' 
          element={<Forum
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail} 
          />} 
        />
        <Route path='portfolio/:id' element={<Portfolio />} />
        <Route path='book/:id' element={<NasrBook 
          saved={saved}
          setSaved={setSaved}
        />} />
        <Route 
          path='/signup' 
          element={<SignUp 
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />}
        />
        <Route path='/signin' element={<SignIn />} />
        <Route 
          path="profile" 
          element={<Profile
            saved={saved}
            setSaved={setSaved}
            name={name}
            setName={setName}
            lastName={lastName}
            setLastName={setLastName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
          />} 
        />
        <Route path="setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default App;
