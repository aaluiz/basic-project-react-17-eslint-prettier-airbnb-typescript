import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Credits from './pages/Credits';
import Home from './pages/Home';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Credits} path="/credits" />
    </Switch>
  </Router>
);

export default App;
