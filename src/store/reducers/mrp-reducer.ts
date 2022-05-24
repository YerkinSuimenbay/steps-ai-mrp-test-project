import { EMrpActionTypes, IMrp, IMrpState, TMrpAction } from "../types/mrp-types"

const initialState: IMrpState = {
    mrp: [],
    loading: false,
    error: null
}

export const mrpReducer = (state=initialState, action: TMrpAction): IMrpState => {
    switch (action.type) {
        case (EMrpActionTypes.FETCH_MRP):
            return { loading: true, error: null, mrp: [] }
        case (EMrpActionTypes.FETCH_MRP_SUCCESS):
            return { loading: false, error: null, mrp: action.payload }
        case (EMrpActionTypes.FETCH_MRP_ERROR):
            return { loading: false, error: action.payload, mrp: [] }
        default:
            return state
    }
}