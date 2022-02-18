import Input from '../components/Input';
import styles from './Login.module.css';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../../Auth';

function Login(){
    const { authenticated, login } = useContext(AuthContext);

    function handleSubmit(e){
        e.preventDefault();
        const data  = {
            identifier: user,
            password: pass
        }
        axios.post('http://localhost:1337/api/auth/local', data)
        .then(response => {
             if(response.data.jwt != "" && response.data.user.confirmed == true){
                login(user, pass);
             } 
         }) .catch(error => 
                alert("Usuário ou senha incorretos")
            )    
    }
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return(
        <div className={styles.container}>
            <div className={styles.container_form}>
                <form onSubmit={handleSubmit}>
                    <Input type="text" name="username" id="username" placeholder="Nome de Usuário" setProps={setUser} value={user}/>
                    <Input type="password" name="password" id="password" placeholder="Senha de Usuário" setProps={setPass} value={pass}/>
                    <Input type="submit" name="submit" id="submit" value="Logar" />
                </form>
            </div>
        </div>
    )
}

export default Login