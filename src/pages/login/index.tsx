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
        <button type="submit">登录</button>
        <a>忘记密码</a>
      </div>
      <hr />
      <div>还没有用户</div>
      <Link to="/register">现在创建账户</Link>
    </div>
  );
};

export default Login;
