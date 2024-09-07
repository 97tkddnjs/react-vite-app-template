import React, { useState } from 'react';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '../../store/auth/authAction';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

 

const Auth = ({ isAuthenticated, user, loginRequest, logoutRequest }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const handleLogin = () => {
    console.log('login button clicked', username, password)
    loginRequest(username, password);
    console.log('user is authenticated 3', isAuthenticated)
  };

 

  const handleLogout = () => {
    logoutRequest();
  };

  useEffect(()=>{
    console.log('user is authenticated 1111', isAuthenticated)
    if(isAuthenticated) {
      console.log('user is authenticated22222', isAuthenticated)
      navigate('/')
    }
  }, [isAuthenticated])

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

  isAuthenticated: state.auth.isAuthenticated,

  user: state.auth.user

});

 

const mapDispatchToProps = {

  loginRequest,

  logoutRequest

};

 

export default connect(mapStateToProps, mapDispatchToProps)(Auth);