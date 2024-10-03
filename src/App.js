// App.js
import React, { useState } from 'react';
import Auth from './Components/Auth';
import TodoList from './Components/TodoList';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      {!isAuthenticated ? (
        <Auth onLogin={() => setIsAuthenticated(true)}  />
      ) : (
        <TodoList onLogout={() => setIsAuthenticated(false)}  />
      )}
    </div>
  );
};

export default App;
