import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import CompanyModel from "../Models/CompanyModel";
import globals from "../Service/Globals";
import notify, { ErrMsg, SccMsg } from "../Service/Notifications";
import "../Layouts/Main/Main.css"
import store from "../Redux/Store";
import { companyAddedAction } from "../Redux/CompanyState";





export default function AddCompany(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<CompanyModel>({
    mode: "onTouched",
  });

  const history = useHistory();

 {/*} useEffect(()=>{
    // If we don't have a user object - we are not logged in
    if(!store.getState().authState.user){
        notify.error(ErrMsg.PLS_LOGIN);
        history.push("/login")
    }
})*/}

  async function send(company: CompanyModel) {
    try{
    //  const formData = new FormData();
     {/*} formData.append("name", customer.name);
      formData.append("weight", customer.weight.toString());
      formData.append("color", customer.color);
      formData.append("birthday", customer.birthday.toString());
      formData.append("image",customer.image.item(0));*/}

      const response = await axios.post<CompanyModel>(globals.urls.admin+'company');

      store.dispatch(companyAddedAction(response.data));

      //console.log(response.data);
      notify.success(SccMsg.CompanyAddedSuccessfully);
      history.push("/companies");
  
      console.log(company);
    }
    catch(err){
      notify.error(err);
    }
  }
  return (
    <div className="Main">
      <h2>Add new Company</h2>
      <form onSubmit={handleSubmit(send)}>
      <input
          type="number"
          step="0.01"
          placeholder="Id"
          {...register("companyId", {
            required: { value: true, message: "Weight is missing" },
            max: { value: 100, message: "Weight maximum value is 100" },
            min: { value: 0, message: "Weight minimum value is 0" },
          })}
        />
        <br />
        <input
          type="text"
          placeholder="First Name"
          {...register("name", { required: true, maxLength: 9 })}
        />
        <br />
        {errors.name?.type === "required" && <span>missing name</span>}
        {errors.name?.type === "maxLength" && (
          <span>name is up to 9 characters</span>
        )}
        <br />
       
        <input
          type="text"
          placeholder="Email"
          {...register("email", { required: true, maxLength: 9 })}
        />
        <br />
        {errors.email?.type === "required" && <span>missing name</span>}
        {errors.email?.type === "maxLength" && (
          <span>name is up to 9 characters</span>
        )}
        <br />
        <span>{errors.email?.message}</span>
        <br />
        <input
          type="text"
          placeholder="Password"
          {...register("password", { required: true, maxLength: 9 })}
        />
        <br />
        {errors.password?.type === "required" && <span>missing name</span>}
        {errors.password?.type === "maxLength" && (
          <span>name is up to 9 characters</span>
        )}
        <br />
        <input
          type="text"
          placeholder="Is Active"
          {...register("isActive", { required: true, maxLength: 9 })}
        />
        <br />
        {errors.isActive?.type === "required" && <span>missing name</span>}
        {errors.isActive?.type === "maxLength" && (
          <span>name is up to 9 characters</span>
        )}
        <br />
        <input type="submit" disabled={!isValid} />
      </form>
    </div>
  );
}

