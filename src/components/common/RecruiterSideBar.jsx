import React, { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  Home,
  Settings,
  Logout,
  PersonOutlineOutlined,
  DocumentScannerOutlined,
} from "@mui/icons-material";
import { FaCamera } from "react-icons/fa";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";
import { CgOrganisation } from "react-icons/cg";

export const handleAvatarChange = (event, setAvatar) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(file);
  }
};

export const RecruiterSideBar = ({ name, major }) => {
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");
  const location = useLocation();
  const handleNavigation = (path) => {
    setSelectedItem(path);
    navigate(path);
  };
  useEffect(() => {
    setSelectedItem(location.pathname);
  }, [location]);

  return (
    <Col
      sm={3}
      className="bg-light p-3"
      style={{ borderRight: "2px solid gray" }}
    >
      <Box className="text-center mb-4">
        <Box
          sx={{
            width: 150,
            height: 100,
            overflow: "hidden",
            backgroundColor: "#ccc",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <img
            src="/assets/images/logo.png"
            alt="User Avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>

      <List className="d-flex flex-column" style={{ gap: 20 }}>
        <ListItem
          onClick={() => handleNavigation("/jobs")}
          button
          selected={selectedItem === "/jobs"}
        >
          <ListItemIcon>
            <DocumentScannerOutlined
              style={{
                color:
                  selectedItem === "/recruiter/jobs" ? "#ff6f00" : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Việc làm (0)" />
        </ListItem>

        <ListItem
          onClick={() => handleNavigation("/recruiter/candidates")}
          button
          selected={selectedItem === "/recruiter/candidates"}
        >
          <ListItemIcon>
            <PersonOutlineOutlined
              style={{
                color:
                  selectedItem === "/recruiter/candidates"
                    ? "#ff6f00"
                    : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Ứng viên (0)" />
        </ListItem>
        <ListItem
          onClick={() => handleNavigation("/recruiter/candidates/applied")}
          button
          selected={selectedItem === "/recruiter/candidates/applied"}
        >
          <ListItemIcon>
            <PersonOutlineOutlined
              style={{
                color:
                  selectedItem === "/recruiter/candidates/applied"
                    ? "#ff6f00"
                    : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Ứng viên nộp đơn (0)" />
        </ListItem>
        <ListItem
          onClick={() => handleNavigation("/recruiter/candidates/recommend")}
          button
          selected={selectedItem === "/recruiter/candidates/recommend"}
        >
          <ListItemIcon>
            <PersonOutlineOutlined
              style={{
                color:
                  selectedItem === "/recruiter/candidates/recommend"
                    ? "#ff6f00"
                    : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Ứng viên gợi ý (0)" />
        </ListItem>
        <ListItem
          onClick={() => handleNavigation("/recruiter/candidates/saved")}
          button
          selected={selectedItem === "/recruiter/candidates/saved"}
        >
          <ListItemIcon>
            <PersonOutlineOutlined
              style={{
                color:
                  selectedItem === "/recruiter/candidates/saved"
                    ? "#ff6f00"
                    : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Ứng viên đã lưu (0)" />
        </ListItem>
        <ListItem
          onClick={() => handleNavigation("/recruiter/company")}
          button
          selected={selectedItem === "/recruiter/company"}
        >
          <ListItemIcon>
            <CgOrganisation
              style={{
                color:
                  selectedItem === "/recruiter/company" ? "#ff6f00" : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Sửa thông tin công ty" />
        </ListItem>

        <ListItem
          onClick={() => handleNavigation("/logout")}
          button
          selected={selectedItem === "/logout"}
        >
          <ListItemIcon>
            <Logout
              style={{
                color: selectedItem === "/logout" ? "#ff6f00" : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Thoát" />
        </ListItem>
      </List>
    </Col>
  );
};
