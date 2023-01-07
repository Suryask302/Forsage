import React, { useEffect, useState } from 'react'
import providerOptions from '../utils/providerOptions'
import Web3Modal from 'web3modal'
import Web3 from "web3";
import { Link } from 'react-router-dom'
import '../stylesheets/RegistrationForm.css'
import { useForm } from "react-hook-form";
import { Form, FormGroup, Spinner, Alert } from "reactstrap"
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
let w3

const RegistrationForm = () => {

    const [acc, setAcc] = useState([])
    const [err, setError] = useState(null)
    const { register, handleSubmit, formState: { errors } } = useForm()
    let [loading, setLoading] = useState(false)
    const navigate = useNavigate()


    const handleFormSubmit = async (e) => {

        try {

            setLoading(true)
            let result = await axios({
                method: `post`,
                url: `http://localhost:4000/register`,
                data: {
                    SponserID: e.sponserId,
                    UserID: e.address
                }
            })

            if (result) {
                setLoading(false)
                navigate('/login')
            }

        } catch (error) {
            setLoading(false)
            setError(error[`response`]['data']['message'])
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    }

    useEffect(() => {

        (async () => {

            try {

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

                setAcc(accounts[0])

            } catch (error) {
                setError(error.message)
            }

        })()
    })



    return (


        err ?
            <Alert color="danger" style={{
                textAlign: "center",
                width: "48vw",
                margin: "auto"
            }}>
                {err}
            </Alert>
            :

            <div className="container">
                <div className="screen">
                    <div className="screen__content">

                        <Form className="login" onSubmit={handleSubmit(handleFormSubmit)}>
                            <FormGroup>

                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input
                                        style={{ display: 'block' }}
                                        type="text"
                                        className="login__input"
                                        placeholder="Sponser Id"
                                        name='sponserId'
                                        {...register("sponserId", {
                                            required: "Required",
                                        })}
                                    />
                                    {errors.sponserId && errors.sponserId.type === "required" && <span style={{ color: "black", fontWeight: "600" }}>Please Enter Address...!</span>}
                                </div>
                                
                            </FormGroup>

                            <FormGroup>

                                <div className="login__field" >
                                    <i className="login__icon fas fa-lock"></i>
                                    <input
                                        type="text"
                                        readOnly
                                        className="login__input"
                                        value={acc ? acc : "Address"}
                                        name="address"
                                        {...register("address", {
                                            required: "Required",
                                        })}
                                    />
                                </div>

                            </FormGroup>

                            <FormGroup>
                                <button className="button login__submit" type='submit'>
                                    {loading ? <Spinner size="sm" color="dark" /> : <span className="button__text">Submit</span>}
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>
                            </FormGroup>

                        </Form>

                        <div className="social-login">
                            <Link to={'/login'} style={{
                                textDecoration: "none",
                                color: "white"
                            }}>
                                <h3 >log in</h3>
                            </Link>
                            <div className="social-icons">
                            </div>
                        </div>
                    </div>
                    <div className="screen__background">
                        <span className="screen__background__shape screen__background__shape4"></span>
                        <span className="screen__background__shape screen__background__shape3"></span>
                        <span className="screen__background__shape screen__background__shape2"></span>
                        <span className="screen__background__shape screen__background__shape1"></span>
                    </div>
                </div>
            </div>

    )
}

export default RegistrationForm