import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { WorkOutline, MonetizationOnOutlined, LocationOnOutlined, MenuBookOutlined, MailOutline } from '@mui/icons-material';
import { FormInput } from './FormInput';

const JobInformation = ({ initialData, onSave, onCancel }) => {
  const [jobInfo, setJobInfo] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobInfo({ ...jobInfo, [name]: value });
  };

  const handleSave = () => {
    onSave(jobInfo);
  };

  const handleCancel = () => {
    setJobInfo(initialData);
    onCancel();
  };

  return (
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
                onChange={handleInputChange}
                IconComponent={WorkOutline}
              />
              <FormInput
                label="Lĩnh vực"
                name="field"
                value={jobInfo.field}
                onChange={handleInputChange}
                IconComponent={WorkOutline}
              />
              <FormInput
                label="Mức lương mong muốn"
                name="desiredSalary"
                value={jobInfo.desiredSalary}
                onChange={handleInputChange}
                IconComponent={MonetizationOnOutlined}
              />
              <FormInput
                label="Địa điểm làm việc"
                name="location"
                value={jobInfo.location}
                onChange={handleInputChange}
                IconComponent={LocationOnOutlined}
              />
            </Col>
            <Col sm={6}>
              <FormInput
                label="Vị trí"
                name="position"
                value={jobInfo.position}
                onChange={handleInputChange}
                IconComponent={WorkOutline}
              />
              <FormInput
                label="Lương hiện tại"
                name="currentSalary"
                value={jobInfo.currentSalary}
                onChange={handleInputChange}
                IconComponent={MonetizationOnOutlined}
              />
              <FormInput
                label="Từ khóa công việc"
                name="keywords"
                value={jobInfo.keywords}
                onChange={handleInputChange}
                IconComponent={MenuBookOutlined}
              />
              <FormInput
                label="Email người giới thiệu"
                name="referralEmail"
                value={jobInfo.referralEmail}
                onChange={handleInputChange}
                IconComponent={MailOutline}
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

export default JobInformation;
