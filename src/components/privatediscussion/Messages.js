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
const ul = {
  fontStyle: 'italic', 
  fontFamily: 'Georgia, Times, serif',
  fontSize: '24px', 
  color: '#1E1E1E',
  listStyleType: 'none'
};

const messageHeader = {
  fontWeight: 'bolder',
  fontSize: '24px',
  position: 'relative',
  top: '0px',
  fontFamily: 'American Typewriter'
};

const h2 = {
  display: 'inline'
};

export default class Messages extends Component {

  render() {
    return(
      <ul style={ul}>
        {this.props.messages.map((message) => {
          return (
            <li key={message.id}>
              <h2 style={h2}>Sender:</h2> {message.sender}
              <p style={olip}><em style={em}>{message.content}</em>
              </p>
          </li>
          );
        })}
      </ul>
    );
  }
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired
};

