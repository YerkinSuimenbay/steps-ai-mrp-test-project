import React from 'react'
import ICONS from '../../../assets/icons'
import './modal-wrapper.scss'

interface IProps {
  children: React.ReactNode,
  onClick: () => void
}

export const ModalWrapper: React.FC<IProps> = (props) => {
  const { children, onClick } = props
  return (
    <div className="modal-container">
        <div className="modal">
            <button className="modal__close-button" onClick={onClick}><ICONS.Close/></button>
            {children}
        </div>
    </div>
  )
}
