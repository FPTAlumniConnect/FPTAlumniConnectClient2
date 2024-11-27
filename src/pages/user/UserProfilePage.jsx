import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Box, CardContent, Divider, Typography } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import "./PostDetailsPageV2.css";
import { UserSideBar } from "../../components/common/UserSideBar";

const MainProfileContent = ({ fields, achievements }) => {
  return (
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
        <Row>
          <Col sm={6} style={{ fontWeight: "bold" }}>
            <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>
              Thành tích
            </h4>
          </Col>
          <Col sm={6} style={{ textAlign: "right", fontWeight: "bold" }}>
            <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>
              Mạng xã hội
            </h4>
          </Col>
        </Row>
        <hr style={{ border: "1px solid #e7e7e7" }} />
        {achievements.map((achievement) => (
          <Row className="pb-3">
            <Col sm={6}>{achievement.name}</Col>
            <Col sm={6} style={{ textAlign: "right" }}>
              {achievement.link}
            </Col>
          </Row>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>Lĩnh vực</h4>
        <hr style={{ border: "1px solid #e7e7e7" }} />
        {fields.map((field) => (
          <Row className="pb-3">
            <Col sm={4}>{field.name}</Col>
            <Col sm={4} style={{ textAlign: "center" }}>
              {field.status}
            </Col>
            <Col sm={4} style={{ textAlign: "right", color: "#ff6f00" }}>
              Sửa
            </Col>
          </Row>
        ))}
      </div>
    </Col>
  );
};

function UserProfilePage() {
  const userData = {
    name: "FPT ALUMNI",
    avatar: "/assets/images/logo.png",
    major: "FPT ALUMNI",
  };

  const achievements = [
    { name: "Tên thành tích 1", link: "Link 1" },
    { name: "Tên thành tích 2", link: "Link 2" },
    { name: "Tên thành tích 3", link: "Link 3" },
    { name: "Tên thành tích 4", link: "Link 4" },
  ];

  const fields = [
    { name: "Lĩnh vực 1", status: "Tình trạng 1" },
    { name: "Lĩnh vực 2", status: "Tình trạng 2" },
    { name: "Lĩnh vực 3", status: "Tình trạng 3" },
  ];

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

          <MainProfileContent fields={fields} achievements={achievements} />
        </Container>
      </div>

      <FooterComponent />
    </div>
  );
}

export default UserProfilePage;
