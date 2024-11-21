import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Box, Typography } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import { Visibility, AccessTime, Person, Report } from "@mui/icons-material";
import "./PostDetailsPageV2.css";

function PostDetailsPageV2() {
  const postDetails = {
    title: "FPT ALUMNI",
    content: "FPT ALUMNI",
    postedBy: "FPT ALUMNI",
    views: 100,
    comments: [
      {
        user: "FPT ALUMNI",
        content: "FPT ALUMNI",
        date: "2024-11-18 10:30 AM",
      },
      {
        user: "FPT ALUMNI",
        content: "FPT ALUMNI",
        date: "2024-11-18 11:00 AM",
      },
    ],
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderComponent />

      <Box sx={{ backgroundColor: "#f9f9f9", py: 4 }}>
        <Container>
          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <Row>
                <Col>
                  <Typography variant="h4" className="text-primary mb-3">
                    {postDetails.title}
                  </Typography>
                </Col>

                <Col md="auto" className="d-flex align-items-center">
                  <div className="report-button">
                    <Report className="report-icon" fontSize="large" />
                    <div className="tooltip">report</div>
                  </div>
                </Col>
              </Row>
              <Typography variant="body1" className="mb-3">
                {postDetails.content}
              </Typography>
              <Typography variant="subtitle1" className="text-muted">
                <Person fontSize="small" className="me-1" />{" "}
                {postDetails.postedBy}
              </Typography>
              <Typography variant="subtitle2" className="text-muted">
                <Visibility fontSize="small" className="me-1" />{" "}
                {postDetails.views}
              </Typography>
            </Card.Body>
          </Card>
          <Typography variant="h5" className="mb-4">
            Comments ({postDetails.comments.length})
          </Typography>
          {postDetails.comments.map((comment, index) => (
            <Card key={index} className="mb-3 shadow-sm">
              <Card.Body>
                <Row>
                  <Col>
                    <Typography variant="subtitle1" className="fw-bold">
                      <Person fontSize="small" className="me-1" />
                      {comment.user}
                    </Typography>
                    <Typography variant="body2" className="text-muted">
                      <AccessTime fontSize="small" className="me-1" />
                      {comment.date}
                    </Typography>
                    <Typography variant="body1" className="mt-2">
                      {comment.content}
                    </Typography>
                  </Col>
                  <Col md="auto" className="d-flex align-items-center">
                    <div className="report-button">
                      <Report className="report-icon" fontSize="small" />
                      <div className="tooltip">report</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </Box>

      <FooterComponent />
    </div>
  );
}

export default PostDetailsPageV2;
