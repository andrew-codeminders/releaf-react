import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import FullPageRedirect from './components/FullPageRedirect';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<FullPageRedirect htmlFile="/home.html" />} />
      <Route path="/products" element={<FullPageRedirect htmlFile="/products.html" />} />
      <Route path="/contact-us" element={<FullPageRedirect htmlFile="/contact-us.html" />} />
      <Route path="/learn-more" element={<FullPageRedirect htmlFile="/learn-more.html" />} />
      <Route path="/news-events" element={<FullPageRedirect htmlFile="/news-&-events.html" />} />
      <Route path="/cart" element={<FullPageRedirect htmlFile="/products_olsPage_cart.html" />} />
      <Route
        path="/payment_success"
        element={<FullPageRedirect htmlFile="/payment-success.html" />}
      />
    </Routes>
  </Router>,
);
