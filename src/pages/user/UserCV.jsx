import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { IconButton } from "@mui/material";
import HeaderComponent from "../../components/common/HeaderComponent";
import FooterComponent from "../../components/common/FooterComponent";
import {
  handleAvatarChange,
  UserSideBar,
} from "../../components/common/UserSideBar";
import { FaCamera } from "react-icons/fa";
import {
  CalendarTodayOutlined,
  LocationOnOutlined,
  MailOutline,
  PhoneOutlined,
  WorkOutline,
  MenuBookOutlined,
  MonetizationOnOutlined,
  KeyOutlined,
  PersonOutlined,
  SchoolOutlined,
  LanguageOutlined,
  MilitaryTechOutlined,
} from "@mui/icons-material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const FormInput = ({
  label,
  name,
  value,
  onChange,
  IconComponent,
  type,
  options,
}) => {
  return (
    <Form.Group>
      <Form.Label>
        {IconComponent && <IconComponent sx={{ marginRight: 1 }} />} {label}
      </Form.Label>
      {type === "select" ? (
        <Form.Control as="select" name={name} value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      ) : (
        <Form.Control
          type={type || "text"}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </Form.Group>
  );
};

const MainProfileContent = ({ userAvatar }) => {
  const degreeOptions = [
    { label: "Cử nhân", value: "Bachelor" },
    { label: "Thạc sĩ", value: "Master" },
    { label: "Tiến sĩ", value: "PhD" },
  ];
  const levelOptions = [
    { label: "Cao", value: "high" },
    { label: "Trung bình", value: "middle" },
    { label: "Thấp", value: "low" },
  ];
  const languageOptions = [
    { label: "English", value: "english" },
    { label: "None", value: "none" },
    { label: "Chinese", value: "chinese" },
    { label: "Japanese", value: "japanese" },
  ];
  const skillOptions = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
  ];
  const initialLanguageInfo = {
    language: "",
    level: ""
  };
  const initialSkillInfo = {
    skill: ""
  };
  const initialEducationInfo = {
    degree: "Cử nhân",
    major: "IT",
    school: "FPT",
    startYear: "2024-11-11",
    endYear: "2025-11-11",
  };
  const initialContactInfo = {
    name: "Nam",
    dob: "10/01/2002",
    phone: "0358078007",
    email: "phidepzai02@gmail.com",
    city: "TPHCM",
    address: "6/1",
  };

  const initialJobInfo = {
    desiredJob: "BE",
    field: "IT Phần mềm",
    desiredSalary: "Thỏa thuận",
    location: "TPHCM",
    position: "Thực tập sinh",
    currentSalary: "Không hiển thị",
    keywords: ".Net Developer, An Ninh Mạng, Full Stack",
    referralEmail: "Đang giới thiệu",
  };

  const initialWorkExperience = {
    companyName: "ABC Corp",
    position: "Intern Developer",
    startDate: "2023-06-01",
    endDate: "2024-06-01",
    jobDescription:
      "<p>Developed new features for the company's main product.</p>",
  };

  const [educationInfo, setEducationInfo] = useState(initialEducationInfo);
  const [contactInfo, setContactInfo] = useState(initialContactInfo);
  const [jobInfo, setJobInfo] = useState(initialJobInfo);
  const [workExperience, setWorkExperience] = useState(initialWorkExperience);
  const [language, setLanguage] = useState(initialLanguageInfo);
  const [skill, setSkill] = useState(initialSkillInfo);

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "contact") {
      setContactInfo({ ...contactInfo, [name]: value });
    } else if (section === "job") {
      setJobInfo({ ...jobInfo, [name]: value });
    } else if (section === "education") {
      setEducationInfo({ ...educationInfo, [name]: value });
    } else if (section === "workExperience") {
      setWorkExperience({ ...workExperience, [name]: value });
    } else if (section === "language") {
      setLanguage({ ...language, [name]: value });
    } else if (section === "skill") {
      setSkill({ ...skill, [name]: value });
    }
  };

  const handleCancel = (section) => {
    if (section === "contact") {
      setContactInfo(initialContactInfo);
    } else if (section === "job") {
      setJobInfo(initialJobInfo);
    } else if (section === "education") {
      setEducationInfo(initialEducationInfo);
    } else if (section === "workExperience") {
      setWorkExperience(initialWorkExperience);
    } else if (section === "language") {
      setLanguage(initialLanguageInfo);
    } else if (section === "skill") {
      setSkill(initialSkillInfo);
    }
  };

  const handleSave = () => {
    alert(JSON.stringify({ language, skill }, null, 2));
  };

  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    if (userAvatar != null) {
      setAvatar(userAvatar);
    }
  }, [userAvatar]);

  return (
    <Container fluid className="bg-light p-4">
      <Row>
        <Col md={{ span: 6, offset: 6 }}>
          <Card className="mb-3 shadow-sm">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title>AI Resume</Card.Title>
                <Card.Text>
                  Nếu bạn đã có sẵn CV hãy tải lên để AI tự động nhập từ hồ sơ
                  của bạn.
                </Card.Text>
                <Button variant="primary">Tải CV lên</Button>
              </div>
              <div style={{ position: "relative" }}>
                <img
                  src={avatar}
                  alt="User Avatar"
                  style={{
                    width: "100px",
                    height: "120px",
                    objectFit: "cover",
                  }}
                />
                <IconButton
                  component="label"
                  sx={{
                    position: "relative",
                    backgroundColor: "#fff",
                    boxShadow: 1,
                    zIndex: 10,
                  }}
                  onChange={(event) => handleAvatarChange(event, setAvatar)}
                >
                  <FaCamera />
                  <input type="file" accept="image/*" hidden />
                </IconButton>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>Thông tin liên hệ</Card.Title>
          <Form>
            <Row>
              <Col sm={6}>
                <FormInput
                  label="Họ tên"
                  name="name"
                  value={contactInfo.name}
                  onChange={(e) => handleInputChange(e, "contact")}
                  IconComponent={PersonOutlined}
                />
                <FormInput
                  label="Ngày sinh"
                  name="dob"
                  value={contactInfo.dob}
                  onChange={(e) => handleInputChange(e, "contact")}
                  IconComponent={CalendarTodayOutlined}
                />
                <FormInput
                  label="Số điện thoại"
                  name="phone"
                  value={contactInfo.phone}
                  onChange={(e) => handleInputChange(e, "contact")}
                  IconComponent={PhoneOutlined}
                />
                <FormInput
                  label="Email"
                  name="email"
                  value={contactInfo.email}
                  onChange={(e) => handleInputChange(e, "contact")}
                  IconComponent={MailOutline}
                />
              </Col>
              <Col sm={6}>
                <FormInput
                  label="Thành phố"
                  name="city"
                  value={contactInfo.city}
                  onChange={(e) => handleInputChange(e, "contact")}
                  IconComponent={LocationOnOutlined}
                />
                <FormInput
                  label="Địa chỉ"
                  name="address"
                  value={contactInfo.address}
                  onChange={(e) => handleInputChange(e, "contact")}
                  IconComponent={LocationOnOutlined}
                />
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => handleCancel("contact")}
              >
                Hủy
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>Thông tin xin việc</Card.Title>
          <Form>
            <Row>
              <Col sm={6}>
                <FormInput
                  label="Việc làm mong muốn"
                  name="desiredJob"
                  value={jobInfo.desiredJob}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={WorkOutline}
                />
                <FormInput
                  label="Lĩnh vực"
                  name="field"
                  value={jobInfo.field}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={WorkOutline}
                />
                <FormInput
                  label="Mức lương mong muốn"
                  name="desiredSalary"
                  value={jobInfo.desiredSalary}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={MonetizationOnOutlined}
                />
                <FormInput
                  label="Địa điểm làm việc"
                  name="location"
                  value={jobInfo.location}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={LocationOnOutlined}
                />
              </Col>
              <Col sm={6}>
                <FormInput
                  label="Vị trí"
                  name="position"
                  value={jobInfo.position}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={WorkOutline}
                />
                <FormInput
                  label="Lương hiện tại"
                  name="currentSalary"
                  value={jobInfo.currentSalary}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={MonetizationOnOutlined}
                />
                <FormInput
                  label="Từ khóa công việc"
                  name="keywords"
                  value={jobInfo.keywords}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={MenuBookOutlined}
                />
                <FormInput
                  label="Email người giới thiệu"
                  name="referralEmail"
                  value={jobInfo.referralEmail}
                  onChange={(e) => handleInputChange(e, "job")}
                  IconComponent={MailOutline}
                />
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => handleCancel("job")}
              >
                Hủy
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>Trình độ học vấn (20%)</Card.Title>
          <Form>
            <Row>
              <Col sm={6}>
                <FormInput
                  label="Trình độ"
                  name="degree"
                  value={educationInfo.degree}
                  onChange={(e) => handleInputChange(e, "education")}
                  type="select"
                  options={degreeOptions}
                  IconComponent={SchoolOutlined}
                />
                <FormInput
                  label="Ngành học"
                  name="major"
                  value={educationInfo.major}
                  onChange={(e) => handleInputChange(e, "education")}
                  IconComponent={SchoolOutlined}
                />
                <FormInput
                  label="Trường học"
                  name="school"
                  value={educationInfo.school}
                  onChange={(e) => handleInputChange(e, "education")}
                  IconComponent={SchoolOutlined}
                />
              </Col>
              <Col sm={6}>
                <FormInput
                  label="Năm học (từ)"
                  name="startYear"
                  value={educationInfo.startYear}
                  onChange={(e) => handleInputChange(e, "education")}
                  type="date"
                  IconComponent={CalendarTodayOutlined}
                />
                <FormInput
                  label="Năm học (đến)"
                  name="endYear"
                  value={educationInfo.endYear}
                  onChange={(e) => handleInputChange(e, "education")}
                  type="date"
                  IconComponent={CalendarTodayOutlined}
                />
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => handleCancel("education")}
              >
                Hủy
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>Kinh nghiệm làm việc (20%)</Card.Title>
          <Form>
            <Row>
              <Col sm={6}>
                <FormInput
                  label="Tên công ty"
                  name="companyName"
                  value={workExperience.companyName}
                  onChange={(e) => handleInputChange(e, "workExperience")}
                  IconComponent={WorkOutline}
                />
                <FormInput
                  label="Vị trí"
                  name="position"
                  value={workExperience.position}
                  onChange={(e) => handleInputChange(e, "workExperience")}
                  IconComponent={WorkOutline}
                />
                <FormInput
                  label="Ngày bắt đầu"
                  name="startDate"
                  value={workExperience.startDate}
                  onChange={(e) => handleInputChange(e, "workExperience")}
                  IconComponent={CalendarTodayOutlined}
                  type="date"
                />
                <FormInput
                  label="Ngày kết thúc"
                  type="date"
                  name="endDate"
                  value={workExperience.endDate}
                  onChange={(e) => handleInputChange(e, "workExperience")}
                  IconComponent={CalendarTodayOutlined}
                />
              </Col>
              <Col sm={6}>
                <div className="mb-3">
                  <label htmlFor="jobDescription" className="form-label">
                    Mô tả công việc
                  </label>
                  <ReactQuill
                    style={{ height: "150px" }}
                    value={workExperience.jobDescription}
                    onChange={(value) =>
                      handleInputChange(
                        { target: { name: "jobDescription", value } },
                        "workExperience"
                      )
                    }
                  />
                </div>
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => handleCancel("workExperience")}
              >
                Hủy
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>Ngoại ngữ (10%)</Card.Title>
          <Form>
            <Row>
              <Col sm={6}>
                <FormInput
                  label="Ngoại ngữ"
                  name="language"
                  value={language.language}
                  onChange={(e) => handleInputChange(e, "language")}
                  type="select"
                  options={languageOptions}
                  IconComponent={LanguageOutlined}
                />
              </Col>
              <Col sm={6}>
                <FormInput
                  label="Trình độ"
                  name="level"
                  value={language.level}
                  onChange={(e) => handleInputChange(e, "language")}
                  type="select"
                  options={levelOptions}
                  IconComponent={MilitaryTechOutlined}
                />
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => handleCancel("language")}
              >
                Hủy
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mb-3 shadow-sm">
        <Card.Body>
          <Card.Title>Kỹ năng (10%)</Card.Title>
          <Form>
            <Row>
              <Col sm={12}>
                <FormInput
                  label="Kỹ năng"
                  name="skill"
                  value={skill.skill}
                  onChange={(e) => handleInputChange(e, "skill")}
                  type="select"
                  options={skillOptions}
                  IconComponent={SchoolOutlined}
                />
              </Col>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button
                variant="secondary"
                className="me-2"
                onClick={() => handleCancel("skill")}
              >
                Hủy
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Lưu
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

function UserCVPage() {
  const userData = {
    name: "FPT ALUMNI",
    avatar: "/assets/images/logo.png",
    major: "FPT ALUMNI",
  };
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

          <MainProfileContent />
        </Container>
      </div>

      <FooterComponent />
    </div>
  );
}

export default UserCVPage;
