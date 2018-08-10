import delay from './delay';

let users = [
  {
    username: 'moizqureshi',
    password: 'triton1',
    loading: false,
    loggedIn: false,
    error: ''
  },
  {
    username: 'mustafa',
    password: 'triton3',
    loading: false,
    loggedIn: false,
    error: ''
  },
  {
    username: 'jlee',
    password: 'triton2',
    loading: false,
    loggedIn: false,
    error: ''
  },
  {
    username: 'demo',
    password: 'demo',
    loading: false,
    loggedIn: false,
    error: ''
  }
];

class AuthApi {
  
  static loginUserApi(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const idx = users.findIndex(u => u.username == user.username);
        if (idx > -1) {
          if (users[idx].password == user.password) {
            users[idx].loading = false;
            users[idx].loggedIn = true;
          } else {
            reject(`Incorrect Password!`);
          }
        } else {
          reject(`Username ${user.username} does not exist!`);
        }
        resolve(users[idx]);
      }, delay);
    });
  }

  static logoutUserApi(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const idx = users.findIndex(u => u.username == user.username);
        users[idx].loading = false;
        users[idx].loggedIn = false; 
        resolve(users[idx]);
      }, delay);
    });
  }

  static registerUserApi(user) {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        let new_user = user.n_username;
        let new_pw = user.n_password;
        let new_cpw = user.c_password; 
        if (new_user.length < 1 || new_pw.length < 1 || new_cpw.length < 1) {
          reject('Must fill all registration fields');
        }
        const idx = users.findIndex(u => u.username == user.n_username);
        if (idx != -1) {reject('Username already exists'); return;}
        if (user.n_password != user.c_password) { reject('Passwords do not match'); return; }
        user.loggedIn = true;
        users.push({username: user.n_username, password: user.n_password, loading: false, loggedIn: true, error:''});
        console.log(users);

        resolve(user);
      }, delay);
    });
  }

  static changePasswordApi(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let old_pw = user.password;
        let new_pw = user.n_password;
        let new_cpw = user.c_password;
        if (new_pw != new_cpw) { reject('Passwords do not match!'); return; }

        if (new_pw < 1 || new_cpw < 1) { reject('Must fill all password fields'); return; }
        const idx = users.findIndex(u => u.username == user.username);
        if (idx == -1 || users[idx].password != old_pw) { reject('Invalid username or password'); return; }
        users[idx].password = new_pw;
        resolve(users[idx]);
        console.log(users[idx].password);
        return;
      }, delay);
    });
  }
}


export default AuthApi;
