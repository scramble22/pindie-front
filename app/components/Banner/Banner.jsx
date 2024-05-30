import Styles from './Banner.module.css'

export function Banner() {

  console.log(Styles)
    return (
        <section className={Styles.banner}>
        <div className={Styles.banner__description}>
          <h1 className={Styles.banner__title}>
            Портал инди-игр от студентов Яндекс Практикума
          </h1>
          <div className={Styles['banner__text-block']}>
            <p className={Styles.banner_text}>
              Студенты курсов разрабатывают свои игры на Unity, здесь мы их
              публикуем. Вы можете играть прямо на сайте. А если у вас есть
              аккаунт пользователя — получаете возможность голосовать за игры.
            </p>
          </div>
          <a href="#popular" className="button banner__link">Смотреть игры</a>
        </div>
        <img
          src="/images/banner-illustration.jpg"
          alt="Рука, утопленная в желтом фоне"
          className={Styles.banner__image}
        />
      </section>
        )
    }