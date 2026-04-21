import { Route, Routes } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import AdminMenusPage from './pages/AdminMenusPage.jsx'
import HomePage from './pages/HomePage.jsx'
import LoginPage from './pages/LoginPage.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/admin/menus"
          element={
            <ProtectedRoute>
              <AdminMenusPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  )
}
