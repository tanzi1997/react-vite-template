import { FunctionComponent } from "react";

const Index: FunctionComponent = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        <li>产品</li>
        <li>价格</li>
        <li>免费注册</li>
        <li>登入</li>
        <li>联系我们</li>
        <li>简体中文</li>
      </ul>
    </div>
  );
};

export default Index;
