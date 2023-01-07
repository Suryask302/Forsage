
import React from 'react'
import '../stylesheets/Register.css'
import logo from '../images/registerImgs/logo.svg'
import mobileSvg from '../images/registerImgs/mobile.svg'
import pcSvg from "../images/registerImgs/pc.svg"
import manualSvg from '../images/registerImgs/mobile.svg'

import { Link } from 'react-router-dom'



const Register = () => {

  return (

    <>

      <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
        <img src={logo} alt="" style={{ width: "115px", marginBottom: "20px" }} />
      </div>

      <div className="row" style={{
        justifyContent: "center"
      }}>

        <div className="col-md-5 col-lg-3">
          <div className="card" style={{
            borderRadius: "10px"
          }}>

            <div className="sub-card" style={{ background: "linear-gradient(180deg, #f4aaff, #619eff)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
              <h2 style={{ color: "#fff" }}>Automatic <br /> Registration</h2>
              <p style={{ color: "#fff", marginBottom: "56px" }}>Check the ID of Your invitee.</p>
              <Link to={'/registrationFrom'}><button>Automatic Registration</button></Link>
            </div>

            <div className="sub-card1" style={{ background: "#301e50", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
              <p style={{ color: "#bea3d1", marginBottom: "5px" }}>If You are already with us, just log in</p>
              <h4><Link to={'/login'} style={{ color: "#ffbb00" }}>Log in to 7marvels.io </Link> </h4>
            </div>

          </div>
        </div>

        <div className="col-md-5 col-lg-3">
          <div className="card" style={{ borderRadius: "10px" }}>
            
            <div className="sub-card" style={{ background: "linear-gradient(180deg, #f8bd8e, #ac63f4)", borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }}>
              <h2 style={{ color: "#fff" }}>Instructions </h2>
              <h4 style={{ color: "#fff", fontSize: "20px" }}>Registrations</h4>
              <div className="row" style={{ marginTop: "40px" }}>

                <div className="col-md-4">
                  <img src={mobileSvg} alt="" />
                  <p style={{ color: "#fff", marginBottom: "0px" }}>Mobile Registration</p>
                </div>

                <div className="col-md-4">
                  <img src={pcSvg} alt="" />
                  <p style={{ color: "#fff", marginBottom: "0px" }}>PC Registration</p>
                </div>

                <div className="col-md-4">
                  <img src={manualSvg} alt="" />
                  <p style={{ color: "#fff", marginBottom: "0px" }}>Manual Registration</p>
                </div>

              </div>
            </div>

            <div className="sub-card1" style={{ background: "#301e50", borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px" }}>
              <p style={{ color: "#bea3d1", marginBottom: "5px" }}>Official chat Telegram:</p>
              <h4><a href="/" style={{ color: "#0095ff" }}>@7marvels_official</a></h4>
            </div>

          </div>
        </div>

      </div>

    </>


  )

}

export default Register