import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/śmierć" exact component={Services} />
          <Route path="/pamięć" exact component={Products} />
          <Route path="/zbrodnie" exact component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

// http://www.matematyka.wroc.pl/konkursy/europejska-olimpiada-matematyczna-dla-dziewczat-emgo
