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
import { Home, Settings, Logout } from "@mui/icons-material";
import { FaCamera } from "react-icons/fa";
import { useLocation, useNavigate, useRoutes } from "react-router-dom";

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

export const UserSideBar = ({ name, userAvatar, major }) => {
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState("");
  const location = useLocation();
  const handleNavigation = (path) => {
    setSelectedItem(path);
    navigate(path);
  };
  useEffect(() => {
    if (userAvatar != null) {
      setAvatar(userAvatar);
    }
    setSelectedItem(location.pathname);
  }, [userAvatar, location]);

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
            height: 150,
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#ccc",
            margin: "0 auto",
            position: "relative",
          }}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="User Avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              No Avatar
            </Typography>
          )}
        </Box>

        <IconButton
          component="label"
          sx={{
            position: "relative",
            marginTop: "-40px",
            marginRight: "-60px",
            backgroundColor: "#fff",
            boxShadow: 1,
            zIndex: 10,
          }}
        >
          <FaCamera />
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(event) => handleAvatarChange(event, setAvatar)}
          />
        </IconButton>
        <Typography variant="h6" className="mt-2">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {major}
        </Typography>
      </Box>

      <List className="d-flex flex-column" style={{ gap: 50 }}>
        <ListItem
          onClick={() => handleNavigation("/home")}
          button
          selected={selectedItem === "/home"}
        >
          <ListItemIcon>
            <Home
              style={{
                color: selectedItem === "/home" ? "#ff6f00" : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Tổng quan" />
        </ListItem>

        <ListItem
          onClick={() => handleNavigation("/user/setting")}
          button
          selected={selectedItem === "/user/setting"}
        >
          <ListItemIcon>
            <Settings
              style={{
                color: selectedItem === "/user/setting" ? "#ff6f00" : "inherit",
              }}
            />
          </ListItemIcon>
          <ListItemText primary="Cài đặt" />
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
          <ListItemText primary="Đăng xuất" />
        </ListItem>
      </List>
    </Col>
  );
};
