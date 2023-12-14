import { useRef } from "react";
import { Link } from "react-router-dom";
import useSignup from "../hooks/useSignup";

function Signup() {
  const { signup, user, error } = useSignup();
  const displayName = useRef();
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(
      displayName.current.value,
      email.current.value,
      password.current.value
    );

    displayName.current.value = "";
    email.current.value = "";
    password.current.value = "";
  };
  return (
    <form onSubmit={handleSubmit} className="form flex flex-col gap-6">
      <h2 className="text-3xl text-stone-900">Signup</h2>
      <label>
        <input
          type="text"
          placeholder="Title:"
          ref={displayName}
          required
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </label>
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
        Signup
      </button>
      <p className="text-2xl text-orange-500">
        Sizda allaqachon Accaunt bormi:
      </p>
      <button type="button" className="signup-login-btn bg-orange-500">
        <Link to="/login">Login</Link>
      </button>
    </form>
  );
}

export default Signup;
