import React from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import { Menu as MenuNavbar, MenuItem } from "./Menu";
import config from "../../../config";
import { faCompass, faHome, faUserGroup, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListUser from "../../../component/ListUser";

function SideBar() {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <MenuNavbar>
        <MenuItem
          title="For you"
          to={config.routes.home}
          icon={<FontAwesomeIcon icon={faHome} />}
        />
        <MenuItem
          title="Following"
          to={config.routes.following}
          icon={<FontAwesomeIcon icon={faUserGroup} />}
        />
        <MenuItem
          title="Explore"
          to={config.routes.explore}
          icon={<FontAwesomeIcon icon={faCompass} />}
        />
        <MenuItem
          title="LIVE"
          to={config.routes.live}
          icon={ <FontAwesomeIcon icon={faVideo} />}
        />
      </MenuNavbar>
      <ListUser label={"Suggested accounts"}/>
      <ListUser label={"Following accounts"}/>
    </div>
  );
}

export default SideBar;
