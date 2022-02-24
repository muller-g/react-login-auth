import { AuthContext } from '../../Auth';
import { useContext } from 'react';
import styles from './Home.module.css'
import Rhnews from '../components/Rhnews';

function Home(){
    const { logout } = useContext(AuthContext);
    function handleClick(){
        logout();
    }
    return(
        <>
            <h1>Home</h1>
            <div className="container">
                <Rhnews />
            </div>
            <button className={styles.button} onClick={handleClick}>Sair</button>
        </>        
    )
}

export default Home