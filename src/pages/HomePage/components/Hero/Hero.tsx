import { FC } from 'react'
import cn from 'classnames'

import s from './hero.module.scss'
import { Container } from 'features'
import { Button } from 'components'

export const Hero: FC = () => {
  return (
    <section className={cn(s.hero)}>
      <Container>
        <div className={cn(s.hero__inner)}>
          <p className={cn(s.hero__text)}>
            Запутались в сложных терминах и документах?
          </p>
          <h1 className={cn(s.hero__title)}>
            Узнайте, какие <span className={cn(s.hero__span)}>документы</span>{' '}
            подготовить и что учесть при{' '}
            <span className={cn(s.hero__span)}>продаже и покупке</span> квартиры
          </h1>
          <Button classNames={cn(s.hero__button)} onClick={() => {}}>
            Хочу знать больше
          </Button>
        </div>
      </Container>
    </section>
  )
}
