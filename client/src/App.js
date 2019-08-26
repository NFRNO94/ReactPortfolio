import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import { createGlobalStyle } from "styled-components";
import './App.css';

const AppStyle = createGlobalStyle`
body, html {
  width: 100%;
  height: 100%;
}
`;

function App() {
  return (
    <React.Fragment>
      <AppStyle />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path='/resume' component={Resume} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

// export default withRouter(App);
export default App;
