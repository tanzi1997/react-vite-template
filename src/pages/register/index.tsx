import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Login: FunctionComponent = () => {
  return (
    <div>
      <div>
        <label htmlFor="">
          Email：
          <input type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="">
          密码：
          <input type="text" />
        </label>
      </div>
      <div>
        <button type="submit">注册</button>
      </div>
      <hr />
      <div>已经拥有账户?</div>
      <Link to="/login">现在创建账户</Link>
    </div>
  );
};

export default Login;
