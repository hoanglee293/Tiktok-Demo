import classNames from "classnames/bind";
import React from "react";
import styles from "./ListUser.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import ModalPreview from "./ModalPreview";

const cx = classNames.bind(styles);

function SuggestedAccount() {
  const renderPreview = (props) => (
    <div className={cx("preview")} tabIndex={-1} {...props}>
      <ModalPreview />
    </div>
  );
  return (
    <div>
      <Tippy
        interactive
        appendTo={document.body}
        maxWidth={"130%"}
        delay={[500, 500]}
        placement="bottom"
        render={renderPreview}
      >
        <Link to={"/"} className={cx("list-item")}>
          <img
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1686398400&x-signature=GAChPbRzOzO5zp19Yti%2F6M9FJ2E%3D"
            alt=""
          />
          <div className={cx("name")}>
            <div className={cx("name-id")}>
              <h4>theanh28entertainment</h4>
              <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
            </div>
            <span>Theanh28 Entertainment</span>
          </div>
        </Link>
      </Tippy>
    </div>
  );
}

SuggestedAccount.prototype = {};
export default SuggestedAccount;
