import { useNavigate } from 'react-router-dom';
import logoPath from '../../images/logo.svg';

import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import BurgerButton from '../BurgerButton/BurgerButton';

// обёртка bg-blue для того, чтобы уши на 1280+ были того же цвета, хз как по-другому сделать не через JS и чтобы семантика осталась
export default function Header({children, background, inMain, profileHandler}) { 
  const navigate = useNavigate();
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  function logoHandler() {
    navigate('/');
  }
  function burgerHandler() {
    setIsBurgerOpen(!isBurgerOpen);
  }

  return (
    <div className={background}>
      <header className="header page__header auto-width">
        <img onClick={logoHandler} className='header__logo' src={logoPath} alt="изображение логотипа" />
        <Navigation inMain={inMain}/>
        <div className='header__buttons-wrapper'>
          {children}
          {inMain ? <></> : <BurgerButton isBurgerOpen={isBurgerOpen} burgerHandler={burgerHandler}/>}
        </div>
        <BurgerMenu profileHandler={profileHandler} isBurgerOpen={isBurgerOpen} burgerHandler={burgerHandler} />
        <div className={isBurgerOpen ? 'overlay overlay_active' : 'overlay'}>
        </div>
      </header>
    </div>
  );
};