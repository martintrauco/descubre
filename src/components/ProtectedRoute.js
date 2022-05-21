import { useContext } from "react"
import { AuthContext } from "../context/authContext"

import { Navigate } from "react-router-dom"

export default function ProtectedRoute(props) {

    const { user } = useContext(AuthContext)

    if(user){
        // si el usuario esta legueado
        return props.children // los componentes hijo de ProtectedRoute
    }

    // Si no esta Logueado, no renderizo ningun componente y lo redirijo a login
    return (<Navigate to="/login" replace />)

}