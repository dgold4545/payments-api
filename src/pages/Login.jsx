import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div>
      <h2>Login page</h2>
    </div>
  );
};

export default Login;
