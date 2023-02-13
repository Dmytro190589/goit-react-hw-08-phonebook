import { useState } from 'react'
import { useDispatch } from 'react-redux'
import authOperations from 'redux/auth/operations'
import './Registration.module.css'

export default function Registration() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const handleChange = event => {
        const tagName = event.target.name;
        const inputValue = event.target.value;

        switch (tagName) {
            case 'name':
                setName(inputValue);
                break;
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
        dispatch(authOperations.register({ name, email, password }))
        setEmail('');
        setName('');
        setPassword('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name
                <input type="text"
                    required
                    name="name"
                    autoComplete="off"
                    onChange={handleChange}
                    value={name}
                />
            </label>
            <label>
                Enter your email
                <input type="email"
                    required
                    name="email"
                    onChange={handleChange}
                    value={email}
                    autoComplete="off" />
            </label>
            <label>
                Enter your password
                <input type="password"
                    required
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Registration</button>
        </form>
    )
}