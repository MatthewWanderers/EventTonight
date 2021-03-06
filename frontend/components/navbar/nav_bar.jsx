import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';



class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <nav>
        <div className="navbar">
            <h1 className='logo'><Link to='/'>Eventnite</Link></h1>

            <ul className='navlinks'>
              <li><Link to='/location/'>Browse Events</Link></li>
              <li className="display-username">{this.props.currentUser.username}</li>
              <li><a href="#" onClick={this.props.logout}>Log out</a></li>
              <li><Link to="/events/new"><div className="create-event">Create Event</div></Link></li>
              </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
