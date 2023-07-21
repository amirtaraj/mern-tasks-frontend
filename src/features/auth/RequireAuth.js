import { useLocation, Navigate, Outlet } from "react-router-dom"
//import useAuth from "../../hooks/useAuth"

const RequireAuth = ({ allowedRoles }) => {
    const location = useLocation()
    //const { roles } = useAuth()

    const content = (
        allowedRoles.length === 0
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )

    return content
}

export default RequireAuth