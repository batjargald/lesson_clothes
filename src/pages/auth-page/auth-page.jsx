import React from 'react';

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

import "./auth-page.styles.scss";

const AuthPage = () => {
    return (
        <div className="sign-in-signout-pages">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default AuthPage;