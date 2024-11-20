import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Box } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import { MainBodyListItem } from "./ListPostPage";
import { useNavigate } from "react-router-dom";

function HomePageV2() {
  const jobs = [
    {
      title: "Tiêu đề tuyển dụng 1",
      summary: "Nội dung tóm tắt 1",
      time: "Thời gian 1",
      salary: "Mức lương 1",
    },
    {
      title: "Tiêu đề tuyển dụng 2",
      summary: "Nội dung tóm tắt 2",
      time: "Thời gian 2",
      salary: "Mức lương 2",
    },
  ];
  const events = [
    {
      title: "Tiêu đề sự kiện 1",
      content: "Nội dung tóm tắt 1",
      views: "Số view 1",
      time: "Thời gian đăng 1",
      user: "Người đăng 1",
    },
    {
      title: "Tiêu đề sự kiện 2",
      content: "Nội dung tóm tắt 2",
      views: "Số view 2",
      time: "Thời gian đăng 2",
      user: "Người đăng 2",
    },
  ];
  const posts = [
    {
      title: "Tiêu đề bài đăng 1",
      content: "Nội dung tóm tắt 1",
      views: "Số view 1",
      time: "Thời gian đăng 1",
      user: "Người đăng 1",
    },
    {
      title: "Tiêu đề bài đăng 2",
      content: "Nội dung tóm tắt 2",
      views: "Số view 2",
      time: "Thời gian đăng 2",
      user: "Người đăng 2",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderComponent />

      <Box sx={{ backgroundColor: "#F7F7F7", py: 4 }}>
        <Container>
          <Row className="mb-4">
            <Col md={4}>
              <h4 className="mb-3">Diễn đàn</h4>
              {posts.map((post) => (
                <MainBodyListItem
                  onClick={() => navigate("/post/1")}
                  item={post}
                />
              ))}
              <Button
                onClick={() => navigate("/list-post")}
                variant="warning"
                className="mt-2"
              >
                Xem thêm
              </Button>
            </Col>

            <Col md={4}>
              <h4 className="mb-3">Sự kiện</h4>
              {events.map((event) => (
                <MainBodyListItem
                  onClick={() => navigate("/event/1")}
                  item={event}
                />
              ))}

              <Button
                onClick={() => navigate("/list-event")}
                variant="warning"
                className="mt-2"
              >
                Xem thêm
              </Button>
            </Col>

            <Col md={4}>
              <h4 className="mb-3">Tuyển dụng</h4>
              {jobs.map((job, index) => (
                <Card className="mb-3 shadow-sm" key={index}>
                  <Card.Body>
                    <Card.Title className="text-primary">
                      {job.title}
                    </Card.Title>
                    <Card.Text className="mb-1">{job.summary}</Card.Text>
                    <div className="text-muted">
                      <p className="mb-1">{job.time}</p>
                      <p className="mb-1">{job.salary}</p>
                    </div>
                  </Card.Body>
                </Card>
              ))}
              <Button variant="warning" className="mt-2">
                Xem thêm
              </Button>
            </Col>
          </Row>
        </Container>
      </Box>

      <FooterComponent />
    </div>
  );
}

export default HomePageV2;
