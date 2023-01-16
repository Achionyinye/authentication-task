import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../../Context/AuthContext";
import { Link , useNavigate} from "react-router-dom"


function Signup() {
    const navigate = useNavigate();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


     function handleSubmit(e) {
        e.preventDefault();
        console.log("name", nameRef.current.value)

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match");
        }

        try {
            setError("");
            setLoading(true);
            localStorage.setItem("Username", nameRef.current.value)
            signup(emailRef.current?.value, passwordRef.current?.value);
            navigate("/otp")
            
        } catch {
            setError("Failed to create an account");
        }

        setLoading(false);
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign Up </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" ref={nameRef} required />
                        </Form.Group>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <br />
                        <Button disabled={loading} className="w-100" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
        // <div
        //   style={{
        //     backgroundColor: "#A9BA",
        //     textAlign: "center",
        //     margin: "10% 25% 25% 25%",
        //     padding: "5rem 7rem",
        //     boxShadow: "1px 1px 3px 1px rgb(192,192,192)",
        //     width: "50%",
        //   }}
        // >
        //   <img alt="Logo" className="justify-content-center pb-3" />
        //   <h4 className="mb-4">REGISTER</h4>
        //   <form className="justify-content-center">
        //     <div className="d-flex justify-content-around  ">
        //       <input
        //         style={{ fontSize: "12px" }}
        //         className="form-control text-sm"
        //         placeholder="First Name"
        //       />
        //       <input
        //         style={{ fontSize: "12px" }}
        //         className="form-control text-sm"
        //         placeholder="Last Name"
        //       />
        //     </div>

        //     <input
        //       style={{ fontSize: "12px" }}
        //       className="form-control"
        //       placeholder="Email"
        //     />
        //     {/* <label style={{ float: "left", fontSize: "12px" }}>Email</label> */}

        //     <input
        //       style={{ fontSize: "12px" }}
        //       className="form-control"
        //       placeholder="Password"
        //           />
        //           <p>By creating an account, you agree to our <span> Terms & Conditons</span> </p>
        //     <button className="form-control bg-dark text-white mt-4">
        //       Create account
        //     </button>
        //   </form>
        // </div>
    );
}

export default Signup;
