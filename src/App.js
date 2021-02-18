import React from "react";
import FormPage from "./pages/FormPage";
import MyFormPage from "./pages/MyFormPage";
import { DialogPage } from "./pages/DialogPage";
import ReduxPage from "./pages/ReduxPage";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  // useHistory,
  // useLocation,
  // useRouteMatch,
  // useParams,
  // withRouter
} from "./custom-react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">FormPage</Link>
        <Link to="/MyFormPage">MyFormPage</Link>
        <Link to="/DialogPage">DialogPage</Link>
        <Link to="/ReduxPage">ReduxPage</Link>

        <Switch>
          <Route
            exact
            path="/"
            // children={() => <h1>children</h1>}
            component={FormPage}
            // render={() => <h1>render</h1>}
          />

          {/* <PrivateRoute path="/user" component={UserPage} /> */}
          {/* <Route path="/user" component={UserPage}>
            {/* <div>userpage</div> */}
          {/* </Route> */}
          <Route path="/MyFormPage" component={MyFormPage} />
          <Route path="/DialogPage" render={() => <DialogPage />} />
          <Route path="/ReduxPage" component={ReduxPage} />
        </Switch>
      </Router>
      {/* <FormPage /> */}
      {/* <MyFormPage /> */}
      {/* <DialogPage /> */}
      {/* <Tree /> */}
      {/* <ReduxPage /> */}
    </div>
  );
}

export default App;
