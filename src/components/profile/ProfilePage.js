import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link, browserHistory} from 'react-router';
import * as profileActions from '../../actions/profileActions';
import Header from '../common/Header';
import toastr from 'toastr';


const ross = {
  width: '150px',
  height: '150px',
  borderRadius: '100%',
  overflow: 'hidden',
  position: 'relative',
  left: '18%'
  
};

const body = {
  fontFamily: 'Arial',
  height: '1000px'
};

const ul = {
  listStyleType: 'none', 
  textAlign: 'center', 
  borderTop: '3px solid #EEE', 
  borderBottom: '3px solid #EEE',
  padding: '20px 0px',
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
  /*display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  font: '18px American Typewriter, serif'*/

  textDecoration: 'none', 
  color: '#EEE'
};

const userDisplay = {
  position: 'relative',
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  font: '18px American Typewriter, serif',
  float: 'right'
};

const work1 = {
  width: '200px',
  height: '125px',
  overflow: 'hidden',
  position: 'relative',
  top: '10px',
  left: '55%',
  maxWidth: '100%'
};


const top = {
  backgroundColor: 'maroon',
    width: '100%',
    overflow: 'hide',
    borderLeft: '6px solid green',
    borderRight: '6px solid green',
    height: '100%',
    left: '50%',
    top: '45px',
    backgroundHeight: '100%'
};

 const vertical_line = {
    borderLeft: '6px solid green',
    height: '1000px',
    position: 'absolute',
    left: '50%',
    top: '72px' 
};

const p = {
  width: '450px',
  height: '100%',
  position: 'relative',
  top: '0px',
  left: '6%',
  fontSize: '20px',
  fontFamily: '"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif',
  textAlign: 'center'

};

const password = {
  height: '100%',
  position: 'absolute',
  top: '225px',
  left: '55%',
  fontSize: '20px',
  fontFamily: '"Big Caslon", "Book Antiqua", "Palatino Linotype", Georgia, serif'
};

const text = {
  backgroundColor: '#F5F5DC',
  padding: '10px'
};


const li = {
    float: 'left',
    display: 'block',
    color: 'white',
    textAlign: 'center',
    padding: '14px 16px',
    textDecoration: 'none',
    font: '18px American Typewriter, serif',
    backgroundColor: '#111'
 };

const a = {
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '14px 16px',
  textDecoration: 'none',
  font: '18px American Typewriter, serif'
};


class ProfilePage extends React.Component {
  constructor(props,context) {
    super(props, context);

    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNewpasswordChange = this.onNewpasswordChange.bind(this);
    this.onCnewpasswordChange = this.onCnewpasswordChange.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);   
  }
  componentWillMount() {
    if (this.props.auth.loggedIn == false) {
      browserHistory.push('/');
    }
  }

  onUsernameChange(event) {
    this.setState({username: event.target.value});
    this.props.actions.usernameChanged(event.target.value);
  }

  onPasswordChange(event) {
    this.setState({password: event.target.value});
    this.props.actions.passwordChanged(event.target.value);
  }

  onNewpasswordChange(event) {
    this.setState({n_password: event.target.value});
    this.props.actions.n_passwordChanged(event.target.value);
  }

  onCnewpasswordChange(event) {
    this.setState({c_password: event.target.value});
    this.props.actions.c_passwordChanged(event.target.value);
  }

  onSubmitPassword(event) {
    event.preventDefault();
    const user_login = {
      username: this.state.username,
      password: this.state.password,
      n_password: this.state.n_password,
      c_password: this.state.c_password
    };

    this.props.actions.changePassword(user_login)
    .then(() => {
      toastr.success('Password Updated!');
    })
    .catch(error => {
      toastr.error(error);
    });
  }

  render() {
    return (

    <div style={body}>

        <Header/>
        <div style={top}>
          <img style={ross} src="https://yt3.ggpht.com/a-/AK162_5hhPkw95p_d-kWCaNYd6pk9JJk1MPIR-b3SQ=s900-mo-c-c0xffffffff-rj-k-no" alt="https://i.pinimg.com/originals/a7/3a/3c/a73a3c4ab7f76ad7fc47b32e5e8b7efc.jpg"/>
          <img style={work1} src="https://usatunofficial.files.wordpress.com/2012/07/bob_ross_csg024_autumn_glory.jpg" alt="https://i.pinimg.com/originals/a7/3a/3c/a73a3c4ab7f76ad7fc47b32e5e8b7efc.jpg"/>

          <div style={vertical_line}></div>
          <div style={text}><p style={p}>Bob Ross<br/><br/>Daytona Beach, FL<br/><br/>You have unlimited power. You have the ability to move mountains. You can bend rivers. Look around. Look at what we have. Beauty is everywhere—you only have to look to see it. We don't make mistakes, only happy accidents.</p></div>
            
          <form style={password}>
            Username: <br/>
            <input type="text" onChange={this.onUsernameChange}/><br/>
            Old Password:<br/>
            <input type="password" onChange={this.onPasswordChange}/><br/>
                New Password:<br/>
                <input type="password" onChange={this.onNewpasswordChange}/><br/>
                Re-enter New Password:<br/>
                <input type="password" onChange={this.onCnewpasswordChange}/><br/>
                <button type="button" onClick={this.onSubmitPassword}>Submit</button>
            </form>
        </div>
    </div>
    );
  }
}

ProfilePage.propTypes = {
  auth: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

ProfilePage.contextTypes = {
  router: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(profileActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);