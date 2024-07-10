import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '../../store/auth/authAction';

 

const Auth = ({ isAuthenticated, user, loginRequest, logoutRequest }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    loginRequest(username, password);
  };

 

  const handleLogout = () => {
    logoutRequest();
  };

 

  return (

    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome, {user.username}</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>

      ) : (

        <div>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>

      )}

    </div>

  );

};

 

const mapStateToProps = (state) => ({

  isAuthenticated: state.isAuthenticated,

  user: state.user

});

 

const mapDispatchToProps = {

  loginRequest,

  logoutRequest

};

 

export default connect(mapStateToProps, mapDispatchToProps)(Auth);