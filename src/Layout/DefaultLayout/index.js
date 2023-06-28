import React, { useContext } from "react";
import PropTypes from 'prop-types'
import Header from "./Header";
import SideBar from "./SideBar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import { ModalContext } from "../../component/ModalProvider";
import LoginModal from "../../component/ModalAuth";

function DefaultLayout({ children }) {
  const cx = classNames.bind(styles);
  const context = useContext(ModalContext)

  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("nav-bar")}><SideBar /></div>
        <div className={cx('content')}>{children}</div>
      </div>
      {context.active && <LoginModal isHidden={context.handleHideModal} />}
    </div>
  );
}

DefaultLayout.prototype ={
  children: PropTypes.node.isRequired
}


export default DefaultLayout;
