import React, { useState } from "react";
import Button from "../Button";
import classNames from "classnames/bind";
import styles from "./ModalAuth.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt, faQrcode, faUser } from "@fortawesome/free-solid-svg-icons";
import { FaceBookSvg, GoogleSvg, InstagramSvg, KakaotalkSvg, LineSvg } from "../../assets/svg";

function LoginModal({isAuth}) {
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState()
  const cx = classNames.bind(styles);
  isAuth = login;
  console.log(isAuth)
  const listBtn = [
    {
      name: "Use QR code",
      icon: <FontAwesomeIcon icon={faQrcode} />,
      action: true
      
    },
    {
      name: "Use phone / email / username",
      icon: <FontAwesomeIcon icon={faUser} />,
      action: true
      
    },
    {
      name: "Continue with Facebook",
      icon: <FaceBookSvg />,
      action: false
      
    },
    {
      name: "Continue with Twitter",
      icon: <GoogleSvg />,
      action: false
      
    },
    {
      name: "Continue with Twitter",
      icon: <GoogleSvg />,
      action: false
      
    },
    {
      name: "Continue with LINE",
      icon: <LineSvg />,
      action: false
      
    },
    {
      name: "Continue with Kakaotalk",
      icon: <KakaotalkSvg />,
      action: false
      
    },
    {
      name: "Continue with Apple",
      icon: <FontAwesomeIcon icon={faAppleAlt} />,
      action: false
      
    },
    {
      name: "Continue with Instagram",
      icon: <InstagramSvg />,
      action: false
      
    },
  ]
  return (
    <div className={cx("wrapper")}>
      {!auth ? (
        <>
          <h3>Log in to TikTok</h3>
          <div className={cx("list-btn")}>
            {listBtn.map((item, index) => (
              <Button key={index} btnLogin leftIcon={item.icon} onClick={()=> setLogin(item.action) }>
                {item.name}
              </Button>
            ))}
          </div>
        </>
      ) : (
        <>
          <h3>Sign Up to TikTok</h3>
        </>
      )}
      <div className={cx("modal-footer")}>
        <div className={cx("policy")}>
          By continuing, you agree to TikTok’s{" "}
          <a href="/" target="_blank">
            Terms of Service
          </a>{" "}
          and confirm that you have read TikTok’s{" "}
          <a href="/" target="_blank">
            Privacy Policy.
          </a>
        </div>
        <div className={cx("auth")}>
          Don’t have an account?&ensp;
          <span onClick={() => setAuth(!auth)}>
            {!auth ? "Sign up" : "Log in"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
