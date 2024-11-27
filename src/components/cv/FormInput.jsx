import React from "react";
import { Form } from "react-bootstrap";

export const FormInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  IconComponent = null,
}) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{label}</Form.Label>
      <div className="input-group">
        {IconComponent && (
          <span className="input-group-text">
            <IconComponent />
          </span>
        )}
        {type === "textarea" ? (
          <Form.Control
            as="textarea"
            rows={3}
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <Form.Control
            type={type}
            name={name}
            value={value}
            onChange={onChange}
          />
        )}
      </div>
    </Form.Group>
  );
};
