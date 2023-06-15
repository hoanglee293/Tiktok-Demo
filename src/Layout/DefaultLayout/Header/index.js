import React, { useState } from "react";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css'; 
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faUser,
  faBookmark,
  faCoins,
  faArrowRightFromBracket
} from "@fortawesome/free-solid-svg-icons";
//
import config from "../../../config";
import styles from "./Header.module.scss";
import Search from "../../Search";
import Button from "../../../component/Button";
import MenuBox from "../../Menu";
import { LogoSvg, MessageSvg, Notify } from "../../../assets/svg";
import LoginModal from "../../../component/ModalAuth";

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
    to: "feedback",
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
  const avtUrl = "https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/da29d4c32fd0b34891fcaac913e29cd4~c5_100x100.jpeg?x-expires=1686664800&x-signature=nlSIHnpKpnzcrJ%2FsapuTzvMeT10%3D"
  
  return (
    <header>
      <div className={cx("wrapper")}>
        <Link to={config.routes.home} className={cx("logo")}>
          <LogoSvg />
        </Link>
        <Search />
        <div className={cx("setup")}>
          {auth ? (
            <>
              <Button darktext to="/">
                + Upload
              </Button>
              <Button basic>
                <Tippy content="Inbox">
                  <span><MessageSvg /></span>
                </Tippy>
              </Button>
              <Button basic>
                <Tippy content="Message">
                  <span><Notify /></span>
                </Tippy>
              </Button>
            </>
          ) : (
            <>
              <Button darktext to="/">
                + Upload
              </Button>
              <Button primary onClick={()=> setAuth(true)}>
                Log in
              </Button>
            </>
          )}
          <MenuBox items={!auth ? userMenu : items} onChange={handleChange}>
            {auth ? (
              <div className={cx("profile-item")}>
                {avtUrl ? (<img
                  src={avtUrl}
                  alt=""
                />) :(
                  <div className={cx('default-avt')}>H</div>
                )}
              </div>
            ) : (
              <FontAwesomeIcon icon={faEllipsisVertical} />
            )}
          </MenuBox>
          {!auth && (
            <div className={cx("overlay")}>
              <LoginModal />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
