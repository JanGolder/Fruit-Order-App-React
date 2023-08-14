import Footer from "./Footer";
import Header from "./Header";
import classes from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className={classes['error-page']}>
          <h1>An error occured!</h1>
          <p>Could not find this page!</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;
