import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { MainMenuData } from '../MainMenuData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import {Button} from "react-bootstrap";
import store from '../../Redux/Store';
import AuthMenu from '../../AuthArea/AuthMenu';

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      
        <div className='navbar'>
         
          
         <FaIcons.FaBars onClick={showSidebar} className='nav-icon'/>
         <h2 className='header'>Welcome to Coupon System</h2>
         {/* <div className='btn-group'>

            
           <div className='btn'>
            <p className='greeting'>Hello, guest!</p>
            </div> 

          <div className='btn'>
            
           <Link to='/login'>
           <Button variant="outline-primary" className='primary-button'>Login  </Button>{' '}
           </Link>
         </div>
         <div  className='btn'>
          <Link to='/register'>
          <Button variant="outline-secondary" className='primary-button'>Register</Button>{' '}
          </Link>
          </div>
        </div>
          
         
         
          {(store.getState().authState.user)&&
           <div className='logout-btn btn'>
          <div>
            <p>Hello, {store.getState().authState.user.first+" "+store.getState().authState.user.last}</p>
          <Link to='/logout'>
          <Button variant="outline-info" className='primary-button'>Logout</Button>{' '}
          </Link>
          </div>
          </div>
          }*/}

          <AuthMenu>

            
          </AuthMenu>
          
          
       
       
        
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                
             <AiIcons.AiOutlineClose className='nav-icon' />
             
            </li>
            {MainMenuData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
  );
}

export default Sidebar;