// import React, {PropTypes} from 'react';
// import {connect, Link } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {browserHistory} from 'react-router';
// import * as loginActions from '../../actions/loginActions';



// class LoginPage extends React.Component {
//   constructor(props, context) {
//     super(props, context);
//     this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
//   }

//   render() {
//     return (
//       <div className="jumbotron">
//         <h1>Pluralsight Login</h1>
//         <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
//         <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
//       </div>
//     );
//   }
// }
// LoginPage.propTypes = {
//   courses: PropTypes.array.isRequired,
//   actions: PropTypes.object.isRequired
// };

// function mapStateToProps(state, ownProps) {
//   return {
//     username: state.username,
//     password: state.password
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(loginActions, dispatch)
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


