import { useState } from 'react'
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/operations';
import './LogIn.module.css'
export default function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const handleChange = event => {
        const tagName = event.target.name;
        const inputValue = event.target.value;

        switch (tagName) {
            case 'email':
                setEmail(inputValue);
                break;
            case 'password':
                setPassword(inputValue);
                break;
            default:
                return;
        }
    };
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(authOperations.logIn({ email, password }))
        setEmail('');
        setPassword('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your email
                <input type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={email}
                />
            </label>
            <label>
                Enter your password
                <input type="password"
                    required
                    onChange={handleChange}
                    value={password}
                    autoComplete='off'
                    name="password" />
            </label>
            <button type="submit">Log in</button>
        </form>
    )
}