import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Header from './components/header/header';
import PlaneNew from './pages/PlaneNew';
import PlaneOverview from './pages/PlaneOverview';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/plane/new">
            <PlaneNew />
          </Route>
          <Route
            exact
            path="/plane"
          >
            <PlaneOverview />
          </Route>
          <Route path="/">
            {/* <Home /> */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
