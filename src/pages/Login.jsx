// import hooks
import { useRef } from "react";
import useLogin from "../hooks/useLogin";
// import RRD
import { Link } from "react-router-dom";

function Login() {
  const { login, user, error } = useLogin();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email.current.value, password.current.value);

    email.current.value = "";
    password.current.value = "";
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form flex flex-col gap-6">
        <h2 className="text-3xl text-stone-900">Login</h2>
        <label>
          <input
            type="email"
            placeholder="*******@gmail.com"
            ref={email}
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>
        <label>
          <input
            type="password"
            placeholder="********"
            ref={password}
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
        </label>

        <button type="submit" className="signup-login-btn">
          Login
        </button>
        <p className="text-2xl text-red-700">Sizda Accaunt yo'qmi:</p>
        <button type="button" className="signup-login-btn bg-red-500">
          <Link to="/signup">Signup</Link>
        </button>
      </form>
    </>
  );
}

export default Login;
