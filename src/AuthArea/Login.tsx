import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { loginAction } from "../Redux/AuthState";
import store from "../Redux/Store";
import globals from "../Service/Globals";
import notify, { SccMsg } from "../Service/Notifications";
//import "./Login.css";

function Login(): JSX.Element {
    const history = useHistory(); //Redirect function
    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsModel>();

    async function send(credentials: CredentialsModel){
        console.log(credentials);
        let url='';
        if(credentials.type==="ADMIN")
           url=globals.urls.admin;
           else if(credentials.type==="COMPANY")
           url=globals.urls.company;
           else
           url=globals.urls.customer;
        try{ 
            const response = await axios.post<UserModel>(url+"login",credentials);
            console.log(response.data);
            store.dispatch(loginAction(response.data));
            notify.success(SccMsg.LoginSuccess);
            history.push("/home"); // Redirect to home in success
          }
          catch(err){
              notify.error(err);
          }
    }


    return (
        <div className="Login Box">
            <h2>Login</h2>
               <form onSubmit={handleSubmit(send)}>
        
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: true,
            minLength: 4,
            maxLength: 12,
          })
        
        }
        />
<br />
<select {...register("type", { required: {value:true,message:'Missing User Type'} })}>
         <option value="" disabled>User Type</option>
          <option value="ADMIN">Admin</option>
          <option value="CUSTOMER">Customer</option>
          <option value="COMPANY">Company</option>
        </select>
        <br/>
                <span>{errors.type?.message}</span>

        <input type="submit" value="Login"/>

      </form>
			
        </div>
    );
}

export default Login;