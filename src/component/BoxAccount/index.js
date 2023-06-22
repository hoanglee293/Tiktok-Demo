import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import React from "react";
import styles from "./BoxAccount.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import AvatarDefault from '../../assets/images/avatar-default.jpeg'

function BoxAccount({ data }) {
  const cx = classNames.bind(styles);
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <img
        src={data?.avatar === "https://files.fullstack.edu.vn/f8-tiktok/" ? AvatarDefault : data?.avatar}
        alt=""
        className={cx("avatar")}
        height={40}
        width={40}
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.full_name}</span>
          {data.tick && (
            <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
          )}
        </p>
        <span className={cx("id")}>{data.nickname}</span>
      </div>
    </Link>
  );
}

BoxAccount.propTypes = {
  data: PropTypes.object
}

export default BoxAccount;
