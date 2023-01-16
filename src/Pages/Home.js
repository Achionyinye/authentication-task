import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useAuth } from '../Context/AuthContext'
import { useNavigate } from "react-router-dom";


function Home() {
    const userName = localStorage.getItem("Username")

    const { currentUser } = useAuth()
    const navigate = useNavigate()


    const handleLogout = () => {
        navigate("/login")
    }
    
    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Profile </h2>
                    <strong>User name: </strong>{userName}<br />
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
