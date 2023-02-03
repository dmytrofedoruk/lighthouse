import React from 'react';
import SignInPage from "./signin";
import {useAuth} from "../util/use-auth";
import Dashboard from "./dashboard";

const homePage = () => {
  const {authUser} = useAuth();

  return authUser ? <Dashboard/> : <SignInPage/>;
}

export default homePage;
