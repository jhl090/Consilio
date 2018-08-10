import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginActions from '../../actions/auth';
import * as messageActions from '../../actions/message';
import * as todoActions from '../../actions/todos';
import Header from '../common/Header';
import Todos from './Todos';
import Messages from './Messages';
import toastr from 'toastr';

const body = {
    margin: '0px auto',
    fontFamily: 'Arial'
};

const chat = {
    listStyleType: 'none',
    fontStyle: 'italic', 
    fontFamily: 'Georgia, Times, serif', 
    fontSize: '22px', 
    marginRight: '25px',
    color: '#000'
};

const chatli = {
    boxShadow: '0px 0px 10px 0 rgba(0, 0, 0, 0.2), 0px 5px 5px 0px rgba(0, 0, 0, 0.24)',
    borderRadius: '10px',
    background: '#67C8FF'
};

const chatp = {
    padding: '8px', 
    fontStyle: 'normal', 
    fontFamily: 'Arial', 
    fontSize: '15px', 
    color: '#FFF'
};

const form_button = {
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

const form = {
    marginBottom: '50px',
    maxWidth: '100%',
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '18px'
};

const form_name = {
    textAlign: 'center',
    fontFamily: 'American Typewriter',
    fontSize: '24px;',
    fontWeight: 'oblique'
};

const ol = {
    fontStyle: 'italic', 
    fontFamily: 'Georgia, Times, serif',
    fontSize: '24px', 
    color: '#1E1E1E'  
};

const tasks = {
    fontFamily: 'American Typewriter',
    listStyleType: 'circle',
    position: 'relative',
    textAlign: 'center',
    margin: '0px auto'
};

const todo = {
    position: 'relative',
    fontSize: '18px',
    fontFamily: 'American Typewriter',
    //width: '100%',
    padding: '15px'
};

const todo_title = {
    fontWeight: 'bolder',
    fontSize: '24px',
    position: 'relative',
    top: '0px',
    fontFamily: 'American Typewriter'
};

const topnav = {
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.2), 0px 5px 5px 0px rgba(0, 0, 0, 0.24)',
    overflow: 'hidden',
    marginBottom: '15px',
    textAlign: 'center',
    background: 'linear-gradient(to right, #4b6cb7, #182848)',
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

const input1 =  {
    paddingBottom: '100px',
    minWidth: '75%'
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
    padding: '0px 20px', 
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

const messageHeader = {
  fontWeight: 'bolder',
  fontSize: '24px',
  position: 'relative',
  top: '0px',
  fontFamily: 'American Typewriter'
};

class PrivateDiscussion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTodo: '',
      currentMessage: ''
    };

    this.onTodoTextChange = this.onTodoTextChange.bind(this);
    this.onMessageTextChange = this.onMessageTextChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    if (this.props.auth.loggedIn == false) {
      browserHistory.push('/');
    }
    this.props.actions.loadTodos();
    this.props.actions.loadMessages();
  }
   
  onTodoTextChange(event) {
    this.setState({currentTodo: event.target.value});
  }

  onMessageTextChange(event) {
    this.setState({currentMessage: event.target.value});
  }

  removeTodo(todoId) {
    this.props.actions.removeTodo(todoId);
  }

  addTodo(e) {
    e.preventDefault();
    let shortid = require('shortid');
    let newTodo = {content: this.state.currentTodo, id: shortid.generate()};
    this.props.actions.createTodo(newTodo)
      .then(() => toastr.success('Todo Added!'))
      .catch(error => {
        toastr.error(error);
      });
  }

  sendMessage(e) {
    const {auth} = this.props;
    e.preventDefault();
    let shortid = require('shortid');
    let newMessage = {content: this.state.currentMessage, sender:auth.username, id: shortid.generate()};
    this.props.actions.sendMessage(newMessage)
      .then(() => toastr.success('Message sent!'))
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const {todos, messages} = this.props;
    return (
    <div style={body}>

        <Header/>
        <div style={topnav}>
          <a style={topnav_a}><i>Private Discussion</i></a>
        </div>

        <form className="form-inline" style={todo} onSubmit={this.addTodo}>
          <label>Add Item Todo: </label>
          <input  onChange={this.onTodoTextChange} type="text" placeholder="Task..."></input>
          <button type="submit" style={form_button} className="btn btn-primary">Add</button>
        </form>


          <p style={todo_title}>To Do Checklist:</p>
          <Todos todos={todos} removeTodo={this.removeTodo} />

        <form className="form-inline" style={form} onSubmit={this.sendMessage}>
          <input onChange={this.onMessageTextChange} style={input1} type="text" placeholder="I'd like to know about..."></input>
          <button type="submit" style={form_button} className="btn btn-primary">Send</button>
        </form>
        <br/>
        <p style={messageHeader}>Messages</p>
        <Messages messages={messages}/>
    </div>
    );
  }
}

PrivateDiscussion.propTypes = {
  auth: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    auth: state.auth,
    messages: state.messages,
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, loginActions, messageActions, todoActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PrivateDiscussion);
 
