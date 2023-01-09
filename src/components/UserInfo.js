import React from 'react'
import { useLocation } from 'react-router-dom'


const UserInfo = () => {

    const location = useLocation()
    console.log(location)

    return (
        <div style={{ fontSize: "400px" }}> {location.state.id} </div>
    )


}

export default UserInfo