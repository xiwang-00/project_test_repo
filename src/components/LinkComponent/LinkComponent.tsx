import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './linkcomponent.module.scss'
import Link from 'next/link'

interface LinkProps {
  text: string
  href?: string
  icon?: ReactNode
}

export const LinkComponent: FC<LinkProps> = ({ text, href = '/', icon }) => {
  return (
    <Link href={href}>
      <a className={cn(s.link)}>
        {icon}
        {text}
      </a>
    </Link>
  )
}
