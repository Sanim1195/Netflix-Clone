import React, { useRef } from 'react';
import './SignUpScreen.css';
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../Firebase';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userRegistrationCredential) => {
                console.log(userRegistrationCredential);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((userSignInCredential) => {
                console.log(userSignInCredential);
            })
            .catch((error) => {
                alert(error.message + "The user was not found. Please check your credentials.");
            });
    };

    return (
        <div className="signUpScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email" />
                <input ref={passwordRef} type="password" placeholder="Password" />
                <button type="submit" onClick={signIn}>
                    Sign In
                </button>
                <h4>
                    <span className="signUpScreen_gray">New to Netflix? </span>
                    <span className="signUpScreen_link" onClick={register}>
                        Sign Up now.
                    </span>
                </h4>
            </form>
        </div>
    );
}

export default SignUpScreen;
