import './AboutMe.css';
import photoPath from '../../images/self-photo.jpeg'

export default function AboutMe() {
  return (
    <section className='about-me page__about-me auto-width auto-width-main'>
      <h2 className='title about-me__title'>
        Студент
      </h2>
      <div className='dividing-line about-me__line'>
      </div>
      <div className='about-me__info'>
        <div className='about-me__text'>
          <p className='about-me__name'>
            Виталий
          </p>
          <p className='about-me__career'>
            Фронтенд-разработчик, 30 лет
          </p>
          <p className='about-me__history'>
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ.
             У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё 
             увлекаюсь бегом. Недавно начал кодить. 
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, 
            как прошёл курс по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a className='about-me__link' href="https://github.com/danchikSlaziet" target='blank'>Github</a>
        </div>
        <img className='about-me__img' src={photoPath} alt="фото веб-разработчика" />
      </div>
    </section>
  );
}