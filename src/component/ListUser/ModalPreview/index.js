import classNames from "classnames/bind";
import React from "react";
import styles from "./ModalPreview.module.scss";
import Button from "../../Button";
import Popper from "../../Popper";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarDefault from "../../../assets/images/avatar-default.jpeg"


const cx = classNames.bind(styles);
function ModalPreview({data}) {
  return (
    <Popper>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <img
            src={data?.avatar === "https://files.fullstack.edu.vn/f8-tiktok/" ? AvatarDefault : data?.avatar} alt=""
          />
          <Button primary medium>
            Follow
          </Button>
        </div>
        <div className={cx("info")}>
          <h4 className={cx("id")}>
            {data?.nickname}&nbsp;
            {!!data?.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />}
          </h4>
          <span className={cx("name")}>{`${data?.first_name} ${data?.last_name}`}</span>
        </div>
        <div className={cx("interact")}>
          <div><span>{data?.followers_count}</span>Follower</div>
          <div><span>{data?.likes_count}</span>Likes</div>
        </div>
      </div>
    </Popper>
  );
}

export default ModalPreview;
