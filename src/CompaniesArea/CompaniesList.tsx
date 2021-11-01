import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import CompanyModel from "../Models/CompanyModel";
import { companyDownloadedAction } from "../Redux/CompanyState";
import store from "../Redux/Store";
import globals from "../Service/Globals";
/*import tokenAxios from "../../../Service/InterceptorAxios";*/
import notify, { ErrMsg, SccMsg } from "../Service/Notifications";
import EmptyView from "../Pages/EmptyView/EmptyView";
import { Button, Table } from "react-bootstrap";


interface CompaniesListState {
  companies: CompanyModel[];
}

class CompaniesList extends Component<{}, CompaniesListState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      companies: store.getState().companyState.companies
      
    };
  }

  public async componentDidMount() {

      if(this.state.companies.length==0){
        try {


          //Sending token without interceptor
          // const headers = {"authorization": store.getState().authState.user.token};
          // const response = await axios.get<CatModel[]>(globals.urls.cats,{headers: headers});
          
          const response = await axios.get<CompanyModel[]>(globals.urls.admin+"company");
    
          store.dispatch(companyDownloadedAction(response.data)) // Global State;*/
    
          this.setState({ companies: response.data }); //Local State
          notify.success(SccMsg.CompaniesListCreated);
        } catch (err) {
          console.log(err)
          notify.error(err);
        }
      }
   
  }

  public async deleteCompany(id: any) {
    const res = window.confirm(
      "Are you sure you want to delete this customer : " + id + "?"
    );
    if (res) {
      id = +id;
      try {
        const response = await axios.delete<any>(globals.urls.admin+'company/' + id);
        this.setState({ companies: this.state.companies.filter((c) => c.companyId !== id) });
        store.dispatch(companyDownloadedAction(response.data));
        notify.success(SccMsg.CompanyDeleted);
      } catch (err) {
        notify.error(err);
      }
    }
  }

  public render(): JSX.Element {
    return (
      <div className="CustomersList">
         <NavLink to="/admin/add-company">
             <Button  variant="secondary" className='primary-button'>Add New Company</Button>
         </NavLink>
        
        {!this.state.companies.length && <EmptyView msg="No Companies to Display"/>}
        {this.state.companies.length && 
         <div >
        <Table  striped bordered hover size='sm'>
         
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Is Active</th>
              <th>
                Actions 
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.companies.map((c) => (
              <tr key={c.companyId}>
                <td>{c.companyId}</td>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.password}</td>
                <td>
                {(c.isActive)? "✔️":"❌"}
                </td>
                <td>
                <Button variant="danger" className='primary-button' onClick={() => this.deleteCompany(c.companyId)}>
                  Delete
                  </Button>
                  <Button variant="success" className='primary-button'>Update</Button>
                  <NavLink to={'get-one-company/'+c.companyId}>
                    <Button variant="primary" className='primary-button'>Details</Button>
                    </NavLink> 
                </td>
              </tr>
            ))}
          </tbody>
        
        </Table>
        </div>
         }
      </div>
    );
  }
}

export default CompaniesList;