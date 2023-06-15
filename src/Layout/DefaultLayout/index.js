import React from "react";
import PropTypes from 'prop-types'
import Header from "./Header";
import SideBar from "./SideBar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";

function DefaultLayout({ children }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("nav-bar")}><SideBar /></div>
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.prototype ={
  children: PropTypes.node.isRequired
}


export default DefaultLayout;
