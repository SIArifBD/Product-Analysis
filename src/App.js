
import { BrowserRouter as Router } from 'react-router-dom';
import SiteLayout from './components/layouts/SiteLayout';
import BaseRouter from './routers';
import 'antd/dist/antd.css';


function App() {
  return (
    <Router>
      <SiteLayout>
        <BaseRouter />
      </SiteLayout>
    </Router>

  );
}

export default App;
