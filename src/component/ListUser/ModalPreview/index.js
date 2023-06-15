import classNames from "classnames/bind";
import React from "react";
import styles from "./ModalPreview.module.scss";
import Button from "../../Button";
import Popper from "../../Popper";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function ModalPreview() {
  return (
    <Popper>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <img
            src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1686398400&x-signature=GAChPbRzOzO5zp19Yti%2F6M9FJ2E%3D"
            alt=""
          />
          <Button primary medium>
            Follow
          </Button>
        </div>
        <div className={cx("info")}>
          <h4 className={cx("id")}>
            theanh28entertainment&nbsp;
            <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
          </h4>
          <span className={cx("name")}>Theanh28 Entertainment</span>
        </div>
        <div className={cx("interact")}>
          <div><span>9.2M</span>Follower</div>
          <div><span>700M</span>Likes</div>
        </div>
      </div>
    </Popper>
  );
}

export default ModalPreview;
