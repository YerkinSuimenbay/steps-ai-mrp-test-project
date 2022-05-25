import React from 'react'
import ICONS from '../../../assets/icons'
import { IMrp } from '../../../store/types/mrp-types'
import './mrp-modal.scss'

interface IProps {
    switchMrpModalItem: (type: 'back' | 'forward') => void,
    item: IMrp,
    currentIndex: number,
    totalIndex: number,
}

export const MrpModal: React.FC<IProps> = (props) => {
    const { item, currentIndex, totalIndex, switchMrpModalItem } = props
    const { id, sol, camera: { id: cameraId, name: cameraName, full_name: cameraFullName }, img_src, rover: { id: roverId, name: roverName, landing_date, launch_date } } = item
    return (
        <div className="mrp-modal">
            <div className="mrp-modal__left">
                <button className="mrp-modal__left__arrow-left" onClick={() => switchMrpModalItem('back')}><ICONS.ArrowLeft /></button>
                <img src={img_src} alt="rover" />
                <button className="mrp-modal__left__arrow-right" onClick={() => switchMrpModalItem('forward')}><ICONS.ArrowRight /></button>
            </div>
            <div className="mrp-modal__right">
                <div className="mrp-modal__right__info-section">
                    <section>
                        <h3>GENERAL</h3>
                        <p><b>Id:</b> {id}</p>
                        <p><b>Sol:</b> {sol}</p>
                    </section>
                    <section>
                        <h3>CAMERA</h3>
                        <p><b>Id:</b> {cameraId}</p>
                        <p><b>Name:</b> {cameraName}</p>
                        <p><b>Full name:</b> {cameraFullName}</p>
                    </section>
                    <section>
                        <h3>ROVER</h3>
                        <p><b>Id:</b> {roverId}</p>
                        <p><b>Name:</b> {roverName}</p>
                        <p><b>Launch date:</b> {launch_date}</p>
                        <p><b>Landing date:</b> {landing_date}</p>
                    </section>
                </div>
                <h3 className="mrp-modal__right__counter">{currentIndex}/{totalIndex}</h3>
            </div>
        </div>
    )
}
