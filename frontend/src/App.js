import Header from "./components/Header/Header";
import Form from "./components/Create-Form/Form";
import Main from "./components/main";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";

export default function App() {
  return (
    <Router>

        <Header />

        <Switch>

          <Route path="/users">
            <Main />
          </Route>

          <Route path="/create">
            <Form />
          </Route>
          
        </Switch>
    </Router>
  );
}
