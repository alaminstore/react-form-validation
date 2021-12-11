import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Auth from "./components/Auth";
import RegisterForm from "./components/RegisterForm";
import { useForm } from "react-hook-form";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="ui container">
      <Header />
      <Auth />
      <div className="clr"></div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <RegisterForm />
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="ui form w-50 position">
          <div className="field">
            <label htmlFor="username" className="white">
              UserName
            </label>
            <input
              type="text"
              name="username"
              className="white"
              placeholder="User Name"
              {...register("username", { required: true })}
            />
          </div>
          <p>{errors.username && <span>User Name is required</span>}</p>
          <div className="field">
            <label htmlFor="email" className="white">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="white"
              placeholder="Email Here"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "This is not a valid email",
                },
              })}
            />
          </div>
          <p>{errors.email?.message}</p>
          <div className="field">
            <label htmlFor="password" className="white">
              Password
            </label>
            <input
              className="white"
              type="password"
              name="password"
              placeholder="Your Password"
              {...register("password", {
                required: "Password field is required",
                maxLength: {
                  value: 10,
                  message: "Password cannot exceed more than 10 characters",
                },
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
              })}
            />
          </div>
          <p>{errors.password?.message}</p>
          <button type="submit" className="fluid ui button blue">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default App;
