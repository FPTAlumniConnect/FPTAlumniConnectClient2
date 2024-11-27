import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { SchoolOutlined } from '@mui/icons-material';
import { FormInput } from './FormInput';

const EducationInformation = ({ initialData, onSave, onCancel }) => {
  const [educationInfo, setEducationInfo] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationInfo({ ...educationInfo, [name]: value });
  };

  const handleSave = () => {
    onSave(educationInfo);
  };

  const handleCancel = () => {
    setEducationInfo(initialData);
    onCancel();
  };

  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>Trình độ học vấn</Card.Title>
        <Form>
          <Row>
            <Col sm={6}>
              <FormInput
                label="Trình độ"
                name="degree"
                value={educationInfo.degree}
                onChange={handleInputChange}
                type="select"
                options={educationInfo.degreeOptions}
                IconComponent={SchoolOutlined}
              />
              <FormInput
                label="Ngành học"
                name="major"
                value={educationInfo.major}
                onChange={handleInputChange}
                IconComponent={SchoolOutlined}
              />
              <FormInput
                label="Trường học"
                name="school"
                value={educationInfo.school}
                onChange={handleInputChange}
                IconComponent={SchoolOutlined}
              />
            </Col>
            <Col sm={6}>
              <FormInput
                type="date"
                label="Năm học (từ)"
                name="startYear"
                value={educationInfo.startYear}
                onChange={handleInputChange}
                IconComponent={SchoolOutlined}
              />
              <FormInput
                type="date"
                label="Năm học (đến)"
                name="endYear"
                value={educationInfo.endYear}
                onChange={handleInputChange}
                IconComponent={SchoolOutlined}
              />
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

export default EducationInformation;
