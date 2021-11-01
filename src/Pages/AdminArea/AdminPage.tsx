import React from "react";
import "../../Layouts/Main/Main.css";
import Mycard from "../../Layouts/Card/MyCard";
import { AdminActions} from "../../AdminArea/AdminActions";
import {Button} from "react-bootstrap";
import Table from "../../Layouts/Table/Table";

class AdminPage extends React.Component {

   


    render(){

        const list=AdminActions;
        
        
        return (
            <div className="Main">
                <h1>Admin Main Page</h1>
                <Table />
    
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

export default AdminPage;