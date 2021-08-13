//Create top menu

import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css';
 
const Navigation = () => {
    return (
        <nav className="col-md-2">
        	<ul>
				    <li>
              <div className="sidebar_item">
                <button className="btn btn-light" type="button">
                  <Link to={'/'}>List All Posts</Link>
                </button>
              </div>
            </li>
            <li>
              <div className="sidebar_item">
                <button className="btn btn-light" type="button">
                  <Link to={'/create'}>Add New Post</Link>
                </button>
              </div>
            </li>
          </ul>
        </nav>
     );
}
 
export default Navigation;