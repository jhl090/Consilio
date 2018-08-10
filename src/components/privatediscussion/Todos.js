import React, {PropTypes, Component} from 'react';

const olip = {
  padding: '8px', 
  fontStyle: 'normal', 
  fontFamily: 'Arial', 
  fontSize: '16px', 
  color: '#1E1E1E', 
  borderLeft: '1px solid #999'
};

const em = {
  display: 'block'
};

const red_border = {
  color: 'black',
  fontFamily: 'American Typewriter',
  border: '2px solid #F00',
  marginLeft: '10px'
};
const ol = {
  fontStyle: 'italic', 
  fontFamily: 'Georgia, Times, serif',
  fontSize: '24px', 
  color: '#1E1E1E'  
};

export default class Todos extends Component {

  constructor(props) {
    super(props);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(todoId) {
    console.log(todoId);
    this.props.removeTodo(todoId);
  }

  render() {
    return(
      <ol style={ol}>
        {this.props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p style={olip}><em style={em}>{todo.content}
              <button onClick={() =>this.removeTodo(todo.id)} style={red_border} type="button" className="btn btn-default btn-sm">Remove</button></em>
              </p>
          </li>
          );
        })}
      </ol>
    );
  }
}
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  removeTodo: React.PropTypes.func.isRequired
};

