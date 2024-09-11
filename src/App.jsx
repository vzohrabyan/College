import { Provider } from 'react-redux';

import AppRoutes from './router/AppRoutes';
import ScrollToTop from './components/scrollTop/ScrollTop';
import './App.scss';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <AppRoutes />
    </div>
  );
}

export default App;
