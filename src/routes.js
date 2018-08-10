import React from 'react';
import { Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default
import ForumPage from './components/forum/ForumPage';
import PrivateDiscussion from './components/privatediscussion/PrivateDiscussion';
import ProfilePage from './components/profile/ProfilePage';

export const generateRoutes = (store) => {
  const checkAuth = (nextState, replaceState) => {
    const state = store.getState();
    if (!state.auth.loggedIn) {
      browserHistory.push('/');
    }
  };
  return (
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="courses" component={CoursesPage} />
      <Route path="course" component={ManageCoursePage} />
      <Route path="course/:id" component={ManageCoursePage} />
      
      <Route path="home" component={HomePage} />
      <Route path="forum" component={ForumPage} onEnter={checkAuth} />
      <Route path="privatediscussion" component={PrivateDiscussion} onEnter={checkAuth} />
      <Route path="profile" component={ProfilePage} onEnter={checkAuth} />
    </Route>
  );
};
