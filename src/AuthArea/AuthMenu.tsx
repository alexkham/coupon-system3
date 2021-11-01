
import { Component } from "react";
import { Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Unsubscribe } from "redux";
import UserModel from "../Models/UserModel";
import store from "../Redux/Store";
//import "./AuthMenu.css";

interface AuthMenuState {
  user: UserModel;
}

class AuthMenu extends Component<{}, AuthMenuState> {
  private unsubscribe: Unsubscribe;
  public constructor(props: {}) {
    super(props);
    this.state = {
      user: store.getState().authState.user,
    };
  }

  public componentDidMount(): void {
    store.subscribe(() => {
      this.setState({ user: store.getState().authState.user });
    });
  }

  public componentWillUnmount(): void {
    this.unsubscribe();
  }

  public render(): JSX.Element {
    return (
      <div className="AuthMenu">
        {this.state.user && (
          <div className='logout-btn btn'>
          <div>
            <p className='greeting'>
              Hello, 
              {store.getState().authState.user.first+" "+store.getState().authState.user.last}</p>
            </div>
            <div>
          <Link to='/logout'>
          <Button variant="outline-info" className='primary-button'>Logout</Button>{' '}
          </Link>
          </div>
          </div>
        )}

        {!this.state.user && (
          <div className='btn-group'>
            
          <div className='btn'>
           <p className='greeting'>Hello, guest!</p>
           </div> 

         <div className='btn'>
           
          <Link to='/login'>
          <Button variant="outline-primary" className='primary-button'>Login</Button>{' '}
          </Link>
        </div>
        <div  className='btn'>
         <Link to='/register'>
         <Button variant="outline-secondary" className='primary-button'>Register</Button>{' '}
         </Link>
         </div>
       </div>
         
        )}
      </div>
    );
  }
}

export default AuthMenu;