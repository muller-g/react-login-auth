import { AuthContext } from '../../Auth';
import { useContext } from 'react';

function Home(){
    const { authenticated, logout } = useContext(AuthContext);
    function handleClick(){
        logout();
    }
    return(
        <>
            <p>Home</p>
            <button onClick={handleClick}>Sair</button>
        </>        
    )
}

export default Home