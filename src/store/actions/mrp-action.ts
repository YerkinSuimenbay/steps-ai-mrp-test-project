import axios from "axios"
import { Dispatch } from "redux"
import { EMrpActionTypes, TMrpAction } from "../types/mrp-types"



export const fetchMrp = (query: string) => async (dispatch: Dispatch<TMrpAction>) => {
    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?${query}&api_key=${process.env.REACT_APP_MRP_API_KEY}`
    try {
        dispatch({ type: EMrpActionTypes.FETCH_MRP })
        const res = await axios.get(URL)
        const { photos } = res.data
        dispatch({ type: EMrpActionTypes.FETCH_MRP_SUCCESS, payload: photos })
    } catch (error) {
        dispatch({ type: EMrpActionTypes.FETCH_MRP_ERROR, payload: 'Error while fetching mars rover photos' })
    }
}