import React, { useEffect } from 'react';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './Firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/counter/userSlice';
import './App.css';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // will only run once when the app component loads...
    // onAuthStateChanged is a listener that listens to any changes in the authentication state
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        // the user is logged in
        console.log(userAuth + " is logged in");
        // dispatching the login action to the redux store to update the user state
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }));

      }
      else {
        // the user is logged out
        console.log(userAuth + " is logged out");
        dispatch(logout);
      }
    });
    return unsubscribe;
  },[]);


  return (
    <div className="app">
      <Router>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
            </Routes>
          )
        }
      </Router>
    </div>
  );
}

export default App;
