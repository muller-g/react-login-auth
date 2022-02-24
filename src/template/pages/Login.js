import Input from '../components/Input';
import styles from './Login.module.css';
import axios from 'axios';
import { useState, useContext } from 'react';
import { AuthContext } from '../../Auth';
import logo from '../../img/grupostra_horizontal.png'
import openEye from '../../img/eye.png'
import closedEye from '../../img/closedeye.png'

function Login(){
    const { authenticated, login } = useContext(AuthContext);
    const [eyeImg, setEyeImg] = useState(openEye);

    function handdleClick(){
        if(eyeImg == openEye){
            setEyeImg(closedEye);
            document.querySelector('input:nth-child(4)').type = "";
        } else {
            setEyeImg(openEye)
            document.querySelector('input:nth-child(4)').type = "password";
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        const data  = {
            identifier: user,
            password: pass
        }
        axios.get('https://communicationadmin.grupostra.com/api/auth/local', {
            identifier: 'teste',
            password: 'teste123'
        })
        .then(response => { console.log(response)
             //if(response.data.jwt != "" && response.data.user.confirmed == true){
                //login(user, pass);
            // } 
         }) .catch(error => 
                alert("Usuário ou senha incorretos")
            )    
    }
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    return(
        <div className={styles.container}>
            <div className={styles.form_container}>
                <img src={logo} alt="Logo Grupo" srcset="" />
                <p>Bem Vindo(a), entre com seu usuário e senha.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Usuário</label>
                        <Input type="text" name="username" id="username" placeholder="Usuário" setProps={setUser} value={user}/>
                        <label htmlFor="password">Senha</label>
                        <Input type="password" name="password" id="password" placeholder="Senha" setProps={setPass} value={pass}/>
                        <span onClick={handdleClick}><img src={eyeImg} className={styles.eyeImg} /></span>
                        <Input className="btn-hover" type="submit" name="submit" id="submit" value="Entrar" />
                    </form>
                </div>
        </div>
    )
}

export default Login