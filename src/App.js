import Header from "./components/Header.jsx";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Cursor from "./components/Cursor.jsx";
import Media from "react-media";
 
import About from "./components/About";
import Contact from "./components/Contact";
import work from "./components/work"; 


function App() {
  return (
    <div className='App'>
      <Router>
        <div className='app-wrapper'>
          <Media queries={{ small: { maxWidth: 768 } }}>
            {(matches) => (matches.small ? null : <Cursor />)}
          </Media>
          <Header />
          <div className='container'>
            <div className='wrapper'>
              <div className='home'>
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path='/about' component={About} />
                  <Route exact path='/works' component={work} />
                  <Route exact path='/contact' component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
