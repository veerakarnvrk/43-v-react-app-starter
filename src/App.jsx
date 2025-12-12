import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import UserHomeView from './components/UserHomeView';
import AdminHomeView from './components/AdminHomeView';
import Owner from './components/Owner';

const App = () => {
  <Routes>
  <Route path="/owner" element={<Owner />} /> 
  </Routes>

  return (
    // Router ห่อหุ้มทุกส่วนที่ต้องการใช้การนำทาง
    <Router>
      <div className="app-container">
        <Header />
        {/* Routes ใช้กำหนดเส้นทางต่างๆ */}
        <Routes>
          {/* Path "/" คือหน้าแรก จะแสดง HomePage */}
          <Route path="/" element={<HomePage />} />
          {/* Path "/user" จะแสดง UserHomeView */}
          <Route path="/user" element={<UserHomeView />} />
          {/* Path "/admin" จะแสดง AdminHomeView */}
          <Route path="/admin" element={<AdminHomeView />} />
          {/* Path "/owner" สำหรับลิงก์ Owner ด้านบนขวา */}
          <Route path="owner" element={<Owner />} />
          {/* คุณสามารถเพิ่ม Route สำหรับ 404 Not Found ได้ */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;