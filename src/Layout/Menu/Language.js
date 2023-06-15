import classNames from "classnames/bind";
import React from "react";
import PropTypes from 'prop-types'
import styles from "./Menu.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function Language({ title, onBack }) {
  const cx = classNames.bind(styles);
  return (
    <div className={cx("box")}>
      <div className={cx("header")}>
        <FontAwesomeIcon icon={faChevronLeft} className={cx("icon")} onClick ={onBack}/>
        {title}
      </div>
    </div>
  );
}

Language.prototype = {
  title: PropTypes.string,
  onBack: PropTypes.func
}

export default Language;
