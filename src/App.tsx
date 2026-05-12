import { HashRouter } from 'react-router-dom';  // ← МЕНЯЕМ BrowserRouter НА HashRouter

function App() {
  return (
    <HashRouter>  {/* ← НЕ НУЖЕН basename! */}
      <AuthProvider>
        <CartProvider>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="potions" element={<PotionsPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </CartProvider>
      </AuthProvider>
    </HashRouter>
  );
}
