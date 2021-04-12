import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const TheLayout = React.lazy(() => import("../containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("../views/auth/login/Login"));
const Register = React.lazy(() => import("../views/auth/register/Register"));
const Page404 = React.lazy(() => import("../views/page404/Page404"));
const Page500 = React.lazy(() => import("../views/page500/Page500"));
const ForgotPassword = React.lazy(() =>
  import("../views/auth/forgotPassword/ForgotPassword")
);

const PublicRoute = () => (
  <Router>
    <React.Suspense fallback={loading}>
      <Switch>
        <Route
          exact
          path="/"
          name="Login"
          render={(props) => <Login {...props} />}
        />
        <Route
          exact
          path="/forgot-password"
          name="Forgot Password Page"
          render={(props) => <ForgotPassword {...props} />}
        />

        <Route
          exact
          path="/register"
          name="Register Page"
          render={(props) => <Register {...props} />}
        />
        <Route
          exact
          path="/404"
          name="Page 404"
          render={(props) => <Page404 {...props} />}
        />
        <Route
          exact
          path="/500"
          name="Page 500"
          render={(props) => <Page500 {...props} />}
        />
        <Route
          path="/"
          name="home"
          render={(props) => <TheLayout {...props} />}
        />
      </Switch>
    </React.Suspense>
  </Router>
);

export default PublicRoute;
