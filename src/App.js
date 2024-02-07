// App.js routing is manage by this here.
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './Pages';
import PagesAccountSettingsAccount from './Pages/PagesAccountSettingsAccount.tsx';
import FormsBasicInputs from './Pages/FormsBasicInputs'
import PagesAccountSettingsNotifications from './Pages/PagesAccountSettingsNotifications.tsx'
import PagesAccountSettingsConnections from './Pages/PagesAccountSettingsConnections.tsx'
import AuthLoginBasic from './Pages/AuthLoginBasic';
import AuthRegisterBasic from './Pages/AuthRegisterBasic';
import AuthForgotPasswordBasic from './Pages/AuthForgotPasswordBasic';
import TablesBasic from './Pages/TablesBasic.tsx';
import UserActions from './Pages/User/UserActions';
import MyProfile from './Pages/MyProfile/MyProfile';
import PageChangePassword from './Pages/MyProfile/PageChangePassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/settings-account" element={<PagesAccountSettingsAccount />} />
        <Route path="/forms-basic-inputs" element={<FormsBasicInputs />} />
        <Route path="/settings-notifications" element={<PagesAccountSettingsNotifications />} />
        <Route path="/settings-connections" element={<PagesAccountSettingsConnections />} />
        <Route path="/login" element={<AuthLoginBasic />} />
        <Route path="/register" element={<AuthRegisterBasic />} />
        <Route path="/forgot-password" element={<AuthForgotPasswordBasic />} />
        <Route path="/tables-basic" element={<TablesBasic />} />
        <Route path="/user-actions" element={<UserActions/>}/>
        <Route path="/my-profile" element={<MyProfile/>}/>
        <Route path="/change-password" element={<PageChangePassword/>}/>
      </Routes>
    </Router>
  );
}

export default App;

