import React from 'react';

import SignIn from "../../components/sign-in/sign-in";

import "./auth-page.styles.scss";

const AuthPage = () => {
    return (
        <div className="sign-in-signout-pages">
            <SignIn />
        </div>
    );
}

export default AuthPage;