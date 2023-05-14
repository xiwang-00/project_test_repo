import { FC, ReactNode } from 'react'
import cn from 'classnames'

import { CloseButton } from './closeButton'

import { ModalNames } from 'shared/hocs/ModalContext'

import s from './modalWrapper.module.scss'

interface ModalWrapperProps {
  classnames?: string
  isOpen: boolean
  onClose: (modalName: ModalNames) => void
  children: ReactNode
  closeButton?: boolean
  modalName: ModalNames
}

export const ModalWrapper: FC<ModalWrapperProps> = ({
  classnames,
  isOpen,
  onClose,
  children,
  closeButton,
  modalName,
}) => {
  const handleClose = () => {
    onClose(modalName)
  }

  return isOpen ? (
    <div className={cn(s.modal, classnames)}>
      <div className={s.overlay} onClick={handleClose}>
        <div className={s.contentWrap}>
          {closeButton ? <CloseButton handleClose={handleClose} /> : null}

          <div className={s.content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </div>
  ) : null
}
