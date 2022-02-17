import styles from './Input.module.css'

function Input({type, name, placeholder, value, setProps}){
    return(
        <>
            <input className={styles.input} type={type} name={name} id={name} placeholder={placeholder} value={value} onChange={(e) => setProps(e.target.value)}/>  
        </>
    )
}

export default Input