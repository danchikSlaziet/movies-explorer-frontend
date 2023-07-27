import { useNavigate } from 'react-router-dom';
import './Profile.css';
import { useState } from 'react';

export default function Profile() {
  const navigate = useNavigate();
  const [isInputConfig, setIsInputConfig] = useState({name: 'Виталий', mail: 'pochta@yandex.ru', isDisabled: true, activeClass: ''});
  const [isType, setIsType] = useState('button');
  const [isText, setIsText] = useState('Редактировать');

  function exitHandler() {
    navigate('/')
  }
  function editHandler(e) {
    e.preventDefault();
    if (isText === 'Редактировать') {
      setIsInputConfig({...isInputConfig, isDisabled: false, activeClass: 'profile__input_active'});
      setIsText('Сохранить');
      setIsType('submit');
    }
    
    else {     
      setIsInputConfig({...isInputConfig, isDisabled: true, activeClass: ''});
      setIsText('Редактировать');
      setIsType('button');
    }
  }

  return (
    <main>
      <section className='profile page__profile'>
        <h1 className='profile__greeting'>
          Привет, {isInputConfig.name}!
        </h1>
        <form className='profile__form'>
          <div className='profile__info'>
            <div className='profile__wrapper'>
              <span className='profile__field'>
                Имя
              </span>
              <input minLength={2} maxLength={30} required type='text' placeholder='введите имя' className={`profile__name profile__input ${isInputConfig.activeClass}`} value={isInputConfig.name} disabled={isInputConfig.isDisabled} onChange={(e) => setIsInputConfig({...isInputConfig, name: e.target.value})}/>
            </div>
            <div className='profile__wrapper'>
              <span className='profile__field'>
                E-mail
              </span>
              <input required type='email' placeholder='введите почту' className={`profile__mail profile__input ${isInputConfig.activeClass}`} value={isInputConfig.mail} disabled={isInputConfig.isDisabled} onChange={(e) => setIsInputConfig({...isInputConfig, mail: e.target.value})}/>
            </div>
          </div>
          <div className='profile__buttons'>
            <button onClick={editHandler} className='profile__edit-btn profile__btn' type={isType}>{isText}</button>
            <button onClick={exitHandler} className='profile__exit-btn profile__btn' type="button">Выйти из аккаунта</button>
          </div>
        </form>
      </section>
    </main>
  );
}