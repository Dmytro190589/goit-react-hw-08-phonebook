import { Navlink } from './AuthMenu.styled.js';
export const AuthMenu = () => {
    return (
        <div>
            <Navlink to='/login'>Log In</Navlink>
            <Navlink to='/register'>Registration</Navlink>
        </div>)
}