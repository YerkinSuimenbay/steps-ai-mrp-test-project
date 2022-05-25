import React from 'react'
import './date-field.scss'

interface IProps {
    name: string,
    value: string,
    onChange: (name: string, value: string) => void,
    label?: string,
}

export const DateField: React.FC<IProps> = (props) => {
    const { name, value, onChange, label } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(name, event.target.value)
    }

    return (
        <div className="field date-field">
            <input type="date" name={name} id={name} value={value} onChange={handleChange}/>
            {!!label && <label htmlFor={name}>{label}</label>}
        </div>
    )
}
