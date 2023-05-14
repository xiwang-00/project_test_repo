import { createContext, useState } from 'react'
import { ModalWrapper } from 'components'

// hook for modals, to use you need to add the name of your modal to the ModalNames
// type and the state to the initial state, and then wrap your modal component in
// the ModalWrapper and place it in jsx, to open the modal window in your component,
// use the userContext in which you need to pass the ModalContext,
// and through destructuring, take the openModal and closeModal functions from the userContext,
// they take as an argument the name of your modal that you added to ModalNames and open or close the Modal

// HOC для модальных окон,
// для использования вам нужно добавить название своей модалки в тип ModalNames и состояние в initial state,
// и далее обернуть свой компонент модалки в ModalWrapper и поместить его в Jsx,
// для открытия модального окна в своем компоненте используйте useContext
// в который нужно передать ModalContext,
// и через деструктуризацию забрать из useContext функции openModal и closeModal,
// они принимают аргументом название вашей модалки которое вы добавили в ModalNames
// и открывают или закрывают ваше Модальное окно

// add name for you modal
export type ModalNames = 'example' | 'example2' | 'example3'

interface ModalContextsState {
  openModal: (modalName: ModalNames) => void
  closeModal: (modalName: ModalNames) => void
}

const defaultValue: ModalContextsState = {
  openModal: () => {},
  closeModal: () => {},
}

export const ModalContext = createContext<ModalContextsState>(defaultValue)

export const ModalProvider = ({ children }: any) => {
  // initial state
  const [isModal1Open, setIsModal1Open] = useState({
    example: false,
    example2: false,
    example3: false,
    // add state for you modal component
  })

  // open modal function
  const openModal = (modalName: ModalNames) => {
    setIsModal1Open({ ...isModal1Open, [modalName]: true })
  }

  // close modal function
  const closeModal = (modalName: ModalNames) => {
    setIsModal1Open({ ...isModal1Open, [modalName]: false })
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <ModalWrapper
        isOpen={isModal1Open.example}
        onClose={closeModal}
        closeButton
        modalName={'example'}
      >
        <div>modal example 1</div>
      </ModalWrapper>

      <ModalWrapper
        isOpen={isModal1Open.example2}
        onClose={closeModal}
        closeButton
        modalName={'example2'}
      >
        <div>modal example 2</div>
      </ModalWrapper>

      <ModalWrapper
        isOpen={isModal1Open.example3}
        onClose={closeModal}
        closeButton
        modalName={'example3'}
      >
        <div>modal example 3</div>
      </ModalWrapper>

      {/*add your component with modal wrapper*/}
    </ModalContext.Provider>
  )
}
