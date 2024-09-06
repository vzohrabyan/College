import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import store from './redux/store';
import AppRoutes from './router/AppRoutes';
import ScrollToTop from './components/scrollTop/ScrollTop';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <div className="App">
          <ScrollToTop />
          <AppRoutes />
        </div>
      </Provider>
    </HelmetProvider>
  );
}

export default App;
