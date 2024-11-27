import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Box, CardContent, Divider, Typography } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import "./PostDetailsPageV2.css";
import { UserSideBar } from "../../components/common/UserSideBar";

function UserSettingPage() {
  const userData = {
    name: "FPT ALUMNI",
    avatar: "/assets/images/logo.png",
    major: "FPT ALUMNI",
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderComponent />

      <div style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
        <Container fluid className="d-flex p-0">
          <UserSideBar
            name={userData.name}
            major={userData.major}
            userAvatar={userData.avatar}
          />
          <Col sm={9} style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                marginBottom: "20px",
              }}
            >
              <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>
                Cài đặt
              </h4>
              <hr style={{ border: "1px solid #e7e7e7" }} />
              <p
                style={{
                  color: "#333",
                  fontSize: "16px",
                  marginBottom: "10px",
                }}
              >
                Cựu sinh viên
              </p>
              <ul className="d-flex flex-column gap-2" style={{ color: "#757575", fontSize: "14px", listStyle: "none" }}>
                <li>Ẩn lịch sử học</li>
                <li>Ẩn lĩnh vực</li>
                <li>Ẩn email</li>
                <li>Ẩn tất cả</li>
              </ul>
            </div>

            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>
                Thông báo
              </h4>
              <hr style={{ border: "1px solid #e7e7e7" }} />
              <ul className="d-flex flex-column gap-2" style={{ color: "#757575", fontSize: "14px", listStyle: "none" }}>
                <li>Thông báo email</li>
                <li>Thông báo trên web</li>
                <li>Thông báo của tuyển dụng</li>
                <li>Thông báo tin nhắn</li>
              </ul>
            </div>
          </Col>
        </Container>
      </div>

      <FooterComponent />
    </div>
  );
}

export default UserSettingPage;
