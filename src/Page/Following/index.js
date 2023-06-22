import React, { useEffect, useState } from "react";
import * as FollowNotLogin from "../../services/FollowingNotLogin";
import classNames from "classnames/bind";
import styles from "./Following.module.scss";
import Button from "../../component/Button";
import Loading from "../../component/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import AvatarDefault from '../../assets/images/avatar-default.jpeg'

const cx = classNames.bind(styles);
function Following() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchApi = async () => {
      const res = await FollowNotLogin.FollowNotLogin(page);
      const data = res.data
      setData(pre => [...pre, ...data]);
      setLoading(false);
    };
    fetchApi();
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
      setLoading(true);
      setPage((page) => page + 1);
    }
  }
  return (
    <>
      <div className={cx("wrapper")}>
        <ul className={cx("list-item")}>
          {data.map((ele, index) => (
            <li key={index}>
              <video
                muted
                loop
                onMouseOver={(e) => e.target.play()}
                onMouseOut={(e) => e.target.load()}
              >
                <source src={ele.popular_video.file_url} type="video/mp4" />
              </video>
              <img src={ele.popular_video.thumb_url} alt="" className={cx("img-position")}/>
              <div className={cx("info")}>
                <div className={cx("avatar")}>
                  <img src={ele.avatar === "https://files.fullstack.edu.vn/f8-tiktok/" ? AvatarDefault : ele.avatar} alt="" />
                </div>
                <h4
                  className={cx("nickname")}
                >{`${ele?.first_name} ${ele?.last_name}`}</h4>
                <span className={cx("id_name")}>{ele?.nickname}&ensp;
                {ele?.tick && (
                  <FontAwesomeIcon icon={faCheckCircle} className={cx("check")} />
                )}
                </span>
                <Button primary>Folow</Button>
              </div>
            </li>
          ))}
        </ul>
        {loading && <Loading />}
      </div>
    </>
  );
}

export default Following;
