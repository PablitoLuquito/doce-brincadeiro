import { Link, NavLink } from "react-router-dom";

import logo from "../assets/logo.jpg";
import icon from "../assets/cooking.svg";

import classes from "./Home.module.css";

const Home = () => {
  return (
    <section className={classes.home}>
      <img src={logo} alt="Logomarca da Ateliê Doce Brincadeiro" />
      <nav>
        <Link className={classes.active} to="/signup">
          Sign Up
        </Link>
        <Link to="/login">Log In</Link>
      </nav>
    </section>
  );
};

export default Home;
