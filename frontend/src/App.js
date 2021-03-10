import Header from "./components/Header/Header";
import Form from "./components/Create-Form/Form";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import UsersTable from "./components/Users/UsersTable";
import EditUser from "./components/Edit-User/EditUser";

export default function App() {
  return (
    <Router>
        <Header />

        <Switch>

          <Route path="/users">
            <UsersTable />
          </Route>

          <Route path="/create">
            <Form />
          </Route>

          <Route path="/edit">
            <EditUser />
          </Route>
          
        </Switch>
    </Router>
  );
}
