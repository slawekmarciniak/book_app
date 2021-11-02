import Header from "./components/Header";
import BookList from "./components/BooksList/BookList";
import AddBook from "./components/AddBook";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add_book">
            <AddBook />
          </Route>
          <Route exact path="/">
            <BookList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
