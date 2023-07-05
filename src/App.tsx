import React from 'react';
import LoginPage from './pages/login';
import DashboardPage from './pages/dashboard';
import { Routes, Route } from 'react-router-dom';
function App() {
    return(
      <Routes>
      <Route path='/' element={<LoginPage/>}></Route>
      <Route path='/Dashboard' element={<DashboardPage profilePicUrl={''} onLogout={function (): void {
          throw new Error('Function not implemented.');
        } } children={undefined}/>}></Route>
    </Routes>
    );
}

export default App;
