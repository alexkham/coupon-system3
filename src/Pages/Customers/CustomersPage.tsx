import React from "react";
import "../../Layouts/Main/Main.css";
import Mycard from "../../Layouts/Card/MyCard";
import { CustomerActions } from "../../CustomersArea/CustomerActions";


class CustomersPage extends React.Component {



    render(){

        const list=CustomerActions;

        
        return (
            <div className="Main">
                <h1>Customers Main Page</h1>
    
                <div className='my-card'>
                 {list.map((item:any,index:number)=>{
                     return(
                        <div  key={index}>  
                       
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

export default CustomersPage;