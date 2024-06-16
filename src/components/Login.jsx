import { UserForm } from "./UserForm";

export const Login = ({ setUser, setFavouriteCities }) => {
  return (
    <UserForm
      action={"Login"}
      setUser={setUser}
      setFavouriteCities={setFavouriteCities}
    />
  );
};
