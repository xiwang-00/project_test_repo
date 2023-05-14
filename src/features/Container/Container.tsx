import { FC, ReactNode } from 'react'
import cn from 'classnames'

import s from './container.module.scss'

interface ContainerProps {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={cn(s.container)}>{children}</div>
}
