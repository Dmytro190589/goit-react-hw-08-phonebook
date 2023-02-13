import css from './UserMenu.module.css';
export const UserMenu = () => {
    // const dispatch = useDispatch();
    // const { user } = useAuth();

    return (
        <div className={css.wrapper}>
            <p className={css.email}>Welcome,
                {/* {user.email} */}
            </p>
            <button type="button"
                className={css.btn}
            // onClick={() => dispatch(logOut())}
            >
                Logout
            </button>
        </div>
    );
};
