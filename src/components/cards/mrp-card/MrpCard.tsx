import React from 'react'
import { IMrp } from '../../../store/types/mrp-types'
import './mrp-card.scss'

interface IProps {
    mrpCard: IMrp,
    onClick: () => void,
}

export const MrpCard: React.FC<IProps> = (props) => {
    const { mrpCard, onClick } = props
    return (
        <div className="mrp-card" onClick={onClick}>
            <div className="mrp-card__left">
                <img src={mrpCard.img_src} alt="" />
            </div>
            <div className="mrp-card__right">
                <div className="mrp-card__camera">
                    <h3 className="mrp-card__right__key">Camera</h3>
                    <p className="mrp-card__right__value">{mrpCard.camera.full_name}</p>
                </div>
                <div className="mrp-card__sol">
                    <h3 className="mrp-card__right__key">Sol</h3>
                    <p className="mrp-card__right__value">{mrpCard.sol}</p>
                </div>
                <div className="mrp-card__rover-name">
                    <h3 className="mrp-card__right__key">Rover name</h3>
                    <p className="mrp-card__right__value">{mrpCard.rover.name}</p>
                </div>
                <div className="mrp-card__earth-date">
                    <h3 className="mrp-card__right__key">Earth date</h3>
                    <p className="mrp-card__right__value">{mrpCard.earth_date}</p>
                </div>
            </div>
        </div>
    )
}
