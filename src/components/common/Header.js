import React, {PropTypes} from 'react';
import { Link, IndexLink, browserHistory } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/auth';
import LoadingDots from './LoadingDots';
import toastr from 'toastr';



const ul = {
  listStyleType: 'none', 
  textAlign: 'center', 
  borderTop: '3px solid #EEE', 
  borderBottom: '3px solid #EEE',
  padding: '20px 0',
  backgroundColor: '#4572AE'
};

const uli = {
  display: 'inline', 
  textTransform: 'uppercase', 
  padding: '0 20px', 
  color: '#FFF',
  letterSpacing: '9px'
};

const ulia =  {
  textDecoration: 'none', 
  color: '#EEE'
};

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.onLogoutClick = this.onLogoutClick.bind(this);
  }

  onLogoutClick(event) {
    event.preventDefault();
    const { auth } = this.props;
    this.props.actions.logoutUser(auth)
    .then(() => {
      this.redirectToHome();
      toastr.success(`${auth.username} logged out!`);
    });    
  }

  redirectToHome() {
    browserHistory.push('/');
  }

  render() {
    return (
      <ul style={ul}>
        <li style={uli}><Link to="forum" style={ulia}>Discover</Link></li>
        <li style={uli}><Link to="profile" style={ulia}>Account</Link></li>
        <li style={uli}><Link to="privatediscussion" style={ulia}>Messages</Link></li>
        <li style={uli}><Link onClick={this.onLogoutClick} to="/" style={ulia}>Logout</Link></li>
      </ul>
    );
  }
} 

Header.propTypes = {
  actions: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(loginActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);


