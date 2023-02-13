import { Navlink } from 'components/AuthMenu/AuthMenu.styled';
// import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
    // const { isLoggedIn } = useAuth();

    return (
        <nav>
            <Navlink className={css.link} to="/">
                Home
            </Navlink>
            {/* {isLoggedIn && ( */}
            <Navlink className={css.link} to="/contacts">
                Contacts
            </Navlink>
            {/* //   )
      } */}
        </nav>
    );
};