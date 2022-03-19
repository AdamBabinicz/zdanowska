import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import ScrollToTop from "./components/ScrollToTop";
import Scroll from "./components/Scroll";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Scroll />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/śmierć" exact component={Services} />
          <Route path="/pamięć" exact component={Products} />
          <Route path="/zbrodnie" exact component={SignUp} />
        </Switch>
      </Router>
      <CookieConsent
        debug={true}
        location="bottom"
        style={{
          background: "#333",
          textAlign: "left",
          paddingBottom: "1rem",
          fontSize: "16px",
          fontFamily: "Gideon Roman",
        }}
        buttonStyle={{
          color: "#333",
          background: "#fff",
          fontSize: "18px",
          fontFamily: "Gideon Roman",
          marginRight: "1rem",
        }}
        buttonText="OK, rozumiem"
        expires={365}
      >
        "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
        Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
        indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
        dotyczących cookies oznacza, że będą one zamieszczane w Państwa
        urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
        ustawień dotyczących cookies."
      </CookieConsent>
    </>
  );
}

export default App;

// http://www.matematyka.wroc.pl/konkursy/europejska-olimpiada-matematyczna-dla-dziewczat-emgo
