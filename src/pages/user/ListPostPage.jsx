import React, { useState } from "react";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";
import { Box } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import { Visibility, AccessTime, Person } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { PagingListItem } from "../../components/common/PagingListItem";

export const MainBodyListItem = ({ item, onClick }) => {
  const styles = {
    title: {
      cursor: "pointer",
    },
  };
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title onClick={onClick} className="text-primary" style={styles.title}>{item.title}</Card.Title>
        <Card.Text className="mb-1">{item.content}</Card.Text>
        <div className="d-flex justify-content-between text-muted">
          <span className="d-flex align-items-center">
            <Visibility fontSize="small" className="me-1" /> {item.views}
          </span>
          <span className="d-flex align-items-center">
            <AccessTime fontSize="small" className="me-1" /> {item.time}
          </span>
          <span className="d-flex align-items-center">
            <Person fontSize="small" className="me-1" /> {item.user}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

function ListPostPage() {
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
    {
      title: "Tiêu đề bài đăng 3",
      content: "Nội dung tóm tắt 3",
      views: "Số view 3",
      time: "Thời gian đăng 3",
      user: "Người đăng 3",
    },
    {
      title: "Tiêu đề bài đăng 4",
      content: "Nội dung tóm tắt 4",
      views: "Số view 4",
      time: "Thời gian đăng 4",
      user: "Người đăng 4",
    },
    {
      title: "Tiêu đề bài đăng 5",
      content: "Nội dung tóm tắt 5",
      views: "Số view 5",
      time: "Thời gian đăng 5",
      user: "Người đăng 5",
    },
    {
      title: "Tiêu đề bài đăng 6",
      content: "Nội dung tóm tắt 6",
      views: "Số view 6",
      time: "Thời gian đăng 6",
      user: "Người đăng 6",
    },
    {
      title: "Tiêu đề bài đăng 7",
      content: "Nội dung tóm tắt 7",
      views: "Số view 7",
      time: "Thời gian đăng 7",
      user: "Người đăng 7",
    },
    {
      title: "Tiêu đề bài đăng 8",
      content: "Nội dung tóm tắt 8",
      views: "Số view 8",
      time: "Thời gian đăng 8",
      user: "Người đăng 8",
    },
    {
      title: "Tiêu đề bài đăng 9",
      content: "Nội dung tóm tắt 9",
      views: "Số view 9",
      time: "Thời gian đăng 9",
      user: "Người đăng 9",
    },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const currentItem = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const navigate = useNavigate();
  const handleShowPostDetail = () => {
    navigate("/post/1")
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderComponent />

      <Box sx={{backgroundColor: "#F7F7F7", py: 4 }}>
        <Container>
          <Row className="mb-4 justify-content-center" >
            <Col md={8}>
              {currentItem.map((item, index) => (
                <MainBodyListItem key={index} onClick={handleShowPostDetail} item={item} />
              ))}
              <PagingListItem handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages}/>
            </Col>
          </Row>
        </Container>
      </Box>

      <FooterComponent />
    </div>
  );
}

export default ListPostPage;
