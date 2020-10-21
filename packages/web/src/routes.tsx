import React, { FC, useEffect, useState } from 'react';
import { Switch, Route,  BrowserRouter as Router, Redirect, RouteProps } from 'react-router-dom';
import { verifyAuth } from './auth/auth';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';

export default function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Auth}/>
                <Route path="/sign-in" component={Auth}/>
                <Route path="/sign-up" component={Auth} />
                <PrivateRoute path="/dashboard" component={Dashboard}>
                    <Dashboard />
                </PrivateRoute>
            </Switch>
        </Router>
    )
}

const PrivateRoute:FC<RouteProps> = ({path, component, children, ...rest }) => {

    const [auth, setAuth] = useState(true);

    useEffect(() => {
        verifyAuth().then(response =>{
            setAuth(response ? true: false);
        });
    })

    return (
        <Route
          {...rest}
          render={({ location }) =>
            auth ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/sign-in",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}