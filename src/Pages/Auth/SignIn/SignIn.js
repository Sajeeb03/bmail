import './SignIn.css'
import { Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignIn = () => {
    return (
        <>
            <div className="signinpage">

                <div className="">
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

                <div className="signInForm">
                    <p className="signUpFormTitle">
                        Log in to Bmail
                    </p>

                    <p className="formTexts">
                        <small>Don't have an account?
                            <Link to="/user/signup"
                                className="text-decoration-none"> Create an account here
                            </Link>
                        </small>
                    </p>

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

                        <div className="passFieldslogin">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="inpField"
                                placeholder="Password"
                            />
                        </div>
                        <Link className="text-decoration-none forgot">Forgot Password</Link>

                        <button type="submit" className="submitbtn">
                            CONTINUE
                        </button>
                    </Form>
                </div>


            </div>
        </>
    )
}

export default SignIn