import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/auth';
import {browserHistory, Link} from 'react-router';
import toastr from 'toastr';


const imgsty = {
  marginRight: '425px',
  float: 'right',
  maxWidth: '11%',
  maxHeight: '11%'
};

const text = {
  fontFamily: 'Arial, Cursive, sans-serif',
  color: 'black',
  fontSize: '18px'
};


const header = {
  font: '70px Arial',
  fontFamily: 'cursive',
  marginLeft: '450px',
  color: '2B2B2B',
  fontStyle: 'oblique',
  fontWeight: 'bolder'
};

const header1 = {
  font: '30px Arial',
  fontFamily: 'cursive',
  textAlign: 'center',
  fontStyle: 'oblique',
  fontWeight: 'bolder',
  color: 'white',
  paddingBottom: '100px'
};
  
const form_loginpage = {
  borderRadius: '20px',
  position: 'relative',
  zIndex: '1',
  background: '#FFFAFA',
  maxWidth: '360px',
  padding: '45px',
  textAlign: 'center',
  marginTop: '50px',
  marginRight: '125px',
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
  fontFamily: '"Roboto", sans-serif',
  outline: '0px',
  width: '100%',
  border: '0px',
  boxSizing: 'border-box',
  fontSize: '14px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  transition: 'all 0.3 ease',
  cursor: 'pointer',
  textDecoration: 'none',
  float:'right'
};
  
const form_registerpage = {
  borderRadius: '20px',
  position: 'relative',
  zIndex: '1',
  background: '#FFFAFA',
  maxWidth: '360px',
  marginTop: '50px',
  marginLeft: '125px',
  marginBottom: '70px',
  padding: '45px',
  textAlign: 'center',
  boxShadow: '0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
  fontFamily: '"Roboto", sans-serif',
  outline: '0px',
  width: '100%',
  border: '0px',
  boxSizing: 'border-box',
  fontSize: '14px',
  textTransform: 'uppercase',
  color: '#FFFFFF',
  transition: 'all 0.3 ease',
  cursor: 'pointer',
  textDecoration: 'none'
};

const input = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: 'black',
  outline: '0px',
  background: '#f2f2f2',
  width: '100%',
  border: '0px',
  margin: '0px 0px 15px',
  padding: '15px',
  boxSizing: 'border-box',
  fontSize: '14px'
};

const button = {
  fontFamily: 'Arial, Helvetica, sans-serif',
  borderRadius: '10px',
  outline: '0px',
  background: '#4169E1',
  width: '100%',
  border: '0px',
  padding: '15px',
  color: '#FFFFFF',
  fontSize: '18px',
  transition: 'all 0.3 ease',
  cursor: 'pointer'
};

const message = {
  margin: '15px 0px 0px',
  fontSize: '12px',
  color: '#4CAF50',
  textDecoration: 'none'
};

  
const body = {
  background: 'linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33))',
  fontFamily: 'sans-serif',
  width: '100%',
  height: '100%',
  margin: 'auto'
};

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
    this.onNewnameChange = this.onNewnameChange.bind(this);
    this.onNewpasswordChange = this.onNewpasswordChange.bind(this);
    this.onCnewpasswordChange = this.onCnewpasswordChange.bind(this);
    this.onRegisterClick = this.onRegisterClick.bind(this);
  }

  onUsernameChange(event) {
    this.props.actions.usernameChanged(event.target.value);
  }

  onNewnameChange(event) {
    this.props.actions.n_usernameChanged(event.target.value);
  }

  onPasswordChange(event) {
    this.props.actions.passwordChanged(event.target.value);
  }

  onNewpasswordChange(event) {
    this.props.actions.n_passwordChanged(event.target.value);
  }

  onCnewpasswordChange(event) {
    this.props.actions.c_passwordChanged(event.target.value);
  }

  onLoginClick(event) {
    event.preventDefault();
    const { auth } = this.props;
    const login_user = {
      username: auth.username,
      password: auth.password
    };

    this.props.actions.loginUser(login_user)
    .then(() => {
      this.redirectToForum();
      toastr.success(`${login_user.username} logged in!`);
    })
    .catch(error => {
      toastr.error(error);
    });
  }

  onRegisterClick(event) {
    event.preventDefault();

      const {auth} = this.props;
      let new_user = {
        n_username: auth.n_username,
        n_password: auth.n_password,
        c_password: auth.c_password,
        loggedIn: false
      };

    this.props.actions.registerUser(new_user)
    .then(() => {
      toastr.success(`${new_user.n_username} registered!`);
    })
    .catch(error => {
      toastr.error(error);
    });
  }

  
  redirectToForum() {
    browserHistory.push('/forum');
  }

  render() {
    return (
    <div style={body}>
      <img style={imgsty} src="http://designclub7.com/wp-content/uploads/2013/09/bulb-s.png"></img>
      <header style={header} >Consilio</header>

      <form style={form_loginpage}>
        <p style={text}>Login</p>
        <input style={input} onChange={this.onUsernameChange} type="text" placeholder="Username"/>
        <input style={input} onChange={this.onPasswordChange} type="password" placeholder="Password"/>
        <button style={button} onClick={this.onLoginClick}>Sign In</button>

      </form>
    
      <form style={form_registerpage}>
        <p style={text}>Register</p>
        <input style={input} onChange={this.onNewnameChange} type="text" placeholder="Name"/>
        <input style={input} onChange={this.onNewpasswordChange} type="password" placeholder="Password"/>
        <input style={input} onChange={this.onCnewpasswordChange} type="password" placeholder="Confirm password"/>
        <button style={button} onClick={this.onRegisterClick}>Create</button>
      </form>

      <header style={header1} >Discover. Collaborate On Designs. Prosper.</header>
    </div>
    );
  }
}

HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);