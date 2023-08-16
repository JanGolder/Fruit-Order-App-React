import useInput from "../hooks/use-input";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./Login.module.css";

const Login = ({loginHandler}) => {
  const {
    inputValue: emailInputValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  const {
    inputValue: passwordInputValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    inputBlurHandler: passwordBlurHandler,
    valueChangeHandler: passwordChangeHandler,
    reset: passwordReset,
  } = useInput((value) => value.trim().length > 4);

  let formIsValid = false;
  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    emailReset();
    passwordReset();
    loginHandler();
  };

  const emailInputClasses = emailHasError ? "invalid" : "";
  const passwordInputClasses = passwordHasError ? "invalid" : "";

  return (
    <section className={classes.login}>
      <Card>
        <h1>Log in and enjoy fresh products!</h1>
        <p>(in demo version you can use any validated data)</p>
        <form onSubmit={submitHandler}>
          <div className={classes["input-wrapper"]}>
            <input
              className={emailInputClasses}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              placeholder="Email address"
              type="text"
              value={emailInputValue}
            />
            {emailHasError && <p>Please write correct email (add @)</p>}
          </div>
          <div className={classes["input-wrapper"]}>
            <input
              className={passwordInputClasses}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              placeholder="Password"
              type="password"
              value={passwordInputValue}
            />
            {passwordHasError && <p>Please write correct password (at least 5 signs)</p>}
          </div>
          <Button disabled={!formIsValid}>Log in</Button>
        </form>
      </Card>
    </section>
  );
};

export default Login;
