import { Link } from "react-router-dom";
import FormInput from "../components/FormInput";
import Button from "../UI/Button";

const Signup = () => {
  return (
    <>
      <Link to="/home">
        <button>Voltar</button>
      </Link>
      <h1>Signup</h1>
      <form>
        <FormInput
          for="signup-email"
          label="Email"
          placeholder="Enter email..."
          type="email"
          name="email"
          id="signup-email"
        />
        <FormInput
          for="signup-password"
          label="Password"
          placeholder="Enter password..."
          type="password"
          name="password"
          id="signup-password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </>
  );
};

export default Signup;
