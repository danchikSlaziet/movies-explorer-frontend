import './Portfolio.css';

export default function Portfolio() {
  return (
    <section className='portfolio page__portfolio auto-width auto-width-main'>
      <p className='portfolio__title'>
        Портфолио
      </p>
      <ul className='portfolio__list'>
        <li className='portfolio__item'>
          <a className='portfolio__link link' href="https://ya.ru" target='blank'>
            <p className='link__text'>
              Статичный сайт
            </p>
            <p className='link__arrow'>
              ↗
            </p>
          </a>
        </li>
        <li className='portfolio__item'>
        <a className='portfolio__link link' href="https://ya.ru" target='blank'>
            <p className='link__text'>
              Адаптивный сайт
            </p>
            <p className='link__arrow'>
              ↗
            </p>
          </a>
        </li>
        <li className='portfolio__item'>
          <a className='portfolio__link link' href="https://ya.ru" target='blank'>
            <p className='link__text'>
              Одностраничное приложение
            </p>
            <p className='link__arrow'>
              ↗
            </p>
          </a>
        </li>
      </ul>
    </section>
  );
}