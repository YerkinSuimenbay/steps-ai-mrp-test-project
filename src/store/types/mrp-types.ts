export interface IMrp {
    id: number,
    sol: number,
    camera: {
        id: number,
        name: string,
        rover_id: number,
        full_name: string
    },
    img_src: string,
    earth_date: string,  //date
    rover: {
        id: number,
        name: string,
        landing_date: string,
        launch_date: string
        status: string
    }
}

export interface IMrpState {
    mrp: IMrp[],
    loading: boolean,
    error: null | string,
}

export enum EMrpActionTypes {
    FETCH_MRP = "FETCH_MRP",
    FETCH_MRP_SUCCESS = "FETCH_MRP_SUCCESS",
    FETCH_MRP_ERROR = "FETCH_MRP_ERROR",
}

export interface IFetchMrpAction {
    type: EMrpActionTypes.FETCH_MRP
}

export interface IFetchMrpActionSuccess {
    type: EMrpActionTypes.FETCH_MRP_SUCCESS,
    payload: IMrp[]
}

export interface IFetchMrpActionError {
    type: EMrpActionTypes.FETCH_MRP_ERROR,
    payload: string
}

export type TMrpAction = IFetchMrpAction | IFetchMrpActionSuccess | IFetchMrpActionError