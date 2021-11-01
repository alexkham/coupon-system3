import CouponModel from "../Models/CouponModel"


export class CouponAppState{

    public coupons:CouponModel[]=[]
}


export enum CouponActionType {

    CouponDownload="CouponDownload",
    
    CouponAdded="CouponAdded",
    CouponUpdated="CouponUpdated",
    CouponDeleted="CouponDeleted"
}

export interface CouponAction{

    type:CouponActionType,
    payload:any;
}

export function couponDownloadedAction(coupons: CouponModel[]): CouponAction {
    return { type: CouponActionType.CouponDownload, payload: coupons };
}


export function couponAddedAction(coupon: CouponModel): CouponAction {
    return { type: CouponActionType.CouponAdded, payload: coupon };
}

export function couponUpdatedAction(customer: CouponModel): CouponAction {
    return { type: CouponActionType.CouponUpdated, payload: customer };
}


export function couponDeletedAction(id:number): CouponAction {
    return { type: CouponActionType.CouponUpdated, payload: id };
}



export function couponReducer(currentState: CouponAppState = new CouponAppState(),
                            action:CouponAction): CouponAppState{

    const newState = {...currentState} 
    switch(action.type){
        case CouponActionType.CouponDownload:
            newState.coupons = action.payload;
            break;
        case CouponActionType.CouponAdded:
            newState.coupons.push(action.payload);
            break;
        case CouponActionType.CouponUpdated:
            //  const idx = newState.cats.filter(c => c.id === action.payload.id);
            //  newState.cats[idx]=action.payload;    
            break
            case CouponActionType.CouponDeleted:
                newState.coupons = newState.coupons.filter(c=>c.id !== action.payload);
                break
    }
    return newState;

}
