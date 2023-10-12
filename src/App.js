import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav";
import Footer from "./components/footer";
import TodoList from "./components/TodoList";
import ButterToast, { POS_RIGHT , POS_TOP } from "butter-toast";

function App() {
  return (
    <Router>
      <div
        className="App"
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          height: "100%",
        }}
      >
        <Nav />
        <Switch>
          <Route path="/" component={TodoList}></Route>
        </Switch>
        <ButterToast position={{ vertical: POS_TOP , horizontal: POS_RIGHT }} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
