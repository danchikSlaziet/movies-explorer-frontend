import { useNavigate } from 'react-router-dom';
import logoPath from '../../images/logo.svg';
import accountPath from '../../images/account-svg.svg';
import './Header.css';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

// обёртка bg-blue для того, чтобы уши на 1280+ были того же цвета, хз как по-другому сделать не через JS и чтобы семантика осталась
export default function Header({children, background, inMain}) { 
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
          {inMain ?
            <></> :
            <button onClick={burgerHandler} type="button" className='burger-button'>
              <div className={isBurgerOpen ? 'burger-button__line burger-button__line_active' : 'burger-button__line'}>
              </div>
              <div className={isBurgerOpen ? 'burger-button__line burger-button__line_active' : 'burger-button__line'}>
              </div>
              <div className={isBurgerOpen ? 'burger-button__line burger-button__line_active' : 'burger-button__line'}>
              </div>
            </button>}
        </div>
        <div className={isBurgerOpen ? 'burger-menu burger-menu_active' : 'burger-menu'}>
          <Navigation burgerHandler={burgerHandler} navInBurger={true} />
          <button className='burger-menu__account' type="button">
            <p className='burger-menu__text'>
              Аккаунт
            </p>
            <img className='burger-menu__img' src={accountPath} alt="картинка кнопки профиля" />
          </button>
        </div>
        <div className={isBurgerOpen ? 'overlay overlay_active' : 'overlay'}>
        </div>
      </header>
    </div>
  );
};