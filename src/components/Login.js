import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from './Login.module.css';

const Login = ()=>{

return (
    <section className={classes.login}>
        <Card>
           <h1>Log in and enjoy fresh products!</h1>
           <form>
                <input placeholder="Email address" type="email"/>
                <input placeholder="Password" type="text"/>
                <Button>Log in</Button>
           </form>
        </Card>
    </section>
)
};

export default Login;