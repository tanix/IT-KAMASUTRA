
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavBar from './components/NavBar/NavBar';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Login from './components/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="content">
          <Routes>
            <Route element={<DialogsContainer />} path="dialogs"></Route>
            <Route element={<ProfileContainer />} path="profile/:userId?" ></Route>
            <Route element={<UsersContainer />} path="users" ></Route>
            <Route element={<Login />} path="login" ></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
