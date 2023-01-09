import React, { useEffect, useState } from 'react'
import blueDot from '../../images/dashboardimgs/Ellipse_blue.svg'
import greenDot from '../../images/dashboardimgs/Ellipse_green.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import axios from 'axios'
import data from '../../utils/data'

const Package100 = () => {

    let [isBuyed, setIsbuyed] = useState(false)
    const [user, setUser] = useState(null)

    const buyPackage = async () => {
        setIsbuyed(true)
        alert('package SuccessFully Buyed')

    }

    useEffect(() => {

        setUser(JSON.parse(localStorage.getItem('user')))

        async function getData() {
            try {
                let res = await axios({
                    method: 'post',
                    url: `http://localhost:4000/getUserHistory`,
                    data: {
                        userId: user[`userName`],
                        package: '40'
                    }

                })
                console.log(res[`data`])
            } catch (error) {

            }

        }
        getData()
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    console.log(data)

    return (
        <div className="cardDash" style={{ textAlign: "center", border: "1px solid #ff8100", padding: "0px" }}>
            <div
                style={{
                    background: "linear-gradient(45deg, #fc7498, #fb954e)",
                    borderTopLeftRadius: "8px",
                    borderTopRightRadius: "8px",
                    padding: "10px 15px 0px 15px"
                }}>
                <h2 style={{ color: "#fff" }}>100</h2>
            </div>
            <div style={{ padding: "15px" }}>

                <div style={{

                    display: "flex",
                    paddingBottom: "10px",
                    justifyContent: "space-around"

                }}>

                    {
                        user &&
                        <Tippy content={user.userName}>
                            <img src={isBuyed ? greenDot : blueDot} alt="" width="28px" />
                        </Tippy>
                    }

                </div>

                <div style={{ paddingBottom: "10px" }}>



                    {

                        data.map(((e, i) => (

                            <Tippy key={i} content={

                                <div style={{

                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    flexDirection: "column",
                                    width: '10rem'

                                }}>
                                    <span style={{ fontSize: '1rem' }}> custID - {e.CusId} </span>
                                    <span style={{ fontSize: '0.9rem' }}> status - {e.IsActive ? "Active" : "Inactive"} </span>
                                    <span style={{ fontSmooth: 'true' }}> {e.NoOfRegistration} </span>
                                </div>

                            } >
                                <img
                                    key={i}
                                    src={e.IsActive ? greenDot : blueDot}
                                    alt=""
                                    style={{
                                        width: "20px",
                                        paddingRight: "4px"
                                    }}
                                />
                            </Tippy>

                        )))


                    }
                </div>



                <div>
                    <p style={{ color: "#fff" }}>Total {data.length}</p>
                </div>
            </div>
            <div
                style={{

                    background: "linear-gradient(45deg, #fc7498, #fb954e)",
                    borderBottomLeftRadius: "8px", borderBottomRightRadius: "8px",
                    padding: "5px 15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around"

                }}>

                <button style={{

                    backgroundColor: "transparent",
                    borderRadius: "8px",
                    padding: "0px 10px",
                    color: "#fff",
                    cursor: 'pointer'

                }} onClick={buyPackage} > Buy Now
                </button>
                <FontAwesomeIcon icon={faAngleDown} />
            </div>

        </div>
    )
}

export default Package100
