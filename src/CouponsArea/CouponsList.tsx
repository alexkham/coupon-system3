import axios from "axios";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import CouponModel from "../Models/CouponModel";
import { companyDownloadedAction } from "../Redux/CompanyState";
import store from "../Redux/Store";
import globals from "../Service/Globals";
import tokenAxios from "../Service/InterceptorAxios";
import notify, { ErrMsg, SccMsg } from "../Service/Notifications";
import EmptyView from "../Pages/EmptyView/EmptyView";
import { Button, Table } from "react-bootstrap";
import { JsxEmit } from "typescript";
import { couponDownloadedAction } from "../Redux/CouponState";





interface CouponsListState {
  coupons: CouponModel[];
}

class CouponsList extends Component<{}, CouponsListState> {
  public constructor(props: {}) {
    super(props);
    this.state = {

      coupons: store.getState().couponState.coupons
  
    };
  }

  public async componentDidMount() {

      if(this.state.coupons.length==0){
        try {


          //Sending token without interceptor
          // const headers = {"authorization": store.getState().authState.user.token};
          // const response = await axios.get<CatModel[]>(globals.urls.cats,{headers: headers});
          
          const response = await axios.get<CouponModel[]>(globals.urls.company+"coupons");
    
          store.dispatch(couponDownloadedAction(response.data)) // Global State;*/
    
         this.setState({ coupons: response.data }); //Local State
          notify.success(SccMsg.CouponsListCreated);
        } catch (err) {
          console.log(err)
          notify.error(err);
        }
      }
   
    }

 /* public async deleteCompany(id: any) {
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
  }*/

  public render():JSX.Element {
    return (
      <div className="CustomersList">
         <NavLink to="/admin/add-company">
             <Button  variant="secondary" className='primary-button'>Add New Coupon</Button>
         </NavLink>
        
        {!this.state.coupons.length && <EmptyView msg="No Coupons to Display"/>}
        {this.state.coupons.length && 
         <div >
        <Table  striped bordered hover size='sm'>
         
          <thead>
            <tr>
              <th>Id</th>
              <th>Company Id and Name</th>
              <th>Category Id and Name</th>
              <th>Title</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Quantity in Stock</th>
              <th>Unit Price</th>
              <th>Image Url</th>
              <th>Is Active</th>
              <th>
                Actions 
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.coupons.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.company.companyId}{' -'+c.company.name}</td>
                <td>{c.category.id}{' -'+c.category.categoryName}</td>
                <td>{c.title}</td>
                <td>{c.description}</td>
                <td>{c.startDate}</td>
                <td>{c.endDate}</td>
                <td>{c.quantity}</td>
                <td>{c.unitPrice}</td>
                <td>{c.imageUrl}</td>
                <td>
                {(c.isActive)? "✔️":"❌"}
                </td>
                <td>
                <Button variant="danger" className='primary-button' /*onClick={() => this.deleteCompany(c.companyId)}*/>
                  Delete
                  </Button>
                  <Button variant="success" className='primary-button'>Update</Button>
                  
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

export default CouponsList;

