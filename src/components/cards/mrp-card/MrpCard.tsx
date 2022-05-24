import React from 'react'
import { IMrp } from '../../../store/types/mrp-types'
import './mrp-card.scss'

interface IProps {
    mrpCard: IMrp
}

export const MrpCard: React.FC<IProps> = (props) => {
    const { mrpCard } = props
    return (
        <div className="mrp-card">
            <div className="mrp-card__left">
            <img src={mrpCard.img_src} alt="" />
            </div>
            <div className="mrp-card__right">
            <div className="mrp-card__camera">
                <h3>Camera</h3>
                <p>{mrpCard.camera.full_name}</p>
            </div>
            <div className="mrp-card__sol">
                <h3>Sol</h3>
                <p>{mrpCard.sol}</p>
            </div>
            <div className="mrp-card__rover-name">
                <h3>Rover name</h3>
                <p>{mrpCard.rover.name}</p>
            </div>
            <div className="mrp-card__earth-date">
                <h3>Earth date</h3>
                <p>{mrpCard.earth_date}</p>
            </div>
            </div>
        </div>
    )
}
