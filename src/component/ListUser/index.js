import classNames from "classnames/bind";
import PropTypes from 'prop-types'
import React, { useEffect, useState } from "react";
import styles from "./ListUser.module.scss";
import SuggestedAccount from "./SuggestedAccount";
import * as suggestedAccountService from '../../services/suggetedAcc'

const cx = classNames.bind(styles);
function ListUser({ label }) {
  const [suggests, setSuggests] = useState([])
  const [isSeeAll, setIsSeeAll] = useState(false)

  useEffect(() => {
      const fetchAPI = async () => {

          if (!isSeeAll) {
              const result = await suggestedAccountService.suggest(1, 5)
              setSuggests(result.data)
          }else {
              const result = await suggestedAccountService.suggest(1, 16)
              setSuggests(result.data)
          }
      }
      fetchAPI()
  }, [isSeeAll])
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>{label}</p>
      {suggests.map((ele, index)=>(
        <SuggestedAccount data={ele} key={index}/>
      ))}
      <div className={cx("see-more-btn")} onClick={()=> setIsSeeAll(!isSeeAll)}>
        {!isSeeAll ?  "See All" : "See Less"}
      </div>
    </div>
  );
}

ListUser.prototype = {
  label: PropTypes.string.isRequired
}

export default ListUser;
