import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Dashboard, Login, SignUp, Home, NotFound, Main, BlogDetails } from './pages';

function App() {
  return (
    <div>
      {/* Routing here */}
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/blogs/:blogId" element={<BlogDetails />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
