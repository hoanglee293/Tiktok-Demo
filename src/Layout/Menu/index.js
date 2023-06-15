import React, { useState } from "react";
import PropTypes from 'prop-types'
import styles from "./Menu.module.scss";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { Popper as PopperWrapper } from "../../component";
import MenuItem from "./MenuItem";
import Language from "./Language";

const defaultFn = () => {};

function MenuBox({ children, items = [], onChange = defaultFn }) {
  const cx = classNames.bind(styles);
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  const renderResult = (attrs) => (
    <div className={cx("wrapper")} tabIndex="-1" {...attrs}>
      <PopperWrapper>
        {history.length > 1 && (
          <Language
            title={"Language"}
            onBack={() => {
              setHistory((prev) => prev.slice(0, prev.length - 1));
            }}
          />
        )}
        <div className={cx('list-items')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  )
  
  //Reset to parent Item
  const handleReset = () => setHistory((pre) => pre.slice(0, 1))
  return (
    <Tippy
      delay={[100, 700]}
      interactive
      hideOnClick={false}
      onHide={handleReset}
      render={renderResult}
    >
      <button className={cx("more-btn")}>{children}</button>
    </Tippy>
  );
}

MenuBox.prototype = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func,
  items: PropTypes.array.isRequired
}

export default MenuBox;
