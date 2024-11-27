import React, { useState } from 'react';
import { Card, Form, Row, Col, Button } from 'react-bootstrap';
import { PersonOutlined, CalendarTodayOutlined, PhoneOutlined, MailOutline, LocationOnOutlined } from '@mui/icons-material';
import { FormInput } from './FormInput';

const ContactInformation = ({ initialData, onSave, onCancel }) => {
  const [contactInfo, setContactInfo] = useState(initialData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSave = () => {
    onSave(contactInfo);
  };

  const handleCancel = () => {
    setContactInfo(initialData);
    onCancel();
  };

  return (
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
                onChange={handleInputChange}
                IconComponent={PersonOutlined}
              />
              <FormInput
                label="Ngày sinh"
                name="dob"
                value={contactInfo.dob}
                onChange={handleInputChange}
                IconComponent={CalendarTodayOutlined}
              />
              <FormInput
                label="Số điện thoại"
                name="phone"
                value={contactInfo.phone}
                onChange={handleInputChange}
                IconComponent={PhoneOutlined}
              />
              <FormInput
                label="Email"
                name="email"
                value={contactInfo.email}
                onChange={handleInputChange}
                IconComponent={MailOutline}
              />
            </Col>
            <Col sm={6}>
              <FormInput
                label="Thành phố"
                name="city"
                value={contactInfo.city}
                onChange={handleInputChange}
                IconComponent={LocationOnOutlined}
              />
              <FormInput
                label="Địa chỉ"
                name="address"
                value={contactInfo.address}
                onChange={handleInputChange}
                IconComponent={LocationOnOutlined}
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

export default ContactInformation;
