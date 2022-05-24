import axios from "axios"
import { Dispatch } from "redux"
import { EMrpActionTypes, TMrpAction } from "../types/mrp-types"


const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${process.env.REACT_APP_MRP_API_KEY}`

export const fetchMrp = () => async (dispatch: Dispatch<TMrpAction>) => {
    try {
        dispatch({ type: EMrpActionTypes.FETCH_MRP })
        const res = await axios.get(URL)
        const { photos } = res.data
        dispatch({ type: EMrpActionTypes.FETCH_MRP_SUCCESS, payload: photos })
    } catch (error) {
        dispatch({ type: EMrpActionTypes.FETCH_MRP_ERROR, payload: 'Error while fetching mars rover photos' })
    }
}