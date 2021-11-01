import axios from "axios";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import CustomerModel from "../Models/CustomerModel";
import globals from "../Service/Globals";
import notify from "../Service/Notifications";
import MyCard from "../Layouts/Card/MyCard"
import { Card } from "react-bootstrap";



interface RouteParam{
    id: string;
}

interface CustomerDetailsProps extends RouteComponentProps<RouteParam> {
	
}

interface CustomerDetailsState {
	customer?: CustomerModel;
}

class CustomerDetails extends 
Component<CustomerDetailsProps, CustomerDetailsState> {

    public constructor(props: CustomerDetailsProps) {
        super(props);
        this.state = {
			customer: null
        };
    }



    public async componentDidMount() {
        try{
            const id = +this.props.match.params.id;
            const url=globals.urls.admin+'customer/'+id;
            const response = await axios.get<CustomerModel>(url);

            this.setState({customer:response.data});
        } 
        catch(err){
            notify.error(err);
        }
    }

    public render(): JSX.Element {
        return (
            <div className="Main">
              <div className='my-card'> 
       <Card bg={'Secondary'.toLowerCase()} 
       style={{ width: '18rem' }} >
      <Card.Header></Card.Header>
      <Card.Body>
      <Card.Title>Customer's Details </Card.Title>
      <Card.Text>
      <p> Id : {this.state.customer?.id}</p>
                   <p>Customer's First Name : {this.state.customer?.firstName}</p>  <br/>
                   <p>Customer's Last Name : {this.state.customer?.lastName}</p>   <br/>
                   
                   <p> Email : {this.state.customer?.email}</p>   <br/>
                   <p> Password : {this.state.customer?.password}</p>   <br/>
                   <p> Active : {(this.state.customer?.isActive)? "✔️":"❌"}</p>   <br/>
      </Card.Text>
       </Card.Body>
      </Card>

      </div>    
              
           
                  
            
           
        </div>

        );
    }
}

export default CustomerDetails;