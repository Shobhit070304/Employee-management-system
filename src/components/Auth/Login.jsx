import { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="border-2 w-[400px] border-emerald-600 rounded-xl p-20">
        <h1 className="w-full text-4xl font-bold text-center mb-8">Login</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Enter email"
            className="px-4 py-2 text-white rounded-full outline-none bg-transparent border-2 border-emerald-300 "
          />
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            placeholder="Enter password"
            className="px-4 py-2 text-white rounded-full outline-none my-2 bg-transparent border-2 border-emerald-300"
          />
          <button className="py-2 rounded-full outline-none px-10 mt-2 bg-transparent border-2 text-white font-semibold bg-emerald-300">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
