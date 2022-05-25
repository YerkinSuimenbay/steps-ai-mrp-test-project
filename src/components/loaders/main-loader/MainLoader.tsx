import React from 'react'
import './main-loader.scss'

interface IProps {
    text?: string,
}

export const MainLoader: React.FC<IProps> = ({text='Загрузка...'}) => {
    return (
        <div className="main-loader">
            {text}
        </div>
    )
}
