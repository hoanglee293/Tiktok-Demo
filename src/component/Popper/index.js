import React from 'react'
import style from './Popper.module.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

function Popper({children}) {
    const cx = classNames.bind(style)
  return (
    <div className={cx('wrapper')}>{children}</div>
  )
}

Popper.prototype = {
  children: PropTypes.node.isRequired
}
export default Popper