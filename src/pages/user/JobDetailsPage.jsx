import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Box, CardContent, Divider, Grid, Typography } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import "./PostDetailsPageV2.css";
import { UserSideBar } from "../../components/common/UserSideBar";
import { Star } from "@mui/icons-material";
import { RightSideContent } from "./UserRecruitingPage";

const MainProfileContent = ({ jobDetail, mentors, events }) => {
  return (
    <>
      <Col sm={5} style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
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
                Chi tiết công việc
              </h4>
            </Col>
          </Row>

          <hr style={{ border: "1px solid #e7e7e7" }} />

          <div>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Tên công việc: </strong>
                  {jobDetail.name}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Mô tả công việc: </strong>
                  {jobDetail.description}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Lương tối thiểu: </strong>
                  {jobDetail.minSalary}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Lương tối đa: </strong>
                  {jobDetail.maxSalary}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Thỏa thuận: </strong>
                  {jobDetail.agree}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Địa điểm: </strong>
                  {jobDetail.location}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Yêu cầu: </strong>
                  {jobDetail.requirement}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Phúc lợi: </strong>
                  {jobDetail.benefits}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Thời gian: </strong>
                  {jobDetail.time}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="mb-1 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>Email: </strong>
                  {jobDetail.email}
                </Card.Text>
              </Card.Body>
            </Card>

            <Button onClick={()=>alert("Xin việc thành công!")}>Xin Việc</Button>
          </div>
        </div>
      </Col>
      <RightSideContent events={events} mentors={mentors} />
    </>
  );
};

function JobDetailsPage() {
  const userData = {
    name: "FPT ALUMNI",
    avatar: "/assets/images/logo.png",
    major: "FPT ALUMNI",
  };

  const jobDetail = {
    name: "IT",
    description: "JOB xịn",
    minSalary: 1000000,
    maxSalary: 6000000,
    agree: "Không",
    location: "HCM",
    requirement: "Không",
    benefits: "Không",
    time: "21/11/2024 17:00",
    email: "abc@abc.abc",
  };

  const mentors = [
    { name: "Nguyen Van A", rating: 4.5 },
    { name: "Nguyen Van B", rating: 4.2 },
    { name: "Nguyen Van C", rating: 1.5 },
  ];

  const events = [
    {
      name: "Sự kiện 1",
    },
    {
      name: "Sự kiện 2",
    },
    {
      name: "Sự kiện 3",
    },
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

          <MainProfileContent
            jobDetail={jobDetail}
            mentors={mentors}
            events={events}
          />
        </Container>
      </div>

      <FooterComponent />
    </div>
  );
}

export default JobDetailsPage;
