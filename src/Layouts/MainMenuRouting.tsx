import { Redirect, Route, Switch } from "react-router-dom";
import About from "../Pages/About";
import AdminPage from "../Pages/AdminArea/AdminPage";
import CompaniesPage from "../Pages/Companies/CompaniesPage";
import ContactUsPage from "../Pages/ContactPage/ContactUsPage";
import CustomersList from "../CustomersArea/CustomersList";
import Main from "./Main/Main";
import Page404 from "../Pages/Page404/Page404";
import UpdateCompany from "../AdminArea/UpdateCompany";
import AddCustomer from "../CustomersArea/AddCustomer";
import Logout from "../AuthArea/Logout";
import CustomerDetails from "../CustomersArea/CustomerDetails";
import CompaniesList from "../CompaniesArea/CompaniesList";
import CustomersPage from "../Pages/Customers/CustomersPage";
import CompanyDetails from "../CompaniesArea/CompanyDetails";
import AddCompany from "../CompaniesArea/AddCompany";
import Login from "../AuthArea/Login";
import Register from "../AuthArea/Register";
import CouponsList from "../CouponsArea/CouponsList";



function Routing(): JSX.Element {
    return (
        <div className="Routing">
           
			<Switch>
                <Route path="/home" component={Main} exact/>cc
                <Route path="/admin" component={AdminPage} exact/>
                <Route path="/admin/update-company" component={UpdateCompany} exact/>
                <Route path="/admin/add-customer" component={AddCustomer} exact/>
                <Route path="/admin/add-company" component={AddCompany} exact/>
                <Route path="/admin/get-all-customers" component={ ()=><CustomersList  action={"SomeAction"}/>} exact/>
                <Route path="/admin/get-one-customer/:id" component={CustomerDetails} exact/>
                <Route path="/admin/get-one-company/:id" component={CompanyDetails} exact/>
                <Route path="/admin/get-all-companies" component={CompaniesList} exact/>
                <Route path="/companies/get-company-coupons" component={CouponsList} exact/>
                <Route path="/customers" component={CustomersPage} exact/>
                <Route path="/companies" component={CompaniesPage} exact/>
                <Route path="/contact-us" component={ContactUsPage} exact/>
                <Route path="/about" component={About} exact/>
                <Route path="/logout" component={Logout} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/register" component={Register} exact/>
                <Redirect path="/" to="/home" exact/>
                <Route component={Page404} exact/> 
               {/*} <Route path="/register" component={Register} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/logout" component={Logout} exact/>
                <Route path="/contact-us" component={ContactUs} exact/>
                <Redirect path="/" to="/home" exact/>
    <Route component={Page404} exact/> */}
            </Switch>
            
        </div>
    );
}

export default Routing;