import "./Page404.css";
import React from "react";
//import * as  image from "../../Shared/pexels-david-gan-7209222.jpg"

function Page404(): JSX.Element {
    return (
        <div className="Page404">
            <h2>Opps 404...</h2>
			<img src= 'pexels-david-gan-7209222.jpg' alt="Not Foud" width='50%' height='30%'/>
        </div>
    );
}

export default Page404;