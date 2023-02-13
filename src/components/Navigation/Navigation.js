import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { Navlink } from 'components/AuthMenu/AuthMenu.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectedIsLoggedIn } from 'redux/auth/selectors';
import css from './Navigation.module.css';

export const Navigation = () => {
    const isLoggedIn = useSelector(selectedIsLoggedIn)
    console.log(isLoggedIn);
    return (
        <header className={css.header}>
            <nav>
                <div className={css.wrapper}>
                    <Navlink to="/">Home</Navlink>
                    {isLoggedIn && (
                        <Navlink to="/contacts">Contacts</Navlink>
                    )}
                </div>
                {isLoggedIn ? <UserMenu /> : <AuthMenu />}
            </nav>
        </header>

    );
};

