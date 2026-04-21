/**
 * 라우트 정의. Layout 아래에 페이지만 갈아끼운다.
 */
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import ThemeSync from './components/ThemeSync.jsx'
import CartPage from './pages/CartPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ShopPage from './pages/ShopPage.jsx'

export default function App() {
  return (
    <>
      <ThemeSync />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
      </Routes>
    </>
  )
}
