'use client';
import { useEffect, useState } from 'react'
import Styles from './Promo.module.css'

export const PromoList = () => {
  
  const [codeIsVisible, setCodeIsVisible] = useState(false);

  const handleButtonClick = () => {
    !codeIsVisible && setCodeIsVisible(true);
    // setCodeIsVisible(!codeIsVisible);
  }

  useEffect(() => {
    let timeout;
    if (codeIsVisible) {
      timeout = setTimeout(() => {
        setCodeIsVisible(false)
      },5000)
    }

    return () => {
      clearTimeout(timeout)
    }
  })

  console.log(Styles)
    return (
      <section className={Styles["promo"]}>
      <div className={Styles["promo__description-block"]}>
        <h2 className={Styles["promo__title"]}>Твой промо-код</h2>
        <p className={Styles["promo__description"]}>
          Скидка на все курсы Яндекс Практикума для пользователей нашего сайта!
        </p>
        <button onClick={handleButtonClick} className={`button ${Styles['promo_button']}`}>
          {codeIsVisible ?
          <span className='promo-code'>WEBTEENS10</span>
          :
          'Получить код'
        }
        </button>
      </div>
        <img src='/images/promo-illustration.svg' alt='Собака' className={Styles.promo__image}/>
    </section>
    )
}