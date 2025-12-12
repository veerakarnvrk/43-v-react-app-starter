import React from 'react';
import './Owner.css'; // สำหรับจัดรูปแบบ

const Owner = () => {
  return (
    <div className="owner-container">
      {/* 1. ชื่อ/รหัส */}
      <h1 className="owner-title">
        43_Veerakarn (V) - JSD11
      </h1>
      <h2 className="owner-title">
        Nick name : ทนายธาตรี ธนธรรมสุนทร
      </h2>

      {/* 2. กรอบรูปภาพ */}
      <div className="picture-frame">
        <p>IMG_1628.JPG</p>
      </div>

      {/* 3. ส่วนชีวประวัติสั้นๆ */}
      <div className="biography-box">
        <h3 className="biography-title">Short Biography:</h3>
        <p className="biography-text">
        ชื่อวีรกานต์ พีรากรวรกิตติ์ ชื่อเล่น วี อายุ 27 ปี เกิดวันเสาร์ ปีขาล
        </p>
        <p className="biography-text">
        การศึกษา : ประกาศนียบัตรวิชาชีพชั้นสูง ช่างซ่อมบำรุงอากาศยาน วิทยาลัยเทคนิคสมุทรปราการ
        </p>
        <p className="biography-text">
        การศึกษา : วิศวกรรมเครื่องกล มหาวิทยาลัยเทคโนโลยีราชมงคลพระนครฯ
        </p>
        <p className="biography-text">
        ประสบการณ์ระหว่างเรียน : เข้าร่วมการแข่งขัน Robot Contest 2020 ที่ สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง
        </p>
        <p className="biography-text">
        ประสบการณ์การทำงาน : Aircraft Maintenance Technician(Intern), Maintenance Engineer(HVAC, Mechanical, Electrical, PLC), Automation Engineer(Robotic Arm)
        </p>
        <p className="biography-text">
        สถานะปัจจุบัน : เข้าร่วมโครงการ Generation Junior Software Developer รุ่นที่ 11 และกำลังฝึกฝนตัวเองอย่างหนักเพื่อที่จะเป็น Software Engineer ให้ได้
        </p>
      </div>
    </div>
  );
};

export default Owner;