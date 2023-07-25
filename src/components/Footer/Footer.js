import './Footer.css';

export default function Footer() {
  return (
    <footer className='footer page__footer auto-width'>
      <span className='footer__text'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </span>
      <div className='footer__border'>
      </div>
      <div className='footer__info'>
        <span className='footer__copy'>
          © 2023
        </span>
        <div className='footer__links'>
          <a className='footer__link' href="https://practicum.yandex.ru/" target='blank'>
            Яндекс.Практикум
          </a>
          <a className='footer__link' href="https://github.com/danchikSlaziet/movies-explorer-frontend" target='blank'>
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}