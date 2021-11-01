import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import CustomerModel from "../Models/CustomerModel";
import store from "../Redux/Store";
import globals from "../Service/Globals";
/*import tokenAxios from "../../../Service/InterceptorAxios";*/
import notify, { SccMsg } from "../Service/Notifications";
import EmptyView from "../Pages/EmptyView/EmptyView";
import { customerDownloadedAction } from "../Redux/CustomerState";
import {Dispatch} from "redux"
import { Button, Table } from "react-bootstrap";





interface CustomersListState {
  customers: CustomerModel[];
 }

 interface CustomerProps{
  action:string
  
 }

class CustomersList extends Component<CustomerProps, CustomersListState> {
  public constructor(props: CustomerProps) {
    super(props);
    this.state = {
      customers: store.getState().customerState.customers      
      
    };
  }

  public async componentDidMount() {

      if(this.state.customers.length==0){
        try {


          //Sending token without interceptor
          // const headers = {"authorization": store.getState().authState.user.token};
          // const response = await axios.get<CatModel[]>(globals.urls.cats,{headers: headers});
          
          const response = await axios.get<CustomerModel[]>(globals.urls.admin+"customer");
          
          store.dispatch(customerDownloadedAction(response.data)) // Global State;*/
    
          this.setState({ customers: response.data }); //Local State
          notify.success(SccMsg.CustomersListCreated);
        } catch (err) {
          console.log(err)
          notify.error(err);
        }
      }
   
  }

  public async deleteCustomer(id: any) {
    const res = window.confirm(
      "Are you sure you want to delete this customer : " + id + "?"
    );
    if (res) {
      id = +id;
      try {
        const response = await axios.delete<any>(globals.urls.admin+'customer/' + id);
        this.setState({ customers: this.state.customers.filter((c) => c.id !== id) });
        store.dispatch(customerDownloadedAction(response.data));
        notify.success(SccMsg.CustomerDeleted);
      } catch (err) {
        notify.error(err);
      }
    }
  }

  public render(): JSX.Element {
    return (

      
      <div className="CustomersList">

         <NavLink to="/admin/add-customer">
         <Button variant="secondary" className='primary-button'>Add New Customer</Button>
           </NavLink><br />
        {!this.state.customers.length && <EmptyView msg="No Customers to Display"/>}
        {this.state.customers.length && 
        <div  >
        <Table striped  hover size='sm'>
         
          <thead className='table-head'style={{backgroundColor:"lightgray" }}>
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Is Active </th>
              <th>
                Actions 
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.firstName}</td>
                <td>{c.lastName}</td>
                <td>{c.email}</td>
                <td>{c.password}</td>
                <td>
                  {(c.isActive)? "✔️":"❌"}
                </td>
                <td>
                <Button variant="danger" className='primary-button' onClick={() => this.deleteCustomer(c.id)}>
                  Delete
                  </Button>
                  <Button variant="success" className='primary-button'>Update</Button>
                  <NavLink to={'get-one-customer/'+c.id}>
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

export default CustomersList;