import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./SignUp.css"

const SignUp = () => {
    return (
        <>
            <div className="signuppage">

                <div className="leftPartSignup">
                    <p className="pageTitle">
                        Bmail Enables Web 3 communication
                    </p>

                    <p className="pageDes">
                        BMAIL is a secure and decentralized email service that leverages encryption and blockchain technology to enable Web 3 communication. With bMail, users can send and receive emails directly between their MetaMask wallets, ensuring the privacy and security of their messages.
                    </p>
                    <div className="mailIcons">
                        <div>
                            <div className="gradIcon">

                            </div>
                            <p className="iconText">
                                WebMail
                            </p>
                        </div>
                        <div>
                            <div className="gradIcon">

                            </div>
                            <p className="iconText">
                                Messages
                            </p>
                        </div>
                        <div>
                            <div className="gradIcon">

                            </div>
                            <p className="iconText">
                                Decrypted
                            </p>
                        </div>
                        <div>
                            <div className="gradIcon">

                            </div>
                            <p className="iconText">
                                AI Writer
                            </p>
                        </div>
                    </div>
                </div>

                <div className="signUpForm">

                    <p className="signUpFormTitle">
                        Create your Bmail Account
                    </p>

                    <p className="formTexts"><small>Already have a Bmail account? <Link to="/user/signin" className="text-decoration-none">Log In here</Link></small></p>

                    <Form>

                        <div className="inputGroup">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="inpField"
                                placeholder="Username"
                            />
                            <p className="bmail">@Bmail</p>
                        </div>
                        <p className="permissionText">
                            You can use letters, numbers underscores, and dashes.
                        </p>


                        <div className="passFields">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="inpField"
                                placeholder="Password"
                            />

                            <input
                                type="password"
                                name="repassword"
                                id="repassword"
                                className="inpField"
                                placeholder="Re-type Password"
                            />
                        </div>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I understand that i cannot reset my password and have stored it safely. WHh?" className="checkbox" />
                        </Form.Group>

                        <div className="checkboxes">
                            <Form.Check type="checkbox" />
                            <p className="formTexts m-0">
                                I agree to <Link className="text-decoration-none">Terms of Service</Link> and <Link className="text-decoration-none">Privacy Policy</Link>
                            </p>
                        </div>



                        <button type="submit" className="submitbtn">
                            CONTINUE
                        </button>
                    </Form>
                </div>


            </div>
        </>
    )
}

export default SignUp