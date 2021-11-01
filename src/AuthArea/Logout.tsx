import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import store from "../Redux/Store";
import { logoutAction } from "../Redux/AuthState";
import notify, { SccMsg } from "../Service/Notifications";


function Logout(): JSX.Element {
    const history = useHistory();

    useEffect(()=> //React Hook for running side effects inside a fc
    { 
        notify.success( SccMsg.LogoutSuccess);
        store.dispatch(logoutAction());
        history.push("/home");
    });

    
    return (
        <></>
    );
}

export default Logout;