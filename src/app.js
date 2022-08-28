import './app.css';
import DashboardPage from './pages/dashboard';
import LoginPage from './pages/login';
import { AuthProvider } from './providers/auth';

function App() {
  return (
    <AuthProvider loginPage={LoginPage}>
      <DashboardPage />
    </AuthProvider>
  );
}

export default App;
