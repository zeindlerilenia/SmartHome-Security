import React, { useState } from 'react';
import LoginPage from './LoginPage';
import HomePage from './HomePage';

export enum AuthState {
  LoggedOut,
  LoggedIn,
}

const App: React.FC = () => {
  const [authState, setAuthState] = useState(AuthState.LoggedOut);

  return (
    <div className="App">
      {authState === AuthState.LoggedOut ? (
        <LoginPage onLogin={setAuthState} />
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default App;
