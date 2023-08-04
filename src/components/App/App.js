import { Route, Routes, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './App.css';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import { useEffect, useState } from 'react';
import mainApi from '../../utils/MainApi';
import Preloader from '../Preloader/Preloader';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

export default function App() {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const [isActivePreloader, setIsActivePreloader] = useState(false);
  const [currentUser, setCurrentUser] = useState({name: '', email: '', userID: ''});
 
  function profileHandler() {
    navigate('/profile');
  }
  function loginHandler() {
    navigate('/signin');
  }
  function registerHandler() {
    navigate('/signup');
  }
  function changeLogged() {
    setLoggedIn(!loggedIn);
  }
  function apiSignOut() {
    mainApi.signOut()
      .then((data) => {
        console.log(data);
        navigate('/');
        changeLogged();
      })
      .catch(err => console.log(err));
  }

  function checkToken() {
    mainApi.getInfoAboutMe()
      .then((data) => {
        changeLogged();
        navigate('/movies');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    mainApi.getInfoAboutMe()
      .then((data) => {
        setCurrentUser({name: data.name, email: data.mail, userID: data.userID});
      })
      .catch((err) => console.log(err));
  }, [loggedIn, currentUser.name, currentUser.email]);

  useEffect(() => {
    // этот эффект для того, чтобы при перезагрузке главной страницы у залогиненного пользователя был loggedIn = true;
    mainApi.getInfoAboutMe()
      .then((data) => {
        changeLogged();
      })
      .catch((err) => console.log(err));
  }, [])

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <Routes>
          <Route path='/' element={
            <>
            <Header loginHandler={loginHandler} registerHandler={registerHandler} inMain={true} profileHandler={profileHandler} loggedIn={loggedIn} />
              <Main />
              <Footer />
            </>} />
          <Route path='/movies' element={<ProtectedRoute setIsActivePreloader={setIsActivePreloader} element={Movies} loggedIn={loggedIn} profileHandler={profileHandler} />}/>
          <Route path='/saved-movies' element={<ProtectedRoute element={SavedMovies} loggedIn={loggedIn} profileHandler={profileHandler} />}/>
          <Route path='/profile' element={<ProtectedRoute element={Profile} setCurrentUser={setCurrentUser} outHandler={apiSignOut} loggedIn={loggedIn}/>}/>
          <Route path='/signup' element={<Register changeLogged={changeLogged}/>} />
          <Route path='/signin' element={<Login checkToken={checkToken} changeLogged={changeLogged}/>} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
        <Preloader isVisible={isActivePreloader} />
      </>
    </CurrentUserContext.Provider>
  );
}
