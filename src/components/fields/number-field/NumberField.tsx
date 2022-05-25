import React from 'react'
import './number-field.scss'

interface IProps {
    name: string,
    value: string,
    onChange: (name: string, value: string) => void,
    label?: string,
}

export const NumberField: React.FC<IProps> = (props) => {
    const { name, value, onChange, label } = props

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value.replace(/[^0-9.]/g, '')
        onChange(name, value)
    }

    return (
        <div className="field number-field">
            <input type="text" name={name} id={name} value={value} onChange={handleChange}/>
            {!!label && <label htmlFor={name}>{label}</label>}
        </div>
    )
}
