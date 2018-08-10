import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as forumActions from '../../actions/forum';
import * as loginActions from '../../actions/auth';
import {Link, browserHistory} from 'react-router';
import Header from '../common/Header';
import ForumPost from './ForumPost';
import toastr from 'toastr';

const body = {
    margin: '0 auto',
    fontFamily: 'Arial'
};

const form = {
    marginBottom: '50px',
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '18px'
};

const input = {
    minWidth: '250px'
 };
 
const input1 =  {
    paddingBottom: '100px',
    minWidth: '75%'
 };

const title = {
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '24px'
};

const topnav = {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
    overflow: 'hidden',
    marginBottom: '15px',
    textAlign: 'center',
    background: 'linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)',
    borderRadius: '5px'
};

const topnav_a = {
    float: 'left',
    display: 'block',
    color: 'white',
    padding: '14px 16px',
    textDecoration: 'none',
    font: '25px American Typewriter, sans'
};

const ol = {
    fontStyle: 'italic', 
    fontFamily: 'Georgia, Times, serif', 
    fontSize: '22px', 
    color: '#000'
};

const oli = {
    boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)',
    borderRadius: '10px',
    background: '#67C8FF'
};

const olip = {
    padding: '8px', 
    fontStyle: 'normal', 
    fontFamily: 'Arial', 
    fontSize: '15px', 
    color: '#FFF'
};

const em = {
    display: 'block'
};

const postButt = {
    position: 'relative',
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '24px',
    marginTop: '20px',
    marginLeft: '20px',
    backgroundColor: '#E9E9E9', 
    borderRadius: '5px',
    color: 'black', 
    border: '2px solid #008CBA'
};

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

class ForumPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: ''
    };
    this.onPostTextChange = this.onPostTextChange.bind(this);
    this.postSubmit = this.postSubmit.bind(this);
  }



  componentWillMount() {
    const {auth} = this.props;
    this.props.actions.loadPosts();
    if (auth.loggedIn == false) {
      browserHistory.push('/');
    }
  }

  onPostTextChange(event) {
    this.setState({currentPost: event.target.value});
  }

  postSubmit(event) {
    event.preventDefault();
    let shortid = require('shortid');
    let newPost = {content: this.state.currentPost, id: shortid.generate()};
    this.props.actions.createPost(newPost)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
      });
  }

  redirect() {
    toastr.success('Forum Post Saved');
    browserHistory.push('/forum');
  }

  render() {
    const {forum} = this.props;
    return (
    <div style={body}>
  
    <Header/>
      <div style={topnav}>
        <a style={topnav_a}>Bob Ross, welcome to <i>Home Forum</i></a>
      </div>
    
      <form style={form} className="form-inline" onSubmit={this.postSubmit}>
        <input onChange={this.onPostTextChange} style={input1} type="text" placeholder="I'd like to collaborate on the following project..."/>
        <button type="submit" style={postButt} className="btn btn-primary">Post</button>
      </form>
    
      <ForumPost posts={forum}/>
    </div>
    );
  }
}

ForumPage.propTypes = {
  actions: PropTypes.object.isRequired,
  forum: PropTypes.array.isRequired,
  auth: PropTypes.object.isRequired
};
  
function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    forum: state.forum
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, loginActions, forumActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ForumPage);

