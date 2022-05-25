import React from 'react'
import './send-button.scss'

interface IProps {
    label: string,
    onClick: () => void,
}

export const SendButton: React.FC<IProps> = (props) => {
    const { label, onClick } = props
    return (
        <button className="button send-button" onClick={onClick}>{label}</button>
    )
}