import { FC } from 'react'
import cn from 'classnames'

import s from './info.module.scss'
import { Container } from 'features'
import { Button } from 'components'
import { Card } from 'components/Card/Card'
import Image from 'next/image'
import Illus from '../../../../../public/assets/images/illustration.png'
import Illus2 from '../../../../../public/assets/images/illustration2.png'
import Illus3 from '../../../../../public/assets/images/illustration3.png'

export const Info: FC = () => {
  const data = [
    {
      id: 1,
      text: 'Какие документы мне нужны для продажи или покупки квартиры?',
      image: Illus,
    },
    {
      id: 2,
      text: 'Зайду на www.ccccc.ru и узнаю!',
      image: Illus2,
    },
    {
      id: 3,
      text: 'Отлично! Теперь я знаю, что делать!',
      image: Illus3,
    },
  ]

  return (
    <section>
      <Container>
        <div className={cn(s.info)}>
          <div className={cn(s.info__top)}>
            <ul className={cn(s.info__list)}>
              {data.map(item => (
                <Card
                  key={item.id}
                  id={item.id}
                  text={item.text}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
          <div className={cn(s.info__bottom)}>
            <div className={cn(s.info__wrapper)}>
              <h2 className={cn(s.info__title)}>
                Пройдите небольшой опрос и узнайте, как
                <span className={cn(s.info__span)}>избежать рисков</span> при
                продаже или покупке квартиры
              </h2>
            </div>
            <div className={cn(s.info__content, s.content)}>
              <div className={cn(s.content__left)}></div>
              <div className={cn(s.content__right)}>
                <p className={cn(s.content__text)}>
                  Время прохождения опроса{' '}
                  <span className={cn(s.content__span)}>3 минуты</span>
                </p>
                <div className={cn(s.content__wrapper)}>
                  <h3 className={cn(s.content__title)}>
                    Хочу безопасно и легко продать или купить квартиру
                  </h3>
                  <Button classNames={cn(s.content__button)} onClick={() => {}}>
                    Начать
                  </Button>
                </div>
                <div className={cn(s.content__inner)}>
                  <p className={cn(s.content__subtitle)}>
                    После завершения опроса вы получите PDF файл с содержащий:
                  </p>
                  <ol className={cn(s.content__list)}>
                    <li className={cn(s.content__item)}>
                      Список документов, необходимых в вашем конкретном случае.
                    </li>
                    <li className={cn(s.content__item)}>
                      Разъяснение сложных терминов «на пальцах».
                    </li>
                    <li className={cn(s.content__item)}>
                      Оценку возможных рисков.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
