import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUser } from "../../redux/auth/selectors";
import { toast } from "react-hot-toast";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logout())
      .unwrap()
      .then(() => toast.success("Logged out successfully!"))
      .catch(() => toast.error("Logout failed!"));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Welcome, {user.name}</p>
      <button onClick={handleLogout} className={css.button}>
        Logout
      </button>
    </div>
  );
}
