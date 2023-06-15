import classNames from "classnames/bind";
import PropTypes from 'prop-types'
import React from "react";
import styles from "./ListUser.module.scss";
import SuggestedAccount from "./SuggestedAccount";

const cx = classNames.bind(styles);
function ListUser({ label }) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>{label}</p>
      <SuggestedAccount />
      <SuggestedAccount />
      <SuggestedAccount />
      <SuggestedAccount />
      <SuggestedAccount />
      <SuggestedAccount />
      <SuggestedAccount />
      <div className={cx("see-more-btn")}>See All</div>
    </div>
  );
}

ListUser.prototype = {
  label: PropTypes.string.isRequired
}

export default ListUser;
