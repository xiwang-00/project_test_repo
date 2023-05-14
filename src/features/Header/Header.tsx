import { FC } from 'react'
import cn from 'classnames'

import s from './header.module.scss'

import Logo from '../../../public/assets/images/logo2.png'
import Phone from '../../../public/assets/icons/phone.svg'
import Link from 'next/link'
import { LinkComponent } from 'components/LinkComponent/LinkComponent'
import { Button } from 'components'
import Image from 'next/image'
import { Container } from 'features'

export interface HeaderProps {
  classNames?: string
}

export const Header: FC<HeaderProps> = ({ classNames }) => {
  return (
    <header className={cn(s.header, classNames)}>
      <Container>
        <div className={cn(s.header__inner)}>
          <Link href='/'>
            <a className={cn(s.logo)}>
              <Image src={Logo} alt='Logo' objectFit='fill' />
            </a>
          </Link>
          <nav className={cn(s.nav)}>
            <ul className={cn(s.nav__list)}>
              <li className={cn(s.nav__item)}>
                <LinkComponent text='Как продать квартиру' />
              </li>
              <li className={cn(s.nav__item)}>
                <LinkComponent text='Истории клиентов' />
              </li>
            </ul>
          </nav>
          <LinkComponent
            text='+ 7 495 835 47 11'
            href='tel:+74958354711'
            icon={<Phone />}
          />
          <Button classNames={cn(s.nav__button)} onClick={() => {}}>
            Перезвоните мне
          </Button>
        </div>
      </Container>
    </header>
  )
}
