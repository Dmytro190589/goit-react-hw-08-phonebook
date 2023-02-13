import { AuthMenu } from "components/AuthMenu/AuthMenu";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import css from '../Navigation/Navigation.module.css';
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <header className={css.header}>
                <Navigation />
                <UserMenu />
                <AuthMenu />
            </header>
            <Outlet />
        </>

    )
}