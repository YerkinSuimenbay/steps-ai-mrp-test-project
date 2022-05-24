import React, { useEffect } from 'react'
import { MrpCard } from '../../components/cards/mrp-card/MrpCard'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import './mrp.scss'

const item = {
  "id": 102693,
  "sol": 1000,
  "camera": {
    "id": 20,
    "name": "FHAZ",
    "rover_id": 5,
    "full_name": "Front Hazard Avoidance Camera"
  },
  "img_src": "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG",
  "earth_date": "2015-05-30",
  "rover": {
    "id": 5,
    "name": "Curiosity",
    "landing_date": "2012-08-06",
    "launch_date": "2011-11-26",
    "status": "active"
  }
}

export const MRP: React.FC = () => {
  const { mrp, loading, error } = useTypedSelector(state => state.mrp)
  const { fetchMrp } = useActions()



  useEffect(() => {
    fetchMrp()
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>
  return (
    <div>
      <h2 className="page__title">Mars Rover Photos</h2>

      <div className="mrp-cards">
        {mrp.map(mrpCard => <MrpCard mrpCard={mrpCard}/>)}
      </div> 
    </div>
  )
}
