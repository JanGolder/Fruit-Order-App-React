import classes from './Button.module.css'

const Button = (props)=>{

    return (
        <button onClick={props.onClose} disabled={props.disabled} className={`${classes.button} ${props.isWhite ? classes.white : ''}`}>{props.children}</button>
    );
}

export default Button;