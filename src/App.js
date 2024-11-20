import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import DashboardPage from "./pages/admin/DashboardPage";
import UserPage from "./pages/admin/UserPage";
import HomePage from "./pages/user/HomePage";
import CreatePostPage from "./pages/user/CreatePostPage";
import PostPage from "./pages/admin/PostPage";
import MentorshipRequestPage from "./pages/admin/MentorshipRequestPage";
import PostDetail from "./pages/user/PostDetail";
import MajorCodePage from "./pages/admin/MajorCodePage";
import EventPage from "./pages/admin/EventPage";
import JobPostPage from "./pages/admin/JobPostPage";
import JobApplicationPage from "./pages/admin/JobApplicationPage";
import UserEventPage from "./pages/user/UserEventPage";
import EventDetailsPage from "./pages/user/EventDetailsPage";
import UserJobPostPage from "./pages/user/UserJobPostPage";
import UserJobPostDetailsPage from "./pages/user/UserJobPostDetailsPage";
import CVPage from "./pages/user/CVPage";
import CreateJobPostPage from "./pages/user/CreateJobPostPage";
import CreateEventPage from "./pages/user/CreateEventPage";
import LoginPage from "./pages/user/LoginPage";
import HomePageV2 from "./pages/user/HomePageV2";
import ListPostPage from "./pages/user/ListPostPage";
import ListEventPage from "./pages/user/ListEventPage";
import EventDetailsPageV2 from "./pages/user/EventDetailsPageV2";
import PostDetailsPageV2 from "./pages/user/PostDetailsPageV2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageV2 />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/list-post" element={<ListPostPage />} />
        <Route path="/list-event" element={<ListEventPage />} />
        <Route path="/post/:id" element={<PostDetailsPageV2 />} />
        <Route path="/create-post" element={<CreatePostPage />} />
        <Route path="/user-event" element={<UserEventPage />} />
        <Route path="/event/:id" element={<EventDetailsPageV2 />} />
        <Route path="/user-job-post" element={<UserJobPostPage />} />
        <Route path="/create-event" element={<CreateEventPage />} />
        <Route path="/user-job-post/:id" element={<UserJobPostDetailsPage />} />
        <Route path="/create-job-post" element={<CreateJobPostPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
        <Route path="/admin/user" element={<UserPage />} />
        <Route path="/admin/post" element={<PostPage />} />
        <Route path="/admin/mentor_ship_request" element={<MentorshipRequestPage />} />
        <Route path="/admin/major" element={<MajorCodePage />} />
        <Route path="/admin/event" element={<EventPage />} />
        <Route path="/admin/jobposts" element={<JobPostPage />} />
        <Route path="/admin/jobapplications/:id" element={<JobApplicationPage />} />

      </Routes>
    </Router>
  );
}

export default App;
