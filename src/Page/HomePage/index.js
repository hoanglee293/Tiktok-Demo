import React from "react";
import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
import BoxUser from "../../component/BoxUser";

const cx = classNames.bind(styles);
function HomePage() {
  return (
    <div className={cx("wrapper")}>
      <BoxUser />
      <BoxUser />
    </div>
  );
}

export default HomePage;
