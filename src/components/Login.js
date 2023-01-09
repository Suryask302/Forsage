import React from 'react'
import '../stylesheets/Login.css'
import logoSvg from "../images/loginImgs/logo.svg"
import providerOptions from '../utils/providerOptions'
import Web3Modal from 'web3modal'
import Web3 from "web3";
import { Link, useNavigate } from 'react-router-dom';
import { Form, FormGroup, Spinner, Alert } from "reactstrap"
import { useForm } from "react-hook-form"
import { useState } from 'react'
import axios from 'axios';
let w3

const Login = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const [loading, setLoading] = useState(false)
    const [autoloader, setAutoloader] = useState(false)
    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleFormSubmit = async (e) => {

        try {

            console.log('called')
            setLoading(true)
            let result = await axios({
                method: `post`,
                url: `http://localhost:4000/login`,
                data: {
                    userId: e.userId
                }
            })

            if (result) {
                const { data } = result['data']
                localStorage.setItem('user', JSON.stringify(data))
                navigate('/')
            }

        } catch (error) {

            if (error[`response`]) {
                setError(error[`response`]['data']['message'])
            }
            setError(error[`message`])

        }
    }

    const autoLogin = async () => {

        try {

            setAutoloader(true)
            let web3Modal = new Web3Modal({

                network: "mainnet",
                cacheProvider: true,
                providerOptions

            })

            const web3ModalInstance = await web3Modal.connect()
            const web3ModalProvider = new Web3(web3ModalInstance)
            w3 = web3ModalProvider

            const accounts = await w3.eth.getAccounts()
            if (!accounts || !accounts[0]) {

                setError("unable To Fetch Accounts Please Reload The Page")
                setTimeout(() => {
                    window.location.reload()
                }, 5000)

            }

            let result = await axios({
                method: `post`,
                url: `http://localhost:4000/login`,
                data: {
                    userId: accounts[0]
                }
            })

            if (result) {
                const { data } = result['data']
                localStorage.setItem('user', JSON.stringify(data))
                setTimeout(() => {
                    navigate('/')
                }, 1000)
            }



        } catch (error) {

            setAutoloader(false)
            if (error[`response`]) {
                setError(error[`response`]['data']['message'])
            }
            setError(error[`message`])
        }

    }



    return (

        <>
            <div style={{ textAlign: "center" }}>
                <img src={logoSvg} alt="logo" style={{ width: "115px", marginBottom: "20px" }} />
            </div>

            {
                err &&
                <Alert color="danger" style={{
                    textAlign: "center",
                    width: "48vw",
                    margin: "auto"
                }}>
                    {err}
                </Alert>

            }

            <div className="row" style={{ justifyContent: "center" }}>
                <div className="col-md-5 col-lg-3">
                    <div className="card" style={{ borderRadius: "10px" }}>
                        <div className="sub-card" style={{ background: "linear-gradient(180deg, #f4aaff, #619eff)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} >
                            <h2 style={{ color: "#fff" }}> Login to your <br /> Personal Account</h2>
                            <p style={{ color: "#fff", marginBottom: "25px" }}>For access to all the functions of your <br /> personal account, use automatic login</p>
                            <button
                                style={{ width: "80%", color: 'black' }}
                                onClick={autoLogin} >
                                {autoloader ? <Spinner size="sm" color="dark" /> : "Automatic Login"}
                            </button>
                        </div>
                        <div className="sub-card1" style={{ background: "#301e50", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                            <p style={{ color: "#bea3d1", marginBottom: "5px" }}>Join if you are not with us</p>
                            <h4><Link to={'/register'} style={{ color: "#ffbb00", fontSize: "21px" }}>Register in 7marvels.io </Link></h4>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 col-lg-3">
                    <div className="card" style={{ borderRadius: "10px" }}>
                        <div className="sub-card" style={{ background: "linear-gradient(180deg, #f8bd8e, #ac63f4)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px", padding: "30px 27px 30px" }}>
                            <h3 style={{ color: "#fff", fontSize: "20px" }}>To view</h3>
                            <h3 style={{ color: "#fff", fontSize: "20px" }}>Account ID or</h3>
                            <h3 style={{ color: "#fff", fontSize: "20px" }}>TRX wallet</h3>
                            <div className="row">
                                <div className="col-md-10" style={{ margin: "auto" }}>
                                    <Form onSubmit={handleSubmit(handleFormSubmit)}>
                                        <FormGroup>
                                            <input
                                                type="text"
                                                id="userId"
                                                name="userId"
                                                placeholder="enter addr"
                                                {...register("userId", {
                                                    required: true,
                                                })}
                                                style={{ width: "100%", background: "transparent", border: "2px solid #fff" }}
                                            />
                                            {errors.userId && errors.userId.type === "required" && <span style={{ color: "#fff", fontWeight: "600" }}>Please Enter Address...!</span>}
                                            <br />
                                        </FormGroup>
                                        <FormGroup>
                                            <button
                                                type='submit'
                                                style={{ width: "100%", color: "black" }}>
                                                {loading ? <Spinner size="sm" color="dark" /> : "Sign In"}
                                            </button>
                                        </FormGroup>
                                    </Form>
                                </div>
                            </div>
                            <p><a href="/" style={{ fontSize: "15px", color: "#bea3d1" }}> Cabinet example</a></p>
                        </div>

                        <div className="sub-card1" style={{ background: "#301e50", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
                            <p style={{ color: "#bea3d1", marginBottom: "5px" }}>Official chat Telegram:</p>
                            <h4><a href="/" style={{ color: "#0095ff", fontSize: "21px" }}>@7marvels_official</a></h4>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )

}
export default Login