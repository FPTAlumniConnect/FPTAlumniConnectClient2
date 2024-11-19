import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Checkbox,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Google, Visibility, VisibilityOff } from "@mui/icons-material";
import "./LoginPage.css";
import { handleGoogleLogin } from "../../services/AuthService";

const LoginPage = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  // Handle Google login success
  const handleGoogleSuccess = async (credentialResponse) => {
    const { credential } = credentialResponse; // Extract credential from the response
    try {
      const response = await handleGoogleLogin(credential); // Use the auth service to handle login
      if (response.email) {
        setSuccess("Login successful! Redirecting to home...");
        setTimeout(() => {
          navigate("/home"); // Navigate to home page after successful login
        }, 2000);
      } else {
        setError("Google login failed. Please try again.");
      }
    } catch (error) {
      setError(error.message || "Google login failed. Please try again.");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google login failed:", error);
    setError("Google login failed. Please try again.");
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <GoogleOAuthProvider clientId="591480352874-.apps.googleusercontent.com">
      <Box
        className="login-page"
        sx={{ display: "flex", height: "100vh", backgroundColor: "red" }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(135deg, #1E90FF, #00BFFF)",
            color: "#ffffff",
          }}
        >
          <img
            src="/assets/images/login-thumb.png"
            alt="Login Illustration"
            className="login-image"
            style={{ width: "80%", maxWidth: "400px" }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            px: 3,
            bgcolor: "#ffffff",
            boxShadow: 3,
          }}
        >
          <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
            Welcome to <span style={{ color: "#FFC107" }}>Alumni Connect</span>
          </Typography>

          <GoogleLogin
            onSuccess={() => {}}
            onError={() => {}}
            render={(renderProps) => (
              <Button
                variant="outlined"
                startIcon={<Google />}
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                sx={{
                  width: "100%",
                  mb: 2,
                  textTransform: "none",
                  color: "#757575",
                  borderColor: "#757575",
                  ":hover": { borderColor: "#424242", color: "#424242" },
                }}
              >
                Login with Google
              </Button>
            )}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              my: 2,
              mt: 10,
            }}
          >
            <Box
              sx={{
                flex: 1,
                height: "1px",
                bgcolor: "#ccc",
              }}
            />
            <Typography
              sx={{
                mx: 2,
                fontWeight: "bold",
                color: "#757575",
              }}
            >
              OR
            </Typography>
            <Box
              sx={{
                flex: 1,
                height: "1px",
                bgcolor: "#ccc",
              }}
            />
          </Box>

          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            type="email"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            type={showPassword ? "text" : "password"}
            label="Password"
            variant="outlined"
            margin="normal"
            sx={{ mb: 1 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              mb: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox />
              <Typography>Remember me</Typography>
            </Box>
            <Typography sx={{ color: "#1976d2", cursor: "pointer" }}>
              Forgot Password?
            </Typography>
          </Box>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mb: 2,
              bgcolor: "#FFC107",
              ":hover": { bgcolor: "#FFA000" },
              textTransform: "none",
            }}
          >
            Login
          </Button>

          <Typography sx={{ mt: 10 }}>
            Don't have an account?{" "}
            <span style={{ color: "#1976d2", cursor: "pointer" }}>
              Register
            </span>
          </Typography>
        </Box>
      </Box>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
