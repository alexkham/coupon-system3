import axios from "axios";
import { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import CompanyModel from "../Models/CompanyModel";
import globals from "../Service/Globals";
import notify from "../Service/Notifications";
import MyCard from "../Layouts/Card/MyCard"
import { Card } from "react-bootstrap";
import "../Layouts/Main/Main"



interface RouteParam{
    id: string;
}

interface CompanyDetailsProps extends RouteComponentProps<RouteParam> {
	
}

interface CompanyDetailsState {
	company?: CompanyModel;
}

class CompanyDetails extends 
Component<CompanyDetailsProps, CompanyDetailsState> {

    public constructor(props: CompanyDetailsProps) {
        super(props);
        this.state = {
			company: null
        };
    }



    public async componentDidMount() {
        try{
            const id = +this.props.match.params.id;
            const url=globals.urls.admin+'company/'+id;
            const response = await axios.get<CompanyModel>(url);

            this.setState({company:response.data});
            notify.success("Got Company Details");
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
      <Card.Title>Company Details </Card.Title>
      <Card.Text>
                   <p><strong> Id :</strong> {this.state.company?.companyId}</p>
                   <p><strong>Company's Name :</strong> {this.state.company?.name}</p>  <br/>
                   <p> Email : {this.state.company?.email}</p>   <br/>
                   <p> Password : {this.state.company?.password}</p>   <br/>
                   <p> Active : {(this.state.company?.isActive)? "✔️":"❌"}</p>   <br/>
      </Card.Text>
       </Card.Body>
      </Card>

      </div>              
                   
        </div>

        );
    }
}

export default CompanyDetails;