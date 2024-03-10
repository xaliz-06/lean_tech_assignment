import { useState } from "react";

import Logo from "../ui/Logo";
import profile_img from "../../assets/top_profile_img.png";

import styles from "./Navbar.module.css";

import ProfileAction from "./ProfileAction";

const actions = [
  {
    action_name: "Learn",
  },
  {
    action_name: "Practice",
  },
];

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const actions_container = actions.map((action) => {
    return (
      <div className={styles.action_container} key={action.action_name}>
        <h5 className={styles.action_name_text}>{action.action_name}</h5>
        <i className="fa-solid fa-angle-down"></i>
      </div>
    );
  });

  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_container}>
        <Logo />
      </div>
      <div className={styles.nav_actions_container}>
        <div className={styles.nav_actions}>{actions_container}</div>
        <div className={styles.nav_profile}>
          <div className={styles.profile_img_container}>
            <img
              src={profile_img}
              alt="profile"
              className={styles.profile_img}
              onClick={toggleModal}
            />
          </div>
          {showModal && <ProfileAction onClose={toggleModal} />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
