import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";

const Index: FunctionComponent = (props) => {
  console.log(props);
  return (
    <div>
      <h1>奶昔</h1>
      <Outlet />
    </div>
  );
};

export default Index;
