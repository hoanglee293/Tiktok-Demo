import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./SideBar.module.scss";
import { Menu as MenuNavbar, MenuItem } from "./Menu";
import config from "../../../config";
import {
  faCompass,
  faHome,
  faUserGroup,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ListUser from "../../../component/ListUser";
import { Button } from "../../../component";
import {ModalContext} from "../../../component/ModalProvider"

function SideBar() {
  const cx = classNames.bind(styles);

  const context = useContext(ModalContext)

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
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
            icon={<FontAwesomeIcon icon={faVideo} />}
          />
        </MenuNavbar>
        <div className={cx("box-login")}>
          <p>Log in to follow creators, like videos, and view comments.</p>
          <Button large outline  onClick={context.handleShowModal}>
            Log in
          </Button>
        </div>
        <ListUser label={"Suggested accounts"} />
      </div>
    </div>
  );
}

export default SideBar;
