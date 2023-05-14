import { FC } from 'react'
import cn from 'classnames'

import s from './footer.module.scss'
import { Container } from 'features/Container/Container'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/assets/images/footerlogo.png'
import { LinkComponent } from 'components/LinkComponent/LinkComponent'

export interface FooterProps {
  classNames?: string
}

export const Footer: FC<FooterProps> = ({ classNames }) => {
  return (
    <footer className={cn(s.footer)}>
      <Container>
        <div className={cn(s.footer__inner)}>
          <Link href='/'>
            <a className={cn(s.logo)}>
              <Image src={Logo} alt='Logo' objectFit='fill' />
            </a>
          </Link>
          <div>
            <Link href='/'>
              <a className={cn(s.footer__link, s.footer__map)}>
                г. Москва, Красная площадь д.1
              </a>
            </Link>
            <Link href='/'>
              <a className={cn(s.footer__link, s.footer__phone)}>
                + 7 495 835 47 11
              </a>
            </Link>
          </div>
          <div>
            <p className={cn(s.footer__link, s.footer__time)}>Режим работы</p>
            <time className={cn(s.footer__text)}>
              Пн. - Пт. - с 9:00 до 17:00
            </time>
            <time className={cn(s.footer__text)}>
              Сб. - Вс. - с 9:00 до 17:00
            </time>
          </div>
        </div>
        <div className={cn(s.footer__mobile)}>
          <Link href='/'>
            <a className={cn(s.footer__link, s.footer__map)}>
              г. Москва, Красная площадь д.1
            </a>
          </Link>
          <div className={cn(s.footer__middle)}>
            <p className={cn(s.footer__link, s.footer__time)}>Режим работы</p>
            <time className={cn(s.footer__text)}>
              Пн. - Пт. - с 9:00 до 17:00
            </time>
            <time className={cn(s.footer__text)}>
              Сб. - Вс. - с 9:00 до 17:00
            </time>
          </div>
          <Link href='/'>
            <a className={cn(s.footer__link, s.footer__phone)}>
              + 7 495 835 47 11
            </a>
          </Link>
        </div>
      </Container>
    </footer>
  )
}
