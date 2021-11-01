import CustomerModel from "../Models/CustomerModel"


export class CustomerAppState{

    public customers:CustomerModel[]=[]
}


export enum CustomerActionType {

    CustomerDownload="CustomerDownload",
    CustomerAdded="CustomerAdded",
    CustomerUpdated="CustomerUpdated",
    CustomerDeleted="CustomerDeleted"
}

export interface CustomerAction{

    type:CustomerActionType,
    payload:any;
}

export function customerDownloadedAction(customers: CustomerModel[]): CustomerAction {
    return { type: CustomerActionType.CustomerDownload, payload: customers };
}


export function customerAddedAction(customer: CustomerModel): CustomerAction {
    return { type: CustomerActionType.CustomerAdded, payload: customer };
}

export function customerUpdatedAction(customer: CustomerModel): CustomerAction {
    return { type: CustomerActionType.CustomerUpdated, payload: customer };
}


export function customerDeletedAction(id:number): CustomerAction {
    return { type: CustomerActionType.CustomerUpdated, payload: id };
}



export function customerReducer(currentState: CustomerAppState = new CustomerAppState(),
                            action:CustomerAction): CustomerAppState{

    const newState = {...currentState} 
    switch(action.type){
        case CustomerActionType.CustomerDownload:
            newState.customers = action.payload;
            break;
        case CustomerActionType.CustomerAdded:
            newState.customers.push(action.payload);
            break;
        case CustomerActionType.CustomerUpdated:
            //  const idx = newState.cats.filter(c => c.id === action.payload.id);
            //  newState.cats[idx]=action.payload;    
            break
            case CustomerActionType.CustomerDeleted:
                newState.customers = newState.customers.filter(c=>c.id !== action.payload);
                break
    }
    return newState;

}
