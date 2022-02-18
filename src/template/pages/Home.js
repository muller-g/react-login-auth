import { AuthContext } from '../../Auth';
import { useContext } from 'react';
import styles from './Home.module.css'

function Home(){
    const { authenticated, logout } = useContext(AuthContext);
    function handleClick(){
        logout();
    }
    return(
        <>
            <p>Home</p>
            <button className={styles.button} onClick={handleClick}>Sair</button>
        </>        
    )
}

export default Home