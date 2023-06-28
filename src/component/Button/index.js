import classNames from "classnames/bind";
import PropTypes from 'prop-types'
import React from "react";
import { Link } from "react-router-dom";
//
import styles from "./Button.module.scss";

function Button({
  to,
  href,
  primary = false,
  darktext = false,
  outline = false,
  large = false,
  medium = false,
  small = false,
  disable = false,
  basic = false,
  btnLogin = false,
  leftIcon,
  custom,
  rounded,
  onClick,
  children,
  ...passProps
}) {
  const cx = classNames.bind(styles);
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  //Remove eventListener when disable exist
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof key === "function") {
        delete props[key];
      }
    });
  }
  
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  const classes = cx("wrapper", {
    [custom]: custom,
    primary,
    large,
    medium,
    small,
    outline,
    btnLogin,
    darktext,
    disable,
    basic,
    rounded,
  });
  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}&ensp;</span>}
      {children}
    </Comp>
  );
}

Button.prototype ={
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  darktext: PropTypes.bool,
  outline: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  disable: PropTypes.bool,
  btnLogin: PropTypes.bool,
  basic: PropTypes.bool,
  leftIcon: PropTypes.any,
  custom: PropTypes.string,
  rounded: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,

}

export default Button;
