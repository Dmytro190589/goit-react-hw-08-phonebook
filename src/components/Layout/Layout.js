import { Navigation } from "components/Navigation/Navigation";
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>

    )
}