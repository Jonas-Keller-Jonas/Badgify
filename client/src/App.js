import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import IssueCertificate from './components/IssueCertificate';
import VerifyCertificate from './components/VerifyCertificate';
import CertificateList from './components/CertificateList';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={CertificateList} />
          <Route path="/issue" component={IssueCertificate} />
          <Route path="/verify" component={VerifyCertificate} />
          <Route path="*" render={() => <div>404 Not found</div>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

