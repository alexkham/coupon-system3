import React from "react";
import "../../Layouts/Main/Main.css";
import Mycard from "../../Layouts/Card/MyCard";
import { CompaniesActions } from "../../CompaniesArea/CompaniesActions";
import {Button, Table} from "react-bootstrap";
import Table2 from "../../Layouts/Table/Table2";

class CompaniesPage extends React.Component {



    render(){

        const list=CompaniesActions;

        
        return (

            
            <div className="Main">
                <h1>Companies Main Page</h1>

                <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td >Larry the Bird</td>
      <td>@twitter</td>
      <td>@fat</td>
    </tr>
  </tbody>
</Table>

                <Table2/>
    
                <div className='my-card'>
                 {list.map((item:any,index:number)=>{
                     return(
                        <div key={index}>  
                       
                         <Mycard action={item.action} path={item.path}/>
                         <br />
                         </div>
                         
                     )

                 }

                 )}
                </div>
                
            </div>
        );

    }
    
}

export default CompaniesPage;