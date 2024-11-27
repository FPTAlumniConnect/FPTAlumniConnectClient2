import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { Box, CardContent, Divider, Grid, Typography } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import "./PostDetailsPageV2.css";
import { UserSideBar } from "../../components/common/UserSideBar";
import { Star } from "@mui/icons-material";

export const RightSideContent = ({events, mentors}) => {
  return (
    <Col sm={4} style={{ padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
        }}
      >
        <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>Mentor</h4>
        <hr style={{ border: "1px solid #e7e7e7" }} />
        <div>
          {mentors.map((mentor, index) => (
            <Card className="shadow-sm mb-2">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <strong>Tên: </strong>
                    {mentor.name}
                  </Col>
                  <Col md={6} style={{ textAlign: "right" }}>
                    <strong>Đánh giá: </strong> {mentor.rating}
                    <Star
                      style={{ color: "orange", marginBottom: 4 }}
                      fontSize="small"
                      className="ms-1"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h4 style={{ color: "#ff6f00", marginBottom: "10px" }}>Sự kiện</h4>
        <hr style={{ border: "1px solid #e7e7e7" }} />
        <div>
          {events.map((event, index) => (
            <Card className="shadow-sm mb-2">
              <Card.Body>
                <Row className="">
                  <Col md={12}>
                    <strong>Tên sự kiện: </strong>
                    {event.name}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Col>
  );
};

const MainProfileContent = ({ jobs, mentors, events }) => {
  const [majors, setMajors] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");

  const fetchMajors = () => {
    const fetchedMajors = ["A", "B", "C", "D"];
    setMajors(fetchedMajors);
  };
  useEffect(() => {
    if (majors.length === 0) {
      fetchMajors();
    }
  }, [majors]);
  const handleFilter = (selectedMajor) => {
    alert(`Lọc theo chuyên ngành: ${selectedMajor}`);
  };
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
                Danh Sách Tuyển Dụng
              </h4>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col sm={4}>
              <Form.Control
                type="text"
                placeholder="Tìm kiếm..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
            </Col>
            {majors.length > 0 && (
              <Col sm={4}>
                <Form.Select
                  onChange={(e) => handleFilter(e.target.value)} // Trigger handleFilter on change
                >
                  <option value="all">Tất cả chuyên ngành</option>
                  {majors.map((major, index) => (
                    <option key={index} value={major}>
                      {major}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            )}
          </Row>

          <hr style={{ border: "1px solid #e7e7e7" }} />

          <div>
            {jobs.map((job, index) => (
              <Card className="mb-3 shadow-sm" key={index}>
                <Card.Body>
                  <Row className="">
                    <Col md={4}>{job.name}</Col>
                    <Col md={3}>{job.jobName}</Col>
                    <Col md={3}>{job.expireTime}</Col>
                    <Col
                      md={2}
                      className={
                        job.status === "Còn" ? "text-success" : "text-danger"
                      }
                    >
                      {job.status}
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </Col>
      <RightSideContent events={events} mentors={mentors}/>
    </>
  );
};

function UserRecruitingPage() {
  const userData = {
    name: "FPT ALUMNI",
    avatar: "/assets/images/logo.png",
    major: "FPT ALUMNI",
  };

  const jobs = [
    {
      name: "Tên người tuyển 1",
      jobName: "Tên việc 1",
      expireTime: "Ngày hết hạn 1",
      status: "Còn",
    },
    {
      name: "Tên người tuyển 2",
      jobName: "Tên việc 2",
      expireTime: "Ngày hết hạn 2",
      status: "Hết",
    },
    {
      name: "Tên người tuyển 3",
      jobName: "Tên việc 3",
      expireTime: "Ngày hết hạn 3",
      status: "Còn",
    },
  ];

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

          <MainProfileContent jobs={jobs} mentors={mentors} events={events} />
        </Container>
      </div>

      <FooterComponent />
    </div>
  );
}

export default UserRecruitingPage;
