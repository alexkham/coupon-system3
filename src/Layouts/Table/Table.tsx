import React from "react";
import * as Botstrap from "react-bootstrap";
import "./Table.css";


const Table=()=>{

    const list=[
        {
            id:1,
            title:"Hello",
            price:200

        },

        {
            id:2,
            title:"Hi",
            price:2000

        },
        {
            id:3,
            title:"One plus One",
            price:2455600

        },
        {
            id:4,
            title:"Bye",
            price:238

        },
    ]

    const renderItem=(item:any,index:number)=>{
        return(
            <tr key={index}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>


            </tr>
        )
    }

    return(
         <div className='table-wrapper'>
        <Botstrap.Table striped bordered hover size="lg" responsive>
            <table className='table table-striped'>
         <thead  className='thead-dark'>
            <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            </tr>

         </thead>
         <tbody className='t-body'>
             {list.map(renderItem)}
         </tbody>
         </table>

        </Botstrap.Table>
        </div>
    )
}

export default Table;