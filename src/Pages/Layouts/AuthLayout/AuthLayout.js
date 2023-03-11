import { Outlet } from "react-router-dom"
import AuthFooter from "../../Auth/AuthFooter/AuthFooter"
import AuthHeader from "../../Auth/AuthHeader/AuthHeader"
import "./AuthLayout.css"

const AuthLayout = () => {
    return (
        <>
            <AuthHeader />
            <div className="outlet">
                <Outlet />
            </div>
            <AuthFooter />
        </>
    )
}

export default AuthLayout