import './AboutProject.css';

export default function AboutProject() {

  return (
    <section id='project' className="project page__project auto-width auto-width-main">
      <h2 className="title project__title">
        О проекте
      </h2>
      <div className='dividing-line project__line'>
      </div>
      <div className='project__info-wrapper'>
        <div className='project__info'>
          <h3 className='project__heading'>
            Дипломный проект включал 5 этапов
          </h3>
          <p className='project__subheading'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__info'>
          <h3 className='project__heading'>
            На выполнение диплома ушло 5 недель
          </h3>
          <p className='project__subheading'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__progress'>
        <div className='project__back-line'>
          <p className='project__text-line project__text-line_bg_green'>
            1 неделя
          </p>
          <p className='project__text-underline'>
            Back-end
          </p>
        </div>
        <div className='project__front-line'>
          <p className='project__text-line project__text-line_bg_gray project__text-line_color_white'>
            4 недели
          </p>
          <p className='project__text-underline'>
            Front-end
          </p>
        </div>
      </div>
    </section>
  );
}