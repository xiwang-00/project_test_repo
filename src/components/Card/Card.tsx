import { FC } from 'react'
import cn from 'classnames'

import s from './card.module.scss'
import Image, { StaticImageData } from 'next/image'

interface CardProps {
  image: string | StaticImageData
  text: string
  id: number
}

export const Card: FC<CardProps> = ({ image, text, id }) => {
  return (
    <li className={cn(s.card)}>
      <span className={cn(s.card__id)}>{id}</span>
      <p className={cn(s.card__text)}>{text}</p>
      <Image className={cn(s.card__image)} src={image} alt={text} />
    </li>
  )
}
