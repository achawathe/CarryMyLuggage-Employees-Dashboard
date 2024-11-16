import React from 'react';
import Home from './assets/Home';
import Login from './assets/Login';
import Signup from './assets/Signup';
import Locations from './assets/Locations';
import Cart from './assets/Cart';
import Dashboard from './assets/Dashboard';
import ScheduleCart from './assets/ScheduleCart';
//import ConnectROS from './components/ui/ConnectROS'
import './App.css';

// function App() {
//   return (
//       <Home/>
//   )
// }


import DropMyMenu from './components/ui/dropMyMenu';

export default function App() {
  // This function will determine which page to render based on the current URL
  const renderPage = () => {
    const path = window.location.pathname;

    switch (path) {
      case '/':
        return <Home />;
      case '/Login':
        return <Login />;
      case '/Signup':
        return <Signup />;
      case '/Dashboard':
        return (
          <>
            <DropMyMenu />
            <Dashboard />
          </>
        );
      case '/ScheduleCart':
        return (
          <>
            <DropMyMenu />
            <ScheduleCart />
          </>
        );
      case '/Home':
        return <Home />;
      case '/Cart':
        return (
          <>
            <DropMyMenu />
            <Cart />
          </>
        );
      case '/Locations':
        return (
          <>
            <DropMyMenu />
            <Locations />
          </>
        );
      
      default:
        return <div>404 - Page Not Found</div>;
    }
  };

  return (
    <div className="app">
      {renderPage()}
    </div>
  );
}

// export default App
