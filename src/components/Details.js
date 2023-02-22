import React, { useEffect, useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useNavigate();

    const [show, setShow] = useState(false);

    // var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("useryoutube");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 1000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1>detials page</h1>
                        <h1>{logindata[0].name}</h1>
                        <Button onClick={userlogout}>LogOut</Button>

                {
                    
                    <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title> </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ul>
                                    <li>{logindata[0].name}</li>
                                    <li>{logindata[0].email}</li>
                                    <li>{logindata[0].password}</li>
                                </ul>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                }   
                     
                    </>
            }
        </>
    )
}

export default Details






















