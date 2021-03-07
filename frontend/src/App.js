import Header from "./components/Header/Header";
import Form from "./components/Create-Form/Form";
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";

import Main from "./components/main";
// import { BrowserRouter, Route, Routes } from "react-router-dom";

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
    // <BrowserRouter>
    //   <Header />

    //   <Routes>
    //     <Route path="/"  element={<Form />}/>
    //   </Routes>
    // </BrowserRouter>
  );
}
