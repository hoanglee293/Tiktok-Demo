import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; 
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAsia,
  faGear,
  faKeyboard,
  faUser,
  faBookmark,
  faCoins,
  faArrowRightFromBracket,
  faEllipsisVertical
} from "@fortawesome/free-solid-svg-icons";
//
import config from "../../../config";
import styles from "./Header.module.scss";
import Search from "../../Search";
import Button from "../../../component/Button";
import MenuBox from "../../Menu";
import { LogoSvg, MessageSvg, Notify } from "../../../assets/svg";
import AvtDefault from "../../../assets/images/avatar-default.jpeg";
import { ModalContext } from "../../../component/ModalProvider";


const items = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "jp",
          title: "Japan",
        },
        {
          code: "kr",
          title: "Korean",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
          children: {
            title: "Tieengs viet",
            data: [
              {
                code: "en",
                title: "English 1",
              },
              {
                code: "vi",
                title: "Tiếng Việt 1",
              },
            ],
          },
        },
        {
          code: "usuk",
          title: "USUK",
        }
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and Help",
    to: "/",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keyboard shortcuts",
  },
];

const userMenu = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: "View Profile",
    to: "profile",
  },
  {
    icon: <FontAwesomeIcon icon={faBookmark} />,
    title: "Favorite",
    to: "favorite",
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: "Get coin",
    to: "get-coin",
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: "Settings",
    to: "settings",
  },
  ...items,
  {
    icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    title: "Log out",
    to: "logout",
    separate: true,
  }
]
const handleChange = (item) => {
  console.log(item.title);
};
const cx = classNames.bind(styles);

function Header() {
  const [auth, setAuth] = useState(false)
  const avtUrl = ""
  
  const context = useContext(ModalContext)
  return (
    <header>
      <div className={cx("wrapper")}>
        <div className={cx("logo")}>
          <Link to={config.routes.home}>
            <LogoSvg />
          </Link>
        </div>
        <Search />
        <div className={cx("setup")}>
          {auth ? (
            <>
              <Button darktext to="/">
                + Upload
              </Button>
              <Button basic>
                <Tippy content="Inbox">
                  <span>
                    <MessageSvg />
                  </span>
                </Tippy>
              </Button>
              <Button basic>
                <Tippy content="Message">
                  <span>
                    <Notify />
                  </span>
                </Tippy>
              </Button>
            </>
          ) : (
            <>
              <Button darktext to="/" onClick={context.handleShowModal}>
                + Upload
              </Button>
              <Button primary onClick={context.handleShowModal}>
                Log in
              </Button>
            </>
          )}
          <MenuBox items={auth ? userMenu : items} onChange={handleChange}>
            {auth ? (
              <div className={cx("profile-item")}>
                {avtUrl ? (
                  <img src={AvtDefault} alt="" />
                ) : (
                  <div className={cx("default-avt")}>H</div>
                )}
              </div>
            ) : (
              <FontAwesomeIcon icon={faEllipsisVertical} />
            )}
          </MenuBox>
        </div>
      </div>
    </header>
  );
}

export default Header;
