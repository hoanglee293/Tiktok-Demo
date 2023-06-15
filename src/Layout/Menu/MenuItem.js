import React from "react";
import PropTypes from 'prop-types'
import { Button } from "../../component";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

function MenuItem({ data, onClick }) {
  const cx = classNames.bind(styles);
  const classes = cx("menu-item", {
    separate: data.separate,
  });
  return (
    <Button
      custom={classes}
      leftIcon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}

MenuItem.prototype = {
  data: PropTypes.any.isRequired,
  onClick: PropTypes.func
}

export default MenuItem;
