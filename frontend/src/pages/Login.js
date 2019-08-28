import React, {useState} from 'react';
import logo from "../assets/logo.svg";
import "./Login.css"
import api from "../services/api";

export default function Login({ history }) {
    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/devs', {username})
        const { _id } = response.data

        history.push(`/dev/${_id}`)
    }

    const [username, setUsername] = useState('');

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Tindev"/>
                <input
                    type="text"
                    value={username}
                    placeholder="Digite seu usuário do github"
                    onChange={e => setUsername(e.target.value)}
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}
