import { Box, Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import List from "./Components/List";
import axios from "axios"; // นำเข้า Axios

const App = () => {
  // สร้าง state เพื่อเก็บข้อมูลที่ได้จาก API
  const [data, setData] = useState([]);

  // สร้างฟังก์ชันสำหรับเรียก API แบบ GET โดยใช้ Axios
  const fetchData = async () => {
    try {
      const response = await axios.get("mongodb://localhost/balance_sheet"); // เปลี่ยน URL นี้เป็น URL ของ Backend API ที่คุณใช้
      setData(response.data);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการเรียก API:", error);
    }
  };

  // เรียกฟังก์ชัน fetchData เมื่อคอมโพเนนต์ถูกโหลด
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box position="relative">
      {/* <Header /> */}
      <Container>
        <List data={data} /> {/* ส่งข้อมูลจาก API ไปยังคอมโพเนนต์ List */}
      </Container>
    </Box>
  );
};

export default App;
