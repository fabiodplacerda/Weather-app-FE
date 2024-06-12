import { UserForm } from "./UserForm";

export const Login = ({ setUser }) => {
  return <UserForm action={"Login"} setUser={setUser} />;
};
