import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import { WorkOutline, CalendarTodayOutlined, DescriptionOutlined } from "@mui/icons-material";
import { FormInput } from "./FormInput";
import ReactQuill from "react-quill";

const WorkExperience = ({ initialData, onSave, onCancel }) => {
  const [workExperience, setWorkExperience] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience({ ...workExperience, [name]: value });
  };

  const handleSave = () => {
    onSave(workExperience);
  };

  const handleCancel = () => {
    setWorkExperience(initialData);
    onCancel();
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Kinh nghiệm làm việc</Card.Title>
        <Form>
          <Row>
            <Col sm={6}>
              <FormInput
                label="Tên công ty"
                name="companyName"
                value={workExperience.companyName}
                onChange={handleInputChange}
                IconComponent={WorkOutline}
              />
              <FormInput
                label="Vị trí"
                name="position"
                value={workExperience.position}
                onChange={handleInputChange}
                IconComponent={WorkOutline}
              />
              <FormInput
                label="Thời gian bắt đầu"
                type="date"
                name="startDate"
                value={workExperience.startDate}
                onChange={handleInputChange}
                IconComponent={CalendarTodayOutlined}
              />
            </Col>
            <Col sm={6}>
              <FormInput
                label="Thời gian kết thúc"
                name="endDate"
                type="date"
                value={workExperience.endDate}
                onChange={handleInputChange}
                IconComponent={CalendarTodayOutlined}
              />
                <div className="mb-3">
                  <label htmlFor="jobDescription" className="form-label">
                    Mô tả công việc
                  </label>
                  <ReactQuill
                  style={{height: "100px"}}
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
            <Button variant="secondary" className="me-2" onClick={handleCancel}>
              Hủy
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Lưu
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default WorkExperience;
