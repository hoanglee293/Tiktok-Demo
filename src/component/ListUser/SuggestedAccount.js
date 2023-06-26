import classNames from "classnames/bind";
import React from "react";
import styles from "./ListUser.module.scss";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
import ModalPreview from "./ModalPreview";
import AvatarDefault from "../../assets/images/avatar-default.jpeg"

const cx = classNames.bind(styles);

function SuggestedAccount({data}) {
  const renderPreview = (props) => ( 
    <div className={cx("preview")} tabIndex={-1} {...props}>
      <ModalPreview data={data}/>
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
        <Link to={`/@${data.nickname}`} className={cx("list-item")}>
          <img
            src={data?.avatar === "https://files.fullstack.edu.vn/f8-tiktok/" ? AvatarDefault : data?.avatar}
            alt=""
          />
          <div className={cx("name")}>
            <div className={cx("name-id")}>
              <h4>{data.nickname}</h4>&ensp;
              {!!data?.tick && <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />}
            </div>
            <span>{`${data?.first_name} ${data?.last_name}`}</span>
          </div>
        </Link>
      </Tippy>
    </div>
  );
}

SuggestedAccount.prototype = {};
export default SuggestedAccount;
