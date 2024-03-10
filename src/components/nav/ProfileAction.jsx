import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/actions";
import styles from "./ProfileAction.module.css";

const ProfileAction = ({ onClose }) => {
  // To keep things simple and as no backend or database requirements were mentioned, I have used local storage to store a piece of information for logged in state

  // I have used no authentication for log in for demonstration purposes and as it wasn't mentioned anywhere in the documentation

  // I am using Redux to maintain a global state for the logged in information

  const loggedIn = useSelector((state) => state.loggedIn);
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(login());
    onClose();
  };

  const handleLogout = () => {
    dispatch(logout());
    onClose();
  };

  return (
    <div className={styles.profile_modal}>
      <div className={styles.modal_controls}>
        <i className="fa-solid fa-xmark" onClick={onClose}></i>
      </div>
      <div className={styles.profile_modal_actions}>
        <button
          onClick={loggedIn ? handleLogout : handleLogin}
          className={styles.profile_action_btn}
        >
          {loggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default ProfileAction;
