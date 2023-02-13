import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/operations';
import { selectedUser } from 'redux/auth/selectors';
import css from './UserMenu.module.css';
export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectedUser);

    return (
        <div className={css.wrapper}>
            <p className={css.email}>Welcome,
                {user.email}
            </p>
            <button type="button"
                className={css.btn}
                onClick={() => dispatch(authOperations.logOut())}
            >
                Logout
            </button>
        </div>
    );
};
