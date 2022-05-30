import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import { Provider } from 'react-redux';
import store from './app/store';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<CategoryPage />} />
            <Route path='/category/:categoryName' element={<CategoryPage />} />
            <Route path='/product/:productId' element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
