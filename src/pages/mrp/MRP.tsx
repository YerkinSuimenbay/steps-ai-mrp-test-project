import React, { useEffect, useState } from 'react'
import { SendButton } from '../../components/buttons/send-button/SendButton'
import { SortButton } from '../../components/buttons/sort-button/SortButton'
import { MrpCard } from '../../components/cards/mrp-card/MrpCard'
import { DateField } from '../../components/fields/date-field/DateField'
import { NumberField } from '../../components/fields/number-field/NumberField'
import { SelectFIeld } from '../../components/fields/select-field/SelectFIeld'
import { MainLoader } from '../../components/loaders/main-loader/MainLoader'
import { ModalWrapper } from '../../components/modals/modal-wrapper/ModalWrapper'
import { MrpModal } from '../../components/modals/mrp-modal/MrpModal'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CameraTypes } from '../../types'
import { formatDate } from '../../utils/formatDate'
import './mrp.scss'

interface ISort {
  type: 'sol' | 'earth_date',
  value: string,
  camera: keyof typeof CameraTypes,
}

export const MRP: React.FC = () => {
  const { mrp, loading, error } = useTypedSelector(state => state.mrp)
  const { fetchMrp } = useActions()

  const [sort, setSort] = useState<ISort>({
    type: 'sol',
    value: "1000",
    camera: 'FHAZ' // ALL
  })

  const [isMrpModalVisible, setIsMrpModalVisible] = useState(false)
  const [mrpModalItemIndex, setMrpModalItemIndex] = useState(0)

  const handleFieldChange = (name: string, value: string) => {
    setSort(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSendButtonClick = () => {
    let query = `${sort.type}=${sort.value}`
    if (sort.camera !== 'ALL') query += `&camera=${sort.camera.toLowerCase()}`
    setMrpModalItemIndex(0)
    fetchMrp(query)
  }
  
  const switchMrpModalItem = (type: 'back' | 'forward') => {
    setMrpModalItemIndex(prevValue => {
      let newIndex = prevValue
      if (type === 'back') {
        if (prevValue === 0) newIndex = mrp.length - 1
        else newIndex = prevValue - 1
      } else {
        if (prevValue === mrp.length - 1) newIndex = 0
        else newIndex = prevValue + 1
      }

      return newIndex
    })
  }

  const handleMrpCardClick = (index: number) => {
    setIsMrpModalVisible(true)
    setMrpModalItemIndex(index)
  }
  
  useEffect(() => {
    let query = `${sort.type}=${sort.value}`
    if (sort.camera !== 'ALL') query += `&camera=${sort.camera.toLowerCase()}`
    fetchMrp(query)
  }, [sort.type])
  
  if (loading) return <MainLoader />
  if (error) return <p>Error</p>
  return (
    <div>
      <h2 className="page__title">Mars Rover Photos</h2>

      <div className="sort-container">
        <div className="sort-container__top">
          <SortButton label="По солу" isActive={sort.type === 'sol'} onClick={() => setSort(prevState => ({ ...prevState, type: 'sol', value: "0" })) }/>
          <SortButton label="По дате" isActive={sort.type === 'earth_date'} onClick={() => setSort(prevState => ({ ...prevState, type: 'earth_date', value: formatDate(new Date())})) }/>
        </div>
        <div className="sort-container__bottom">
          {sort.type === 'sol' 
          ? <NumberField name="value" value={sort.value} onChange={handleFieldChange} />
          : <DateField name="value" value={sort.value} onChange={handleFieldChange} />
          }
          <SelectFIeld name="camera" value={sort.camera} onChange={handleFieldChange} options={Object.values(CameraTypes)}/>
          <SendButton label="Получить" onClick={handleSendButtonClick} />
        </div>
      </div>

      <div className="mrp-cards">
        {mrp.length 
        ? mrp.map((mrpCard, index) => <MrpCard key={mrpCard.id} mrpCard={mrpCard} onClick={() => handleMrpCardClick(index)}/>)
        : <h2 className="mrp-cards__empty">No item found</h2>
        }
      </div> 
     {isMrpModalVisible && <ModalWrapper onClick={() => setIsMrpModalVisible(false)}><MrpModal item={mrp[mrpModalItemIndex]} currentIndex={mrpModalItemIndex+1} totalIndex={mrp.length} switchMrpModalItem={switchMrpModalItem}/></ModalWrapper>}
    </div>
  )
}
