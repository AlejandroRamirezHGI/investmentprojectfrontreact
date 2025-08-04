import { useState } from 'react';
import './App.css';
import Login from './components/loginForm';
import Sidebar from './components/CRM/sideBar';
import Topbar from './components/CRM/topBar';
import Dashboard from './components/CRM/dashBoard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <>
      {!isAuthenticated ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
          <div style={{ display: 'flex', height: '100vh', backgroundColor: '#f5f6fa' }}>
          <Sidebar />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <Topbar />
            <div style={{ flex: 1, padding: '1rem', overflowY: 'auto' }}>
              <Dashboard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
