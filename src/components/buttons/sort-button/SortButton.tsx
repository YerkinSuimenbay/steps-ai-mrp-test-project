import React from 'react'
import './sort-button.scss'

interface IProps {
    isActive?: boolean,
    label: string,
    onClick: () => void,
}

export const SortButton: React.FC<IProps> = (props) => {
    const { isActive, label, onClick } = props
    return (
        <button className={`button sort-button ${isActive ? "active" : ""}`} onClick={onClick}>{label}</button>
    )
}
