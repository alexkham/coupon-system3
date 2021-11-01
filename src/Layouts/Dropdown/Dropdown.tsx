import React, { useState } from 'react';
import { AdminActions } from '../../AdminArea/AdminActions';
import './Dropdown.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {AdminActions.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.action}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.path}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;