import { Outlet } from "react-router"

function Header () {
    return (
        <div>
            <div>Header</div>
            <Outlet/>
        </div>
    )
}
export default Header