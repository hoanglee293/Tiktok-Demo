import classNames from 'classnames/bind';
import React from 'react'
import styles from './Loading.module.scss'

const cx = classNames.bind(styles)
function index() {
  return <div className={cx("spinner")}>&ensp;</div>;
}

export default index