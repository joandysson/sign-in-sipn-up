import React, { useEffect } from 'react';
import SignIn from 'components/Sign-up';
import SignUp from 'components/Sign-in';
import SocialMedia from 'components/Social-media';
import { useHistory } from 'react-router-dom';
import { verifyAuth } from 'auth/auth';
import 'assets/css/global.css'
import 'assets/css/style.css'

export default function Auth() {
    const history = useHistory();

    useEffect(() => {
        async function loadAuth() {
            if(document.location.pathname === '/sign-up') {
                document.body.className = 'sign-up';
                document.title = 'Sign up';
                return
            }

            if(['/sign-in', '/'].includes(document.location.pathname)) {
                document.body.className = 'sign-in';
                document.title = 'Sign in';

                if(await verifyAuth()) {
                    return history.push('/dashboard');
                }
                return
            }

            // return history.push('/dashboard');
        }
        loadAuth();
    }, []);

    return (
        <div className="container">
            <SignIn SocialMedia={SocialMedia} />
            <SignUp SocialMedia={SocialMedia} />
        </div>
    )
}