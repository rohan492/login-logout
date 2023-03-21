import React from 'react';
import styled from 'styled-components';

import { useAuth0 } from "@auth0/auth0-react";

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 31px;
`;


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
  
    const loggedInDate = sessionStorage.getItem("dayLoggedIn");
    const loggedInTime = sessionStorage.getItem("clockLoggedIn");

    // sessionStorage.removeItem("dayLoggedIn");
  
    var date = new Date();
    const dayLoggedOut = date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
    const clockLoggedOut = date.toLocaleTimeString('en-US');
  
  
    return (
      <AppContainer>
          <Button onClick={() => loginWithRedirect()}>Log In</Button>
          {loggedInDate  && (
              <>
                  <AppContainer>
                      Date of User Log In : {loggedInDate}<br />
                      Time of User Log In : {loggedInTime}
                  </AppContainer>
                  <AppContainer>
                      Date of User Log Out : {dayLoggedOut}<br />
                      Time of User Log Out : {clockLoggedOut}
                  </AppContainer>
              </>
          )}
          
          
      </AppContainer>
    );
};

const LogoutButton = ({ userName }) => {
    const { logout } = useAuth0();

    var date = new Date();
    const dayLoggedIn = date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' });
    const clockLoggedIn = date.toLocaleTimeString('en-US');

    sessionStorage.setItem("dayLoggedIn", dayLoggedIn);
    sessionStorage.setItem("clockLoggedIn", clockLoggedIn);

  
    return (
        <AppContainer>
            Welcome, {userName}
            <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
            </Button>
        </AppContainer>
    );
};

const Profile = () => {
    const { isAuthenticated, user } = useAuth0();

    return (
        <div>
            {
                isAuthenticated ? <LogoutButton userName={user.name}  /> : <LoginButton />
            }
        </div>
    )
}

export default Profile;