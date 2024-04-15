import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Frontpage from './Frontpage.jsx';
import App from './App.jsx';
import Appoinment from './Appoinment.jsx';

function Page() {
  return (
    <>
      <Router>
        <Navbar />
          <Route exact path='/'>
            <Frontpage />
          </Route>
          <Route exact path='/symptom-check'>
            <App />
          </Route>
          <Route exact path='/book-doctor'>
            <Appoinment />
          </Route>
      </Router>

    </>
  );
}

export default Page;