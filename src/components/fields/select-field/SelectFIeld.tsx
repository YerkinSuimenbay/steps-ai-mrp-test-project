import React, { useEffect, useRef, useState } from 'react'
import ICONS from '../../../assets/icons'
import './select-field.scss'

interface IProps {
    name: string,
    value: string,
    options: string[],
    onChange: (name: string, value: string) => void
}

export const SelectFIeld: React.FC<IProps> = (props) => {
    const { options, name, value, onChange } = props
    const [isVisible, setIsVisible] = useState(false)

    const selectRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (!selectRef.current || !event.target) return
        if (!selectRef.current.contains(event.target as Node)) {
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])



    const toggleOptions = () => {
        setIsVisible(prevValue => !prevValue)
    }


    const handleClick = (option: string) => {
        onChange(name, option)
        setIsVisible(false)
    }
    return (
        <div className="field select-field" ref={selectRef}>
            <div className="select-field__selected-option">
                <input type="text" name={name} value={value} onClick={toggleOptions} readOnly/>
                {isVisible ? <ICONS.ArrowUp /> : <ICONS.ArrowDown />}
            </div>
            {isVisible &&
            <ul className="select-field__options">
                {options.length 
                ? options.map(option => <li key={option} onClick={() => handleClick(option)}>{option}</li>) 
                : <li>no option</li>
                }
            </ul>
            }
        </div>
    )
}
