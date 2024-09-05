import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ForgetPassword from './components/ForgetPassword';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import QuestionList from './components/QuestionList';
import ArticleManagement from './components/ArticleManagement';
import UserManagement from './components/UserManagement'; // เพิ่มการ import UserManagement

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questions" element={<QuestionList />} />
        <Route path="/article-management" element={<ArticleManagement />} />
        <Route path="/user-management" element={<UserManagement />} /> {/* เพิ่มเส้นทางใหม่ */}
      </Routes>
    </Router>
  );
}

export default App;
