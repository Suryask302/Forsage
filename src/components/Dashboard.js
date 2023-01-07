import React from 'react'
import '../stylesheets/Dashboard.css'
import blueDot from '../images/dashboardimgs/Ellipse_blue.svg'
import greenDot from '../images/dashboardimgs/Ellipse_green.svg'
import logoImg from '../images/dashboardimgs/logo.svg'
import Package20 from './micros/Package20'
import Package50 from './micros/Package50'
import Package100 from './micros/Package100.js'



const Dashboard = () => {

    return (

        <div className="row" style={{ marginTop: "3%" }}>
            <div className="col-lg-3">
                <div style={{ marginBottom: "18px" }}>
                    <div className="cardDash" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <img src={logoImg} alt="" width="100" />
                        <h2 style={{ color: "#00c21a" }}>ID 3543</h2>
                        <p style={{ color: "#fff" }}>Lorem ipsum</p>
                        <button className='dashBoardBTN'>100 USDT</button>
                    </div>
                </div>
                <div style={{ marginBottom: "18px" }}>
                    <div className="cardDash" style={{ flexDirection: "column", alignItems: "center" }}>
                        <div
                            style={{ border: "1px solid #ee4cff", width: "100%", padding: "15px", borderRadius: "8px", textAlign: "center", marginBottom: "15px" }}>
                            <p style={{ color: "#fff" }}>Deposit Wallet</p>
                            <h2 style={{ color: "#ffaa00" }}>Tbac: 10</h2>
                            <h3 style={{ color: "#fff" }}>USD 600</h3>
                        </div>
                        <div
                            style={{ border: "1px solid #ffac47", width: "100%", padding: "15px", borderRadius: "8px", textAlign: "center" }}>
                            <p style={{ color: "#fff" }}>Income Wallet</p>
                            <h2 style={{ color: "#ffaa00" }}>Tbac: 10</h2>
                            <h3 style={{ color: "#fff" }}>USD 600</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-9">
                <div className="cardDash">
                    <div className="row">

                        <div className="col-lg-2">
                            <Package20 />
                            <br />
                            <br />
                            {/* Place For Package Component */}
                        </div>

                        <div className="col-lg-2">
                            <Package50 />
                            <br />
                            <br />
                            {/* Place For Package Component */}
                        </div>

                        <div className="col-lg-2">
                            <Package100 />
                            <br />
                            <br />
                            {/* Place For Package Component */}
                        </div>

                    </div>
                    <div className="row" style={{ justifyContent: "space-evenly" }}>

                        <div className="col-lg-2" style={{ display: "flex", alignItems: "flex-start" }}>
                            <img src={greenDot} alt="" width="22px" />
                            <p style={{ color: "#fff", marginLeft: "10px" }}>Legends1</p>
                        </div>

                        <div className="col-lg-2" style={{ display: "flex", alignItems: "flex-start" }}>
                            <img src={blueDot} alt="" width="22px" />
                            <p style={{ color: "#fff", marginLeft: "10px" }}>Legends2</p>
                        </div>

                        <div className="col-lg-2" style={{ display: "flex", alignItems: "flex-start" }}>
                            <img src={greenDot} alt="" width="22px" />
                            <p style={{ color: "#fff", marginLeft: "10px" }}>Legends3</p>
                        </div>

                        <div className="col-lg-2" style={{ display: "flex", alignItems: "flex-start" }}>
                            <img src={blueDot} alt="" width="22px" />
                            <p style={{ color: "#fff", marginLeft: "10px" }}>Legends4</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Dashboard