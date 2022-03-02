// import necessary utility from rrd
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const isSignIn = true

    return (
        isSignIn ? <Outlet /> : <Navigate to="/signin" />
    )
}


export default PrivateRoute
