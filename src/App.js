import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './app/store';
import ProductPage from './pages/ProductPage/ProductPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import CartPage from './pages/CartPage/CartPage';

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
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
