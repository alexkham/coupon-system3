import CompanyModel from "../Models/CompanyModel"


export class CompanyAppState{

    public companies:CompanyModel[]=[]
}


export enum CompanyActionType {

    CompanyDownload="CompanyDownload",
    
    CompanyAdded="CompanyAdded",
    CompanyUpdated="CompanyUpdated",
    CompanyDeleted="CompanyDeleted"
}

export interface CompanyAction{

    type:CompanyActionType,
    payload:any;
}

export function companyDownloadedAction(customers: CompanyModel[]): CompanyAction {
    return { type: CompanyActionType.CompanyDownload, payload: customers };
}


export function companyAddedAction(customer: CompanyModel): CompanyAction {
    return { type: CompanyActionType.CompanyAdded, payload: customer };
}

export function companyUpdatedAction(customer: CompanyModel): CompanyAction {
    return { type: CompanyActionType.CompanyUpdated, payload: customer };
}


export function companyDeletedAction(id:number): CompanyAction {
    return { type: CompanyActionType.CompanyUpdated, payload: id };
}



export function companyReducer(currentState: CompanyAppState = new CompanyAppState(),
                            action:CompanyAction): CompanyAppState{

    const newState = {...currentState} 
    switch(action.type){
        case CompanyActionType.CompanyDownload:
            newState.companies = action.payload;
            break;
        case CompanyActionType.CompanyAdded:
            newState.companies.push(action.payload);
            break;
        case CompanyActionType.CompanyUpdated:
            //  const idx = newState.cats.filter(c => c.id === action.payload.id);
            //  newState.cats[idx]=action.payload;    
            break
            case CompanyActionType.CompanyDeleted:
                newState.companies = newState.companies.filter(c=>c.companyId !== action.payload);
                break
    }
    return newState;

}
