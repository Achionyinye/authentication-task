import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function OTP(props) {
    const otpRef = useRef();
    // const { login } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

     function handleSubmit(e) {
        e.preventDefault();

        if (otpRef.current.value !== "00000") {
            return setError("Invalid OTP");
        }

        try {
            setError("");
            setLoading(true);
            navigate("/login")
        } catch {
            setError("Failed");
        }

        setLoading(false);
    };


  return (
      <Card>
          <Card.Body>
              <h2 className="text-center mb-4"> OTP </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                  <Form.Group id="otp">
                      <Form.Label>Enter OTP</Form.Label>
                      <Form.Control type="password" ref={otpRef} required />
                  </Form.Group>
                  <br />
                  <Button disabled={loading} className="w-100" type="submit">
                      Enter
                  </Button>
              </Form>
          </Card.Body>
      </Card>
  )
}

export default OTP