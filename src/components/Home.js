/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import SIgn_img from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';


const Home = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        number: "",
        password: ""
    })



    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
   

        setInpval(() => {
            return {
                ...inpval,
                [e.target.name]: e.target.value
            }
        })

    }

    const addData = (e) => {
        e.preventDefault();

        const { name, email, number, password } = inpval;

        if (name === "") {
            toast.error(' name field is requred!', {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error('email field is requred', {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error('plz enter @', {
                position: "top-center",
            });
            
        } else if (!email.includes(".com")) {
            toast.error('plz enter .com', {
                position: "top-center",
            });
        }
        else if (number === "") {
            toast.error('number field is requred', {
                position: "top-center",
            });
        } 
        
        else if (password === "") {
            toast.error('password field is requred', {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error('password length greater five', {
                position: "top-center",
            });
        } else {
            
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));

        }

    }

    return (
        <>
            <div className="container mt-2">
                <section className='d-flex justify-content-between'>
                    <SIgn_img />
                    <div className="right_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control onChange={getdata}maxLength="10" minLength="6"  name='number' type="text" placeholder="Enter number"/>
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6 bg-black' onClick={addData}  type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>

                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Home