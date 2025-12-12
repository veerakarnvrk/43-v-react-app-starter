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
        <p><img src="data:image/jpeg;base64,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"/></p>
      </div>

      {/* 3. ส่วนชีวประวัติสั้นๆ */}
      <div className="biography-box">
        <h3 className="biography-title">ประวัติโดยย่อ:</h3>
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