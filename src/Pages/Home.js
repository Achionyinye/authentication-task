import React, {useState} from 'react'
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from "react-router-dom";


function Home() {
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    console.log(currentUser)


    const handleLogout = () => {
        navigate("/login")
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Profile </h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <strong>User name: </strong>{currentUser.name}<br />
                    <strong>Email: </strong>{currentUser.email}
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button type='submit' onClick={handleLogout}>Log Out</Button>
            </div>
        </>
    )
}

export default Home
