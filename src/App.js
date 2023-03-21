import React from 'react';
import './App.css';
import styled from "styled-components";

import { Auth0Provider } from "@auth0/auth0-react";
import Profile from './components/Profile';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 31px;
`;

function App() {
  return (
    <AppContainer>
      <Auth0Provider
        domain="dev-eytums7hq36kotja.us.auth0.com"
        clientId="pgsMZdgodXen69jJvbqY7evYvz6TLrGZ"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        Hello World!<br />
        <Profile /><br />
      </Auth0Provider>
    </AppContainer>
  );
}

export default App;
